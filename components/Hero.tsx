"use client";

import { useEffect, useState } from "react";
import { email, profile, socials } from "@/lib/data";
import {
  BuildingIcon,
  CalendarIcon,
  CopyIcon,
  GitHubIcon,
  InstagramIcon,
  MailIcon,
  VerifiedIcon,
  XIcon,
} from "./icons";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon size={16} />,
  Twitter: <XIcon size={15} />,
  Instagram: <InstagramIcon size={16} />,
};

const heroStats = [
  { value: profile.experience, label: "Experience" },
  { value: "15+", label: "Projects" },
  { value: "20", label: "Tech stack" },
];

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="whitespace-pre text-neutral-400 dark:text-neutral-600">
      <span className="mr-4 select-none text-neutral-300 dark:text-neutral-700">
        {String(n).padStart(2, "0")}
      </span>
      {children}
    </div>
  );
}

const Key = ({ children }: { children: React.ReactNode }) => (
  <span className="text-neutral-600 dark:text-neutral-400">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-600 dark:text-green-400">&quot;{children}&quot;</span>
);

function SlideButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: string;
}) {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden border px-8 py-4 font-mono text-xs uppercase tracking-widest transition-colors ${
        primary
          ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
          : "border-neutral-300 text-neutral-600 hover:border-black hover:text-black dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
      }`}
    >
      <span className="relative z-10 block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {primary && <span className="cta-shine" />}
    </a>
  );
}

export default function Hero() {
  const [role, setRole] = useState(0);
  const [shown, setShown] = useState(true);
  const [copied, setCopied] = useState(false);

  // cycle the last headline word
  useEffect(() => {
    const id = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setRole((r) => (r + 1) % profile.role.length);
        setShown(true);
      }, 500);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const round =
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-black hover:text-black dark:border-neutral-800 dark:hover:border-white dark:hover:text-white";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-neutral-200 bg-white transition-colors duration-300 dark:border-neutral-800 dark:bg-ink-bg"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 text-black opacity-[0.03] dark:text-white dark:opacity-[0.05]" />
      <div className="hero-glow-1 pointer-events-none absolute right-[-80px] top-[-150px] h-[500px] w-[500px] rounded-full" />
      <div className="hero-glow-2 pointer-events-none absolute bottom-[-120px] left-[-60px] h-[400px] w-[400px] rounded-full" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-12 md:py-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {/* identity row */}
            <div className="hero-in flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="avatar">
                  <div className="avatar-ring" />
                  <div className="avatar-face bg-neutral-100 font-display text-3xl font-bold text-black dark:bg-neutral-900 dark:text-white">
                    {profile.name[0]}
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 z-10">
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-ink-bg" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl dark:text-white">
                    {profile.name}
                  </h1>
                  <VerifiedIcon className="flex-shrink-0 drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]" />
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                    <CalendarIcon size={12} />
                    {profile.experience}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                    <BuildingIcon size={12} />
                    {profile.company}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="hero-in my-8 h-px bg-neutral-200 dark:bg-neutral-800"
              style={{ animationDelay: "100ms" }}
            />

            <div className="hero-in" style={{ animationDelay: "150ms" }}>
              <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tighter text-black md:text-6xl lg:text-7xl dark:text-white">
                {["Full", "Stack"].map((w, i) => (
                  <span
                    key={w}
                    className="mr-[0.3em] inline-block overflow-hidden pb-[0.08em]"
                  >
                    <span
                      className="hero-word"
                      style={{ animationDelay: `${250 + i * 120}ms` }}
                    >
                      {w}
                    </span>
                  </span>
                ))}
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span
                    className={`inline-block transition-all duration-500 ease-in-out ${
                      shown
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    {profile.role[role]}
                  </span>
                </span>
              </h2>
            </div>

            <div className="hero-in mt-6" style={{ animationDelay: "300ms" }}>
              <p className="max-w-xl border-l-2 border-neutral-200 pl-5 text-base leading-relaxed text-neutral-500 md:text-lg dark:border-neutral-700 dark:text-neutral-400">
                {profile.intro.map(([text, strong], i) => (
                  <span
                    key={i}
                    className={
                      strong
                        ? "hero-keyword font-medium text-black dark:text-white"
                        : undefined
                    }
                  >
                    {text}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div
              className="hero-in mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "400ms" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={round}
                >
                  {socialIcons[s.label]}
                </a>
              ))}
              <a href={`mailto:${email}`} aria-label="Email" className={round}>
                <MailIcon size={16} />
              </a>
              <div className="mx-1 h-6 w-px bg-neutral-200 dark:bg-neutral-800" />
              <button
                type="button"
                onClick={copyEmail}
                className="group flex cursor-pointer items-center gap-1.5 font-mono text-xs text-neutral-400 transition-colors hover:text-black dark:text-neutral-600 dark:hover:text-white"
              >
                <CopyIcon size={12} />
                {email}
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider text-neutral-400 transition-all duration-300 ${
                    copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {copied ? "copied" : "copy"}
                </span>
              </button>
            </div>

            <div
              className="hero-in mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "500ms" }}
            >
              <SlideButton href="#projects" primary>
                View selected work
              </SlideButton>
              <SlideButton href="#services">See services</SlideButton>
            </div>
          </div>

          {/* code card */}
          <div
            className="hero-in hidden lg:col-span-5 lg:block"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative">
              <div className="absolute -left-8 bottom-0 top-0 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div className="border border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
                <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"
                    />
                  ))}
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                    about.tsx
                  </span>
                </div>
                <div className="p-5 font-mono text-xs leading-6">
                  <CodeLine n={1}>
                    <span className="text-blue-500">const</span>{" "}
                    <span className="text-black dark:text-white">developer</span>{" "}
                    <span className="text-neutral-400">=</span> {"{"}
                  </CodeLine>
                  <CodeLine n={2}>
                    {"  "}<Key>name</Key>: <Str>{profile.name}</Str>,
                  </CodeLine>
                  <CodeLine n={3}>
                    {"  "}<Key>role</Key>: <Str>Full Stack Developer</Str>,
                  </CodeLine>
                  <CodeLine n={4}>
                    {"  "}<Key>company</Key>: <Str>{profile.company}</Str>,
                  </CodeLine>
                  <CodeLine n={5}>
                    {"  "}<Key>experience</Key>:{" "}
                    <span className="text-amber-600 dark:text-amber-400">
                      &quot;{profile.experience}&quot;
                    </span>
                    ,
                  </CodeLine>
                  <CodeLine n={6}>
                    {"  "}<Key>stack</Key>: [
                  </CodeLine>
                  {profile.stack.map((s, i) => (
                    <CodeLine key={s} n={7 + i}>
                      {"    "}<Str>{s}</Str>
                      {i < profile.stack.length - 1 ? "," : ""}
                    </CodeLine>
                  ))}
                  <CodeLine n={7 + profile.stack.length}>{"  "}],</CodeLine>
                  <CodeLine n={8 + profile.stack.length}>
                    {"  "}<Key>available</Key>:{" "}
                    <span className="text-blue-500">true</span>,
                  </CodeLine>
                  <CodeLine n={9 + profile.stack.length}>{"};"}</CodeLine>
                </div>
              </div>
              <div className="mt-px grid grid-cols-3 gap-px">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-neutral-200 bg-neutral-50/50 p-4 text-center transition-colors hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-black"
                  >
                    <div className="font-display text-2xl font-bold tracking-tight text-black dark:text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-neutral-300 p-1.5 dark:border-neutral-700">
          <div className="scroll-dot h-2.5 w-0.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
        </div>
      </div>
    </section>
  );
}
