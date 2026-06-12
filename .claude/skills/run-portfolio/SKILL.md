---
name: run-portfolio
description: Run, build, launch, screenshot, or smoke-test the Enz Labs portfolio (Next.js 15 + React Three Fiber + Framer Motion). Use when asked to start the dev server, take a screenshot of the portfolio, verify the homepage renders, or confirm a UI/design change works in the real app.
---

# Run the Enz Labs portfolio

Single-page Next.js 15 portfolio (Tailwind v4, Framer Motion, React Three Fiber).
One route — `/` — composed of a hero (3D torus knot) plus scroll-animated
sections (`KnowMe`, `Work`, `WorkTogether`, `Testimonials`, `Writing`, `Contact`).

It is driven by **`.claude/skills/run-portfolio/driver.mjs`** — a Playwright
script that launches the *system* Microsoft Edge (no browser download) to
smoke-test and screenshot the running dev server. Use the driver, **not** the
MCP `preview_screenshot` tool: this app's Three.js render loop + infinite CSS
animations never let the page go idle, so `preview_screenshot` times out at 30s
every time. The driver's `page.screenshot()` captures immediately.

All paths below are relative to the project root (`E:\Projects\Real\Portfolio`).

## Prerequisites

- Node 24 / npm 11 (already present here).
- Microsoft Edge — used at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
  (default on Windows 11). The driver connects via Playwright `channel: "msedge"`.
- Install the driver's own dependency once (separate from the app's deps;
  `node_modules` is gitignored, so this is needed on a clean checkout):

```bash
cd .claude/skills/run-portfolio && npm install
```

## Build / install the app

```bash
npm install        # app dependencies (run from project root)
```

A production build is **not** required to run or screenshot — use the dev
server. (`npm run build` works too; the README documents Netlify `.next`.)

## Run (agent path) — driver.mjs

### 1. Start the dev server

Use the MCP preview tool (it reads the existing `.claude/launch.json` `portfolio`
config and picks a free port via autoPort) and note the `port` it returns:

```
preview_start  name=portfolio          → { port: 52203, ... }   # port varies
```

Or start it directly on the default port 3000:

```bash
npm run dev                            # → http://localhost:3000
```

### 2. Smoke-test the homepage

`check` loads `/`, asserts HTTP 200, that the hero `<h1>` says "Cyrus here…",
that ≥5 `<section>`s and the project-card links are present, and that there are
no JS/console errors. Exit code 0 = pass, 1 = fail. Pass `--port` to match the
server (omit it to use port 3000):

```bash
node .claude/skills/run-portfolio/driver.mjs check --port 52203
```

Verified output:

```json
{
  "url": "http://localhost:52203",
  "status": 200,
  "h1": "Cyrus here. I turn ideas into apps, websites and useful tools.",
  "sections": 7,
  "projectCards": 11,
  "errors": [],
  "warnings": []
}
CHECK OK
```

### 3. Screenshot

`shot` writes a PNG (default `shots/portfolio.png` inside the skill dir). Add
`--full` for the whole scroll page — the driver auto-scrolls first so the
`whileInView` sections actually render (see Gotchas):

```bash
node .claude/skills/run-portfolio/driver.mjs shot --port 52203 --full --out shots/portfolio-full.png
```

Then open the PNG to confirm it shows the hero + all sections, not a blank page.

Flags: `--url <url>` (overrides `--port`), `--port <n>`, `--out <file>`,
`--full` (whole page), `--motion` (keep animations live instead of freezing —
default freezes CSS animations for a deterministic frame), `--width`/`--height`
(viewport, default 1440×900).

### 4. Reproduce the reduced-motion hydration bug (optional)

```bash
node .claude/skills/run-portfolio/driver.mjs check --port 52203 --reduced
```

This sets `prefers-reduced-motion: reduce` and exits 1, surfacing a real
SSR/CSR hydration mismatch in `components/SectionFX.tsx` (see Gotchas). Normal
`check` (no `--reduced`) passes clean.

## Run (human path)

```bash
npm run dev      # → http://localhost:3000, open in a browser, Ctrl-C to stop
```

Headless this shows nothing — use the driver to actually see/verify the page.

## Gotchas

- **`preview_screenshot` (MCP) always times out (30s) on this app.** The R3F
  `requestAnimationFrame` loop and the infinite `drift`/`ring-spin`/`ping` CSS
  animations mean the page never reaches network/render idle, which that tool
  waits for. `preview_snapshot` (accessibility tree) *does* work and is great
  for checking text/structure. For pixels, use `driver.mjs shot`.
- **`--full` screenshots are blank below the fold unless you scroll first.**
  Inner content uses `Reveal` (`components/Reveal.tsx`) with
  `whileInView` + `initial="hidden"` (opacity 0) + `viewport={{ once: true }}`.
  Off-screen sections never intersect, so a naive full-page capture shows black.
  The driver scrolls top→bottom in steps (firing each IntersectionObserver),
  then returns to the top before capturing. `once: true` keeps them revealed.
- **Reduced motion triggers a hydration mismatch.** `SectionFX` calls
  `useReducedMotion()` and returns a *different element tree* when reduced
  (`<div>` vs the `motion.div` wrapper) — `components/SectionFX.tsx:59`. SSR
  renders the motion tree (server can't know the preference); a reduced-motion
  client renders the plain tree → React hydration error + a Framer Motion
  "Target ref is defined but not hydrated" follow-on. Real users with reduced
  motion enabled hit this. That's why `check` defaults to normal motion and only
  reproduces the bug under `--reduced`.
- **No favicon is shipped** (no `public/` dir, no `app/icon.*`), so the browser's
  automatic `/favicon.ico` request 404s. The driver classifies this as a
  `warning`, not a failure, so it doesn't false-fail `check`.
- **The dev port is not fixed.** `preview_start` uses autoPort (e.g. 52203);
  a bare `npm run dev` uses 3000. Always pass the driver the actual port.
- **Driver deps are separate from the app's.** `driver.mjs` imports
  `playwright-core` from `.claude/skills/run-portfolio/node_modules` (its own
  `package.json`), independent of the app's `node_modules`.

## Troubleshooting

- `Cannot find package 'playwright-core'` → run `npm install` inside
  `.claude/skills/run-portfolio/` (step in Prerequisites).
- `browserType.launch: Chromium distribution 'msedge' is not found` → Edge isn't
  at the default path; install Edge, or edit `driver.mjs` `channel: "msedge"` to
  `channel: "chrome"` if Chrome is present instead.
- `check` exits 1 with `Hydration failed…` but you didn't pass `--reduced` →
  shouldn't happen on a clean tree; it means a new SSR/CSR mismatch was
  introduced. Read the diff in the logged error to find the divergent element.
- `shot` PNG is mostly black → you ran without `--full` on a tall page, or the
  server hadn't finished its first compile (watch `preview_logs` for
  `Compiled / in …`); re-run once warm.
