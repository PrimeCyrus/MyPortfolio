"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { MailIcon, MoonIcon, SunIcon } from "./icons";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") setDark(false);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-neutral-200 bg-white/90 py-3 backdrop-blur-md transition-colors duration-300 dark:border-ink-line dark:bg-ink-bg/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#hero"
          className="font-display text-xl font-bold uppercase tracking-tighter transition-opacity hover:opacity-60 dark:text-white"
        >
          {profile.name}
          <span className="text-neutral-400 dark:text-neutral-600">
            {" "}/ {profile.company}
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-neutral-400 transition-colors hover:text-black dark:hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100 dark:bg-white" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 bg-black px-4 py-2 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-80 md:flex dark:bg-white dark:text-black"
          >
            <MailIcon size={14} />
            Say hi
          </a>

          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-neutral-200 text-black transition-colors hover:bg-neutral-100 dark:border-ink-line dark:text-white dark:hover:bg-ink-card"
          >
            {dark ? <SunIcon size={15} /> : <MoonIcon size={15} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="cursor-pointer p-2 text-black md:hidden dark:text-white"
          >
            <div
              className={`mb-1.5 h-[2px] w-6 bg-current transition-all duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <div
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-3 border-t border-neutral-200 px-6 py-4 md:hidden dark:border-ink-line">
          {[...links, { label: "Say hi", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
