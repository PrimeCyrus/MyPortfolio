import { profile, stats } from "@/lib/data";
import FadeIn from "./FadeIn";
import { BriefcaseIcon, CodeIcon, LayersIcon, CalendarIcon } from "./icons";

const statIcons = [
  <LayersIcon key="a" size={20} />,
  <CodeIcon key="b" size={20} />,
  <BriefcaseIcon key="c" size={20} />,
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative bg-white pb-28 pt-24 transition-colors duration-300 dark:bg-ink-bg"
    >
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-[0.06] dark:via-white" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-4">
            <h2 className="font-display text-4xl font-medium tracking-tight text-black md:text-5xl dark:text-white">
              PROFILE
              <span className="text-neutral-300 dark:text-neutral-700">.</span>
            </h2>
            <div className="mb-4 mt-6 h-1 w-12 bg-black dark:bg-white" />
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Who I am &amp; what I do
            </p>
          </FadeIn>

          <FadeIn delay={100} className="md:col-span-8">
            <div className="relative border-l-2 border-neutral-200 px-6 py-8 md:px-10 dark:border-ink-line">
              <div
                aria-hidden
                className="absolute -top-2 left-4 font-display text-[80px] font-bold leading-none text-black opacity-[0.04] dark:text-white"
              >
                &ldquo;
              </div>
              <p className="text-[1.2rem] font-light leading-[1.8] text-neutral-500 dark:text-[#999]">
                {profile.summary.map(([text, strong], i) => (
                  <span
                    key={i}
                    className={
                      strong
                        ? "profile-keyword text-black dark:text-[#eee]"
                        : undefined
                    }
                  >
                    {/^[.,]/.test(text) ? "" : i ? " " : ""}
                    {text}
                  </span>
                ))}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="stat-card h-full">
                <div className="mb-4 h-5 text-neutral-400 dark:text-[#555]">
                  {statIcons[i]}
                </div>
                <div className="mb-2 font-display text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-black dark:text-[#f0f0f0]">
                  {s.value}
                </div>
                <div className="mb-1 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-neutral-500 dark:text-[#888]">
                  {s.label}
                </div>
                <div className="text-[0.7rem] text-neutral-400 dark:text-[#555]">
                  {s.note}
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={stats.length * 80}>
            <div className="stat-card h-full">
              <div className="mb-4 h-5 text-neutral-400 dark:text-[#555]">
                <CalendarIcon size={20} />
              </div>
              <div className="mb-2 flex min-h-10 items-center gap-2 font-display text-xl font-semibold tracking-tight text-black dark:text-[#f0f0f0]">
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500" />
                Open to Work
              </div>
              <div className="mb-1 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-neutral-500 dark:text-[#888]">
                Current status
              </div>
              <div className="text-[0.7rem] text-neutral-400 dark:text-[#555]">
                Freelance projects
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
