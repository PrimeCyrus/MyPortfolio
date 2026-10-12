"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "15+", label: "projects shipped" },
  { value: "1 yr", label: "of building solo" },
  { value: "100%", label: "live & deployed" },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Fade({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 54, scale: 0.96, filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.0, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  // zoom out + fade as you scroll past the hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);

  return (
    <section
      ref={ref}
      id="top"
      className="aurora relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* blueprint grid fading downward */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(232 234 240 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(232 234 240 / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <motion.div
        style={{
          scale,
          opacity,
          y,
          rotateX,
          transformPerspective: 1200,
          transformOrigin: "50% 20%",
        }}
        className="relative w-full mx-auto max-w-6xl px-5 py-16 will-change-transform md:px-8"
      >
        <div className="text-center">
          <Fade delay={0.3}>
            <p className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 font-mono text-xs font-semibold text-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              Available for freelance work
            </p>
          </Fade>

          <Fade delay={0.4}>
            <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight md:text-[4.6rem]">
              Hi, Cyrus here..
              <br />I turn ideas into{" "}
              <span className="text-gradient">
                apps, websites and useful tools.
              </span>
            </h1>
          </Fade>

          <Fade delay={0.55}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-soft">
              Founder of{" "}
              <span className="font-semibold text-ink">Enz Labs</span>.
              Built over 15 projects solo in a year.
            </p>
          </Fade>

          <Fade delay={0.7}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="cursor-pointer rounded-xl bg-gradient-to-r from-cobalt to-cyan px-7 py-3.5 font-display text-base font-semibold text-paper shadow-[0_0_30px_rgb(59_130_246/0.35)] transition-shadow duration-200 hover:shadow-[0_0_50px_rgb(34_211_238/0.5)]"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="cursor-pointer rounded-xl border border-cobalt/40 px-7 py-3.5 font-display text-base font-semibold text-cobalt transition-colors duration-200 hover:bg-cobalt/10"
              >
                Say hi
              </a>
            </div>
          </Fade>

          <Fade delay={0.85}>
            <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-gradient md:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-soft md:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Fade>
        </div>
      </motion.div>
    </section>
  );
}
