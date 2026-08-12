"use client";

import { motion } from "framer-motion";

const links = [
  { label: "01 About me", href: "#about" },
  { label: "02 Finished Projects", href: "#work" },
  { label: "03 Services", href: "#services" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 md:py-3.5 md:px-8">
        <a
          href="#top"
          className="font-display text-2xl md:text-3xl font-bold tracking-tight"
        >
          enz<span className="text-cobalt">/</span>labs
        </a>
        <ul className="hidden items-center gap-7 md:gap-11 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base md:text-lg font-semibold text-soft transition-colors duration-200 hover:text-cobalt"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#services"
            className="cursor-pointer rounded-lg border border-cobalt/40 px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base font-bold text-cobalt transition-all duration-200 hover:bg-cobalt/10"
          >
            Services
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-lg bg-gradient-to-r from-cobalt to-cyan px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base font-bold text-paper transition-shadow duration-200 hover:shadow-[0_0_24px_rgb(59_130_246/0.45)]"
          >
            Say hi
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
