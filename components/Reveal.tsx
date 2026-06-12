"use client";

import { motion, type Variant, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type From = "up" | "left" | "right" | "zoom" | "flip";

const hiddenBy: Record<From, Variant> = {
  up: { opacity: 0, y: 90, scale: 0.93, filter: "blur(16px)" },
  left: { opacity: 0, x: -130, scale: 0.93, filter: "blur(16px)" },
  right: { opacity: 0, x: 130, scale: 0.93, filter: "blur(16px)" },
  zoom: { opacity: 0, scale: 0.62, filter: "blur(20px)" },
  flip: { opacity: 0, y: 70, rotateX: 60, scale: 0.88, filter: "blur(14px)" },
};

export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
}) {
  const variants: Variants = {
    hidden: hiddenBy[from],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      className={className}
      style={from === "flip" ? { transformPerspective: 900 } : undefined}
    >
      {children}
    </motion.div>
  );
}
