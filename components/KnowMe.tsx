"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  languages,
  signatureLanguage,
  rhythm,
  rhythmFacts,
  workStyle,
  magnumOpus,
  topProjects,
} from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const tabs = ["Skills", "Work style", "By the numbers"] as const;
type Tab = (typeof tabs)[number];

/* staggered 3D pop for cards inside a tab — replays on every tab switch */
function Pop({
  children,
  i,
  className,
}: {
  children: React.ReactNode;
  i: number;
  className?: string;
}) {
  const tilt = i % 2 === 0 ? 22 : -18;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: tilt, scale: 0.88, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.08 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function KnowMe() {
  const [tab, setTab] = useState<Tab>("Skills");

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Parallax speed={0.6}>
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt-deep">
            01 — Get to know me
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            More than a project list
          </h2>
          <p className="mt-3 max-w-lg text-soft">
            How I work — data from GitHub History.
          </p>
        </Reveal>
      </Parallax>

      <Reveal delay={0.1} from="zoom">
        <div className="mt-9 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cursor-pointer rounded-lg px-5 py-2 text-sm font-bold transition-all duration-200 ${
                tab === t
                  ? "bg-gradient-to-r from-cobalt to-cyan text-paper shadow-[0_0_22px_rgb(59_130_246/0.35)]"
                  : "glass text-soft hover:text-cobalt-deep"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -44, scale: 0.95, filter: "blur(12px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {tab === "Skills" && <Skills />}
            {tab === "Work style" && <WorkStyle />}
            {tab === "By the numbers" && <Numbers />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ——— Skills tab ——— */

function Donut() {
  const r = 70;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-44 w-44 -rotate-90"
      role="img"
      aria-label="Languages by bytes written"
    >
      {languages.map((l) => {
        const dash = (l.pct / 100) * c;
        const offset = -acc;
        acc += dash;
        return (
          <circle
            key={l.name}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke={l.color}
            strokeWidth="34"
            strokeDasharray={`${Math.max(dash - 3, 1)} ${c}`}
            strokeDashoffset={offset}
          />
        );
      })}
    </svg>
  );
}

function Skills() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Pop i={0} className="glass rounded-2xl p-7 lg:col-span-3">
        <h3 className="font-display font-semibold">Languages I speak</h3>
        <p className="mt-1 text-sm text-soft">By bytes written across my repos</p>
        <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row">
          <Donut />
          <ul className="w-full flex-1 space-y-2.5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center gap-3 text-sm">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ background: l.color }}
                />
                <span className="font-semibold">{l.name}</span>
                <span className="ml-auto font-mono text-xs font-semibold text-soft">
                  {l.pct}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Pop>

      <div className="flex flex-col gap-6 lg:col-span-2">
        <Pop i={1} className="glass rounded-2xl p-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-soft">
            Signature language
          </p>
          <div className="mt-3 font-display text-4xl font-bold text-gradient">
            {signatureLanguage.name}
          </div>
          <p className="mt-1.5 text-sm text-soft">{signatureLanguage.note}</p>
        </Pop>
        <Pop i={2} className="glass flex-1 rounded-2xl p-7">
          <h3 className="font-display font-semibold">Toolbox</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "React", "Flutter", "Tailwind", "Node.js", "Figma", "Netlify", "Supabase", "Framer Motion"].map((t) => (
              <span
                key={t}
                className="rounded-md bg-tint px-3 py-1.5 text-xs font-bold text-cobalt-deep"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-soft">
            …and whatever the project needs.
          </p>
        </Pop>
      </div>
    </div>
  );
}

/* ——— Work style tab ——— */

const heat = ["#141a28", "#1c3261", "#22509e", "#2f6fd6", "#5da0ff"];

function WorkStyle() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Pop i={0} className="glass rounded-2xl p-7 lg:col-span-3">
        <h3 className="font-display font-semibold">My rhythm</h3>
        <p className="mt-1 text-sm text-soft">When I code, hour by hour</p>
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[420px]">
            <div className="mb-2 grid grid-cols-[2.5rem_repeat(12,1fr)] gap-1 font-mono text-[10px] font-semibold text-soft">
              <span />
              {["0:00", "", "4:00", "", "8:00", "", "12:00", "", "16:00", "", "20:00", ""].map(
                (h, i) => (
                  <span key={i} className="text-center">{h}</span>
                )
              )}
            </div>
            {rhythm.map((row, ri) => (
              <div
                key={row.day}
                className="mb-1 grid grid-cols-[2.5rem_repeat(12,1fr)] items-center gap-1"
              >
                <span className="font-mono text-[11px] font-semibold text-soft">
                  {row.day}
                </span>
                {row.cells.map((v, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.25 + ri * 0.045 + ci * 0.014,
                    }}
                    className="h-6 rounded"
                    style={{ background: heat[v] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {rhythmFacts.map((f) => (
            <div key={f.label} className="rounded-xl bg-tint/70 p-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-soft">
                {f.label}
              </p>
              <p className="mt-1.5 font-display text-2xl font-bold text-cobalt-deep">
                {f.value}
              </p>
              <p className="mt-1 text-sm text-soft">{f.note}</p>
            </div>
          ))}
        </div>
      </Pop>

      <Pop i={1} className="glass rounded-2xl p-7 lg:col-span-2">
        <h3 className="font-display font-semibold">How I work</h3>
        <ul className="mt-5 space-y-4">
          {workStyle.map((w) => (
            <li key={w} className="flex items-start gap-3 text-sm leading-relaxed">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {w}
            </li>
          ))}
        </ul>
        <div className="mt-7 rounded-xl border border-dashed border-cobalt/40 bg-tint/50 p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cobalt-deep">
            The honest bit
          </p>
          <p className="mt-2 text-sm leading-relaxed text-soft">
            Every project here started as something I didn&apos;t know how to
            build yet.
          </p>
        </div>
      </Pop>
    </div>
  );
}

/* ——— By the numbers tab ——— */

function Numbers() {
  const max = topProjects[0].commits;
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Pop i={0} className="glass rounded-2xl p-7 lg:col-span-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-soft">
          Most invested project
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold">
          {magnumOpus.title}
        </h3>
        <p className="mt-1.5 text-sm text-soft">{magnumOpus.desc}</p>
        <div className="mt-5 font-display text-5xl font-bold text-gradient">
          {magnumOpus.commits}
          <span className="ml-2 text-lg font-semibold text-soft">commits</span>
        </div>
        <span className="mt-5 inline-block rounded-md bg-tint px-3 py-1.5 text-xs font-bold text-cobalt-deep">
          {magnumOpus.language}
        </span>
      </Pop>

      <Pop i={1} className="glass rounded-2xl p-7 lg:col-span-3">
        <h3 className="font-display font-semibold">Top 5 by commits</h3>
        <p className="mt-1 text-sm text-soft">Where the hours actually went</p>
        <ul className="mt-6 space-y-5">
          {topProjects.map((p, i) => (
            <li key={p.name}>
              <div className="mb-1.5 flex items-baseline justify-between text-sm">
                <span className="font-semibold">
                  {i + 1}. {p.name}
                </span>
                <span className="font-mono text-xs font-semibold text-soft">
                  {p.commits}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-tint">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.max((p.commits / max) * 100, 4)}%`,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cobalt to-cyan"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-soft">All 10 live — linked below.</p>
      </Pop>
    </div>
  );
}
