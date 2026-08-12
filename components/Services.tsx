"use client";

import { useState } from "react";
import { pricingTiers } from "@/lib/data";
import Reveal from "./Reveal";

const CheckIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-cobalt"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DashIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-soft/40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function Services() {
  const [active, setActive] = useState(0);
  const tier = pricingTiers[active];

  return (
    <section
      id="services"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-12 md:px-8"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt">
          03 — What I offer
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Services
        </h2>
        <p className="mt-2 max-w-xl text-sm text-soft md:text-base">
          Full-stack web &amp; mobile development. Next.js, React, React Native.
        </p>
      </Reveal>

      <div className="mt-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-line">
          {pricingTiers.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`px-3 py-2.5 text-center font-display text-xs font-semibold transition-colors duration-200 md:text-sm ${
                active === i
                  ? "border-b-2 border-cobalt text-ink"
                  : "text-soft hover:text-ink"
              }`}
            >
              {t.name.split(" ").slice(1).join(" ")}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="glass mt-4 rounded-2xl p-5 md:p-8">
          <div className="flex items-start gap-3">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              {tier.name}
            </h3>
          </div>

          <p className="mt-3 font-display text-3xl font-bold text-cobalt md:text-4xl">
            {tier.price}
          </p>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-soft md:text-base">
            {tier.summary}
          </p>

          {/* Examples */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tier.examples.map((ex) => (
              <span
                key={ex}
                className="rounded-md bg-tint px-2.5 py-1 text-xs font-semibold text-cobalt-deep"
              >
                {ex}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-soft">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {tier.delivery}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
              {tier.revisions}
            </span>
          </div>

          {/* What's Included */}
          <div className="mt-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
              What&apos;s Included
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tier.features
                .filter((f) => f.included)
                .map((f) => (
                  <li key={f.label} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-xs md:text-sm text-ink/90">
                      {f.label}
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Not Included */}
          {tier.features.some((f) => !f.included) && (
            <div className="mt-4">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-soft/60 md:text-sm">
                Not Included
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {tier.features
                  .filter((f) => !f.included)
                  .map((f) => (
                    <li key={f.label} className="flex items-center gap-2">
                      <DashIcon />
                      <span className="text-xs md:text-sm text-soft/50">
                        {f.label}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <a
            href="#contact"
            className="mt-5 inline-block cursor-pointer rounded-lg bg-gradient-to-r from-cobalt to-cyan px-6 py-2.5 font-bold text-sm text-paper transition-shadow duration-200 hover:shadow-[0_0_24px_rgb(59_130_246/0.45)] md:text-base"
          >
            Get started →
          </a>
        </div>
      </div>
    </section>
  );
}
