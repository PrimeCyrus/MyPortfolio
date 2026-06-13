"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/*
 * Fixed atmosphere with scroll parallax: each blob layer drifts at its
 * own rate as you scroll, on top of its idle CSS drift animation.
 */
export default function Background() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const k = reduced ? 0 : 1;
  const y1 = useTransform(scrollY, (v) => v * -0.09 * k);
  const y2 = useTransform(scrollY, (v) => v * 0.16 * k);
  const y3 = useTransform(scrollY, (v) => v * -0.06 * k);
  const yGrid = useTransform(scrollY, (v) => (v * 0.05 * k) % 64);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* aurora sheen behind everything */}
      <div className="aurora-sweep absolute inset-0" />

      {/* parallax blob layers (outer = scroll drift, inner = idle drift) */}
      <motion.div style={{ y: y1 }} className="absolute -top-40 left-[8%] h-[36rem] w-[36rem] will-change-transform">
        <div className="blob-1 h-full w-full rounded-full bg-cobalt/28 blur-[90px]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[35%] right-[-12%] h-[32rem] w-[32rem] will-change-transform">
        <div className="blob-2 h-full w-full rounded-full bg-cyan/20 blur-[80px]" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-[-15%] left-[28%] h-[34rem] w-[34rem] will-change-transform">
        <div className="blob-3 h-full w-full rounded-full bg-[#6366f1]/22 blur-[95px]" />
      </motion.div>

      {/* faint global grid, slowly crawling with the scroll */}
      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-x-0 -inset-y-16 opacity-60 will-change-transform [mask-image:radial-gradient(70rem_50rem_at_50%_30%,black,transparent)]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(232 234 240 / 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgb(232 234 240 / 0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>
    </div>
  );
}
