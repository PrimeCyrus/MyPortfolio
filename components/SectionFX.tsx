"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/*
 * Scroll-driven 3D treatment for a whole section: it bends in,
 * settles flat, then bends away — each variant with its own personality.
 */
const personalities = [
  { rotIn: 21, rotOut: -11, scaleIn: 0.85, scaleOut: 0.93, x: 0 },    // 0: classic rise
  { rotIn: -17, rotOut: 10, scaleIn: 0.89, scaleOut: 0.93, x: 100 },  // 1: tip back, slide from right
  { rotIn: 15, rotOut: -15, scaleIn: 0.76, scaleOut: 0.91, x: -100 }, // 2: deep zoom, slide from left
  { rotIn: -24, rotOut: 9, scaleIn: 0.88, scaleOut: 0.94, x: 0 },     // 3: strong tip back
  { rotIn: 11, rotOut: -10, scaleIn: 1.2, scaleOut: 0.93, x: 0 },     // 4: zoom OUT while entering
  { rotIn: 19, rotOut: -18, scaleIn: 0.82, scaleOut: 0.9, x: 56 },    // 5: drift + bend
];

export default function SectionFX({
  children,
  variant = 0,
  className,
}: {
  children: ReactNode;
  variant?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const p = personalities[variant % personalities.length];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.38, 0.68, 1],
    [p.rotIn, 0, 0, p.rotOut]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.38, 0.68, 1],
    [p.scaleIn, 1, 1, p.scaleOut]
  );
  const x = useTransform(scrollYProgress, [0, 0.38], [p.x, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.78, 1],
    [0.25, 1, 1, 0.4]
  );

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className} style={{ perspective: "1400px" }}>
      <motion.div
        style={{ rotateX, scale, x, opacity, transformOrigin: "50% 60%" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
