#!/usr/bin/env node
// Driver for the Enz Labs portfolio (Next.js 15 + R3F + Framer Motion).
//
// Why this exists: the MCP/Claude preview screenshot tool times out on this
// app because the Three.js render loop + infinite CSS animations never let the
// page go idle. Playwright's page.screenshot() captures immediately, so it
// works where the idle-waiting tools do not. This driver also injects a
// "freeze" stylesheet so screenshots are deterministic frame-to-frame.
//
// It drives the *system* Microsoft Edge via playwright-core (channel: msedge)
// so there is no multi-hundred-MB browser download.
//
// Usage:
//   node driver.mjs check  [--url <url>] [--port <n>]
//   node driver.mjs shot   [--url <url>] [--port <n>] [--out <file>] [--motion] [--width <n>] [--height <n>]
//
// Defaults: --url http://localhost:3000 , shot --out shots/portfolio.png
// Override the port when the dev server picked a different one (autoPort).

import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const a = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t.startsWith("--")) {
      const k = t.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) a[k] = true;
      else { a[k] = next; i++; }
    } else a._.push(t);
  }
  return a;
}

const args = parseArgs(process.argv.slice(2));
const cmd = args._[0];
const port = args.port ? String(args.port) : null;
const url = args.url || (port ? `http://localhost:${port}` : "http://localhost:3000");

// CSS that kills every animation/transition for a stable screenshot.
const FREEZE = `*,*::before,*::after{
  animation:none!important;
  transition:none!important;
  animation-duration:0s!important;
  scroll-behavior:auto!important;
}`;

async function withPage(fn, { reduced = false } = {}) {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  try {
    const ctx = await browser.newContext({
      viewport: {
        width: args.width ? Number(args.width) : 1440,
        height: args.height ? Number(args.height) : 900,
      },
      // "reduce" makes SectionFX render plain (untransformed) divs — cleaner for
      // a full-page screenshot, but it also reproduces a real SSR/CSR hydration
      // mismatch in SectionFX, so `check` only opts in via --reduced.
      reducedMotion: reduced ? "reduce" : "no-preference",
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    const errors = [];   // fatal: JS exceptions / console.error
    const warnings = []; // non-fatal: e.g. the missing-favicon 404
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("response", (r) => {
      if (r.status() < 400) return;
      const u = r.url();
      if (/\/favicon\.ico$/.test(u)) warnings.push(`${r.status()} ${u} (no favicon shipped)`);
      else errors.push(`${r.status()} ${u}`);
    });
    // the page-level console "Failed to load resource: 404" lines duplicate the
    // favicon warning above and carry no URL — drop them so they don't false-fail.
    const filterFavicon = () => {
      for (let i = errors.length - 1; i >= 0; i--)
        if (/Failed to load resource.*404/.test(errors[i])) errors.splice(i, 1);
    };
    const r = await fn(page, errors, warnings, filterFavicon);
    return r;
  } finally {
    await browser.close();
  }
}

async function check() {
  return withPage(async (page, errors, warnings, filterFavicon) => {
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    const status = resp ? resp.status() : 0;
    // the hero <h1> is the anchor that proves React hydrated and rendered
    await page.locator("h1").first().waitFor({ state: "visible", timeout: 15000 });
    const h1 = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ").trim();
    const sections = await page.locator("section").count();
    const projectCards = await page.locator('a[href^="https://"]').count();
    await page.waitForTimeout(800); // let favicon + late requests resolve
    filterFavicon();
    const ok =
      status === 200 &&
      /Cyrus here/i.test(h1) &&
      sections >= 5 &&
      errors.length === 0;
    console.log(JSON.stringify({ url, status, h1, sections, projectCards, errors, warnings }, null, 2));
    if (!ok) { console.error("CHECK FAILED"); process.exitCode = 1; }
    else console.log("CHECK OK");
  }, { reduced: Boolean(args.reduced) });
}

async function shot() {
  const out = resolve(HERE, args.out || "shots/portfolio.png");
  mkdirSync(dirname(out), { recursive: true });
  return withPage(async (page) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.locator("h1").first().waitFor({ state: "visible", timeout: 15000 });
    if (args.full) {
      // Inner sections use Reveal/whileInView (IntersectionObserver, once:true) and
      // start at opacity:0. A naive fullPage screenshot shows them blank. Scroll the
      // whole page in steps to fire every reveal, then return to the top.
      await page.evaluate(async () => {
        const step = Math.round(window.innerHeight * 0.8);
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 260));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 400));
      });
    }
    if (!args.motion) await page.addStyleTag({ content: FREEZE });
    // let entrance animations settle / freeze take effect, fonts load
    await page.waitForTimeout(1200);
    await page.screenshot({ path: out, fullPage: Boolean(args.full) });
    console.log("wrote", out);
  }, { reduced: !args.motion });
}

const table = { check, shot };
if (!table[cmd]) {
  console.error("usage: node driver.mjs <check|shot> [--url <url>] [--port <n>] [--out <file>] [--motion] [--full]");
  process.exit(2);
}
await table[cmd]();
