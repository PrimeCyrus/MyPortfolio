import { collabModes } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const icons: Record<string, React.ReactNode> = {
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  trending: (
    <>
      <path d="M22 7l-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </>
  ),
};

export default function WorkTogether() {
  return (
    <section id="together" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt">
          03 — No wrong way to hire me
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-xl text-soft">
          Freelance, part-time, full-time, or a startup from zero. Pick a
          lane — or invent one.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {collabModes.map((m, i) => (
          <Reveal
            key={m.name}
            delay={Math.min(i * 0.06, 0.2)}
            from={i % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
            <TiltCard className="h-full rounded-2xl" max={5}>
            <div className="glass card-lift flex h-full flex-col rounded-2xl p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint">
                <svg
                  className="h-5 w-5 text-cobalt"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {icons[m.icon]}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {m.name}
              </h3>
              <p className="mt-2.5 flex-1 leading-relaxed text-soft">{m.desc}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="rounded-md bg-tint px-3.5 py-1.5 text-xs font-bold text-cobalt-deep">
                  {m.note}
                </span>
                <a
                  href="#contact"
                  className="cursor-pointer text-sm font-bold text-cobalt hover:underline"
                >
                  Start here →
                </a>
              </div>
            </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
