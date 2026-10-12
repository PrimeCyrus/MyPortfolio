import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Brief",
    text: "You tell me what you need. I come back with scope, price and a delivery date — no surprises.",
  },
  {
    n: "02",
    title: "Design",
    text: "Figma mockups first, so you see the look and flow before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    text: "Clean, responsive code with progress you can check along the way. Revisions are included.",
  },
  {
    n: "04",
    title: "Ship",
    text: "Deployed, domain connected and tested on real devices. I stay around for fixes after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt">
          04 — How I work
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          From idea to live in four steps
        </h2>
      </Reveal>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <span className="text-gradient font-display text-4xl font-bold">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {s.text}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
