import { featuredProjects, moreProjects } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Work() {
  return (
    <section id="work" className="relative border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Parallax speed={0.7}>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt-deep">
              02 — Things I&apos;ve built
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-lg text-soft">
              All live. Designed, built, shipped solo.
            </p>
          </Reveal>
        </Parallax>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={Math.min(i * 0.05, 0.15)}
              from={(["up", "left", "right"] as const)[i % 3]}
              className="h-full"
            >
              <TiltCard className="h-full rounded-2xl">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-lift group flex h-full cursor-pointer flex-col rounded-2xl p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold transition-colors duration-200 group-hover:text-cobalt-deep">
                      {p.title}
                    </h3>
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-soft transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-tint px-3 py-1 text-xs font-bold text-cobalt-deep"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-xs font-semibold text-soft">
                      {p.year}
                    </span>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} from="zoom">
          <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-soft">
            + A few more experiments
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((p) => (
              <TiltCard key={p.title} className="rounded-xl" max={10}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-lift group block h-full cursor-pointer rounded-xl p-5"
                >
                  <h3 className="font-display text-sm font-semibold transition-colors duration-200 group-hover:text-cobalt-deep">
                    {p.title} ↗
                  </h3>
                  <p className="mt-1.5 text-sm text-soft">{p.blurb}</p>
                </a>
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
