import { skills } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-neutral-200 bg-white pb-28 pt-24 transition-colors duration-300 dark:border-ink-line dark:bg-ink-bg"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-black md:text-5xl dark:text-white">
                TECHNICAL
                <br />
                SKILLS
                <span className="text-neutral-300 dark:text-neutral-700">.</span>
              </h2>
              <div className="mb-4 mt-6 h-1 w-12 bg-black dark:bg-white" />
              <p className="max-w-md text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                The stack behind the marketplaces, management systems, games
                and mobile apps I have shipped.
              </p>
            </div>
            <p className="hidden font-mono text-xs uppercase tracking-widest text-neutral-400 md:block dark:text-neutral-600">
              Hover to explore
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-6">
        {skills.map((row, r) => (
          <div key={r} className="marquee">
            <div className={`marquee-track ${r % 2 ? "reverse" : ""}`}>
              {/* four copies so the -50% loop is seamless on wide screens */}
              {[0, 1, 2, 3].flatMap((copy) =>
                row.map((s) => (
                  <div
                    key={`${copy}-${s.name}`}
                    className="skill-card"
                    aria-hidden={copy > 0}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.icon}
                      alt=""
                      loading="lazy"
                      className="skill-icon"
                    />
                    <span className="skill-name">{s.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
