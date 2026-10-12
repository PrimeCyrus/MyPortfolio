import { email, pricingTiers } from "@/lib/data";
import FadeIn from "./FadeIn";
import { ArrowRight } from "./icons";

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-neutral-200 bg-neutral-50 px-6 py-24 transition-colors duration-300 md:px-12 md:py-32 dark:border-ink-line dark:bg-ink-card"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16">
          <h2 className="font-display text-4xl font-medium tracking-tight text-black dark:text-white">
            SERVICES
            <span className="text-neutral-300 dark:text-neutral-700">.</span>
          </h2>
        </FadeIn>

        <div>
          {pricingTiers.map((t, i) => (
            <FadeIn key={t.name}>
              <div className="group relative grid grid-cols-1 gap-8 border-t border-neutral-200 py-12 transition-colors hover:bg-white md:grid-cols-12 dark:border-neutral-800 dark:hover:bg-black/20">
                <div className="hidden pt-1 font-mono text-sm text-neutral-300 md:col-span-1 md:block dark:text-neutral-700">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-4">
                  <span className="mb-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-green-600 dark:text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {t.price}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-black dark:text-white">
                    {t.name}
                  </h3>
                  <div className="mt-1 font-mono text-sm uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
                    {t.delivery} • {t.revisions}
                  </div>
                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent(t.name)}`}
                    className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-60 dark:text-white"
                  >
                    Get started
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="leading-relaxed text-neutral-600 md:col-span-5 dark:text-neutral-400">
                  <p className="text-black dark:text-white">{t.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {t.features.map((f) => (
                      <li
                        key={f.label}
                        className={`flex gap-3 text-sm ${f.included ? "" : "text-neutral-400 line-through dark:text-neutral-600"}`}
                      >
                        <span className="mt-[9px] h-px w-3 flex-shrink-0 bg-neutral-400 transition-all duration-300 group-hover:w-5 group-hover:bg-black dark:bg-neutral-600 dark:group-hover:bg-white" />
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap content-start gap-2 md:col-span-2">
                  {t.examples.map((e) => (
                    <span
                      key={e}
                      className="border border-neutral-200 bg-white px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-600 transition-colors group-hover:border-black dark:border-neutral-800 dark:bg-black/50 dark:text-neutral-400 dark:group-hover:border-neutral-500"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-neutral-200 dark:border-neutral-800" />
        </div>
      </div>
    </section>
  );
}
