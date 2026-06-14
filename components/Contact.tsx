import { email, socials } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="aurora relative overflow-hidden border-t border-line"
    >
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(232 234 240 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(232 234 240 / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8">
        <Parallax speed={0.9}>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt-deep">
              06 — Got something in mind?
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-gradient">what&apos;s next.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-soft">
              No fluff. Just premium design and high-performance engineering.
            </p>
          </Reveal>
        </Parallax>

        <Reveal delay={0.15} from="zoom">
          <a
            href={`mailto:${email}`}
            className="mt-10 inline-block cursor-pointer rounded-xl bg-gradient-to-r from-cobalt to-cyan px-9 py-4.5 font-display text-lg font-semibold text-paper shadow-[0_0_36px_rgb(59_130_246/0.35)] transition-shadow duration-200 hover:shadow-[0_0_60px_rgb(34_211_238/0.55)]"
          >
            {email}
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            {socials.map((s) => {
              const norm = s.label.toLowerCase();
              let icon: React.ReactNode = null;
              if (norm.includes("github")) {
                icon = (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                );
              } else if (norm.includes("twitter") || norm.includes("x")) {
                icon = (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                );
              } else if (norm.includes("instagram")) {
                icon = (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                );
              }

              return (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold text-soft transition-all duration-200 hover:text-cobalt-deep hover:shadow-[0_0_24px_rgba(59,130,246,0.12)] border border-line/40 hover:border-line"
                >
                  {icon && (
                    <span className="text-soft transition-colors duration-200 group-hover:text-cobalt">
                      {icon}
                    </span>
                  )}
                  <span>{s.label}</span>
                  <span className="text-[10px] opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-soft/70 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Enz Labs — Cyrus</span>
          <span>Built and designed with love ❤️</span>
        </div>
      </footer>
    </section>
  );
}
