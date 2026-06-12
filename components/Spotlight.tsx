"use client";

import { useEffect, useRef } from "react";

/* A two-layer light that chases the cursor with a soft delay. */
export default function Spotlight() {
  const wide = useRef<HTMLDivElement>(null);
  const tight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 3;
    let wx = mx, wy = my; // wide layer, slower
    let tx = mx, ty = my; // tight layer, slightly faster
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      wx += (mx - wx) * 0.045;
      wy += (my - wy) * 0.045;
      tx += (mx - tx) * 0.09;
      ty += (my - ty) * 0.09;
      if (wide.current) {
        wide.current.style.background = `radial-gradient(48rem circle at ${wx}px ${wy}px, rgb(59 130 246 / 0.17), transparent 62%)`;
      }
      if (tight.current) {
        tight.current.style.background = `radial-gradient(18rem circle at ${tx}px ${ty}px, rgb(34 211 238 / 0.14), transparent 65%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[3] hidden md:block" aria-hidden>
      <div ref={wide} className="absolute inset-0" />
      <div ref={tight} className="absolute inset-0" />
    </div>
  );
}
