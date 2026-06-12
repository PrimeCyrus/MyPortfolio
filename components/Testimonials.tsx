import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-line bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt">
            04 — Word on the street
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Kind words
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} from="flip">
              <figure className="glass card-lift flex h-full flex-col justify-between gap-8 rounded-2xl p-7">
                <blockquote className="text-sm leading-relaxed text-ink/90">
                  <svg
                    className="mb-4 h-6 w-6 text-cobalt"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M11 7H7a4 4 0 0 0-4 4v6h6v-6H6.5A2.5 2.5 0 0 1 9 8.5V7h2zm10 0h-4a4 4 0 0 0-4 4v6h6v-6h-2.5a2.5 2.5 0 0 1 2.5-2.5V7h2z" />
                  </svg>
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div className="font-display text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="mt-1 font-mono text-xs text-soft">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
