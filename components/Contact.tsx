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
              Whatever it is,
              <br />
              <span className="text-gradient">I&apos;m in.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-soft">
              A project, a role, a half-formed idea. I reply fast.
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
          <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="cursor-pointer font-mono text-xs font-semibold uppercase tracking-[0.2em] text-soft transition-colors duration-200 hover:text-cobalt-deep"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-soft/70 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Enz Labs — Cyrus</span>
          <span>Designed &amp; built from scratch</span>
        </div>
      </footer>
    </section>
  );
}
