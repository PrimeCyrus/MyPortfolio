"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

const openTo = ["Freelance", "Part-time", "Full-time"];

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
  // the 3D scene drifts up faster than the text — depth between layers
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -130]);

  return (
    <section
      ref={ref}
      id="top"
      className="aurora relative overflow-hidden pt-28 md:pt-32"
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
        style={{ scale, opacity, y, rotateX, transformPerspective: 1200, transformOrigin: "50% 20%" }}
        className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4"
      >
        <div>
          <Fade delay={0.25}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-semibold text-soft">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-mint opacity-50" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              </span>
              Open to work
            </span>
          </Fade>

          <Fade delay={0.4}>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.04] tracking-tight md:text-[4.6rem]">
              Cyrus here.
              <br />
              I turn ideas into{" "}
              <span className="text-gradient">
                apps, websites and useful tools.
              </span>
            </h1>
          </Fade>

          <Fade delay={0.55}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
              Founder of{" "}
              <span className="font-semibold text-ink">Enz Labs</span>.
              10+ products shipped solo in a year.
            </p>
          </Fade>

          <Fade delay={0.68}>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-soft">
                open_to:
              </span>
              {openTo.map((o) => (
                <span
                  key={o}
                  className="glass rounded-lg px-4 py-1.5 text-sm font-bold transition-colors duration-200 hover:text-cobalt-deep"
                >
                  {o}
                </span>
              ))}
            </div>
          </Fade>

          <Fade delay={0.8}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-cobalt to-cyan px-7 py-3.5 font-bold text-paper shadow-[0_0_28px_rgb(59_130_246/0.35)] transition-all duration-200 hover:shadow-[0_0_44px_rgb(34_211_238/0.5)]"
              >
                Let&apos;s talk →
              </a>
              <a
                href="#work"
                className="glass cursor-pointer rounded-lg px-7 py-3.5 font-bold text-ink transition-colors duration-200 hover:text-cobalt-deep"
              >
                See my work
              </a>
            </div>
          </Fade>
        </div>

        {/* 3D scene */}
        <Fade delay={0.5} className="relative hidden lg:block">
          <motion.div style={{ y: sceneY }} className="relative">
            <div className="ring-spin absolute inset-6" aria-hidden />
            <div className="h-[30rem] w-full">
              <Scene3D />
            </div>
          </motion.div>
        </Fade>
      </motion.div>
    </section>
  );
}
