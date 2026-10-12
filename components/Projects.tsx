import { featuredProjects, moreProjects, socials } from "@/lib/data";
import FadeIn from "./FadeIn";
import { ArrowRight, ArrowUpRight } from "./icons";

// six cards keep the two-column grid even; the rest go in the list below
const cards = featuredProjects.slice(0, 6);
const rows = [...featuredProjects.slice(6), ...moreProjects];
const total = cards.length + rows.length;
const github = socials.find((s) => s.label === "GitHub")?.url;

const host = (url: string) => {
  const u = new URL(url);
  return u.host + (u.pathname === "/" ? "" : u.pathname);
};
const num = (n: number) => String(n).padStart(2, "0");

const tagClass =
  "border border-neutral-200 px-2 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-800";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-neutral-200 bg-white px-6 py-24 transition-colors duration-300 md:px-12 md:py-32 dark:border-ink-line dark:bg-ink-bg"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-4xl font-medium tracking-tight text-black dark:text-white">
                SELECTED WORK
                <span className="text-neutral-300 dark:text-neutral-700">.</span>
              </h2>
              <div className="mt-4 h-px w-12 bg-black dark:bg-white" />
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                {total} projects · {cards.length} featured
              </p>
            </div>
            <div className="md:col-span-7 md:flex md:items-end md:justify-end">
              <div className="md:text-right">
                <p className="text-lg leading-relaxed text-neutral-500 md:max-w-md dark:text-neutral-400">
                  Marketplaces, management systems, games and tools. Designed,
                  built and shipped solo.
                </p>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-70 dark:text-white"
                  >
                    Explore all projects
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:gap-x-14">
          {cards.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden border border-neutral-200 bg-neutral-50 transition-colors duration-300 group-hover:border-black dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover:border-white"
                >
                  <div className="flex items-center gap-1.5 border-b border-neutral-200 px-3 py-2 transition-colors duration-300 group-hover:border-black dark:border-neutral-800 dark:group-hover:border-white">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"
                      />
                    ))}
                    <span className="ml-3 truncate font-mono text-[10px] text-neutral-400 dark:text-neutral-600">
                      {host(p.url)}
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    {p.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top grayscale-[60%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    )}
                  </div>
                </a>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700">
                      {num(i + 1)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                      {p.category ?? p.tags[0]}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                    </span>
                    live
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-black lg:text-[1.7rem] dark:text-white">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]"
                  >
                    {p.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 md:text-[15px] dark:text-neutral-400">
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={tagClass}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-60 dark:text-white"
                    >
                      Live site
                      <ArrowUpRight size={13} />
                    </a>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-black dark:hover:text-white"
                      >
                        Code
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                    <span className="ml-auto font-mono text-xs text-neutral-300 dark:text-neutral-700">
                      {p.year}
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 md:mt-32">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="font-display text-xl font-medium tracking-tight text-black dark:text-white">
              More work
              <span className="text-neutral-300 dark:text-neutral-700">.</span>
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
              Apps, games and experiments
            </span>
          </div>
          <div className="h-px bg-black dark:bg-white" />
          <div>
            {rows.map((p, i) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid cursor-pointer grid-cols-12 items-center gap-4 border-b border-neutral-200 py-6 md:gap-6 md:py-7 dark:border-neutral-800"
              >
                <span className="col-span-2 font-mono text-sm text-neutral-300 transition-colors duration-300 group-hover:text-black md:col-span-1 dark:text-neutral-700 dark:group-hover:text-white">
                  {num(cards.length + i + 1)}
                </span>
                <div className="col-span-9 transition-transform duration-300 group-hover:translate-x-2 md:col-span-5">
                  <h4 className="font-display text-lg font-semibold tracking-tight text-neutral-800 transition-colors group-hover:text-black md:text-xl dark:text-neutral-200 dark:group-hover:text-white">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {p.blurb}
                  </p>
                </div>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 md:col-span-2 md:block dark:text-neutral-600">
                  {p.category ?? p.tags[0]}
                </span>
                <div className="hidden flex-wrap justify-end gap-2 md:col-span-3 md:flex">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`${tagClass} transition-colors group-hover:border-neutral-400 dark:group-hover:border-neutral-500`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={18}
                    className="-translate-x-1 translate-y-1 text-neutral-300 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-black dark:text-neutral-700 dark:group-hover:text-white"
                  />
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
