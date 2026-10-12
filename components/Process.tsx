import { processSteps } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-neutral-200 bg-neutral-50 px-6 py-24 transition-colors duration-300 md:px-12 md:py-32 dark:border-ink-line dark:bg-ink-card"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl font-medium tracking-tight text-black dark:text-white">
                PROCESS
                <span className="text-neutral-300 dark:text-neutral-700">.</span>
              </h2>
              <div className="mt-4 h-px w-12 bg-black dark:bg-white" />
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                How I work
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                From idea to live in four steps — one pair of hands from the
                first brief to the deployed product.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute bottom-0 left-[5px] top-0 hidden w-px bg-neutral-200 md:block dark:bg-neutral-800" />
          <div className="space-y-6">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80} className="relative">
                <div className="absolute left-0 top-8 z-10 hidden md:flex">
                  <div className="h-3 w-3 bg-black ring-4 ring-neutral-50 dark:bg-white dark:ring-ink-card" />
                </div>
                <div className="group md:ml-16">
                  <div className="relative border border-neutral-200 bg-white transition-all duration-300 hover:border-black dark:border-neutral-800 dark:bg-[#0d0d0d] dark:hover:border-neutral-600">
                    <div className="h-px bg-black dark:bg-white" />
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-neutral-200 bg-white font-display text-xl font-bold text-black transition-colors group-hover:border-black md:h-16 md:w-16 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:group-hover:border-neutral-600">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                                Step {i + 1}
                              </p>
                              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-black dark:text-white">
                                {s.title}
                              </h3>
                            </div>
                            <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                              {String(i + 1).padStart(2, "0")} /{" "}
                              {String(processSteps.length).padStart(2, "0")}
                            </p>
                          </div>
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-[15px] dark:text-neutral-400">
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="absolute bottom-0 left-[3px] hidden h-[6px] w-[6px] bg-neutral-300 md:block dark:bg-neutral-700" />
        </div>
      </div>
    </section>
  );
}
