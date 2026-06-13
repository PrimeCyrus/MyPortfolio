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
      // Move pre-rendered gradient discs via transform only — the compositor
      // re-uses the cached texture, so there is no per-frame repaint.
      if (wide.current) {
        wide.current.style.transform = `translate3d(${wx}px, ${wy}px, 0)`;
      }
      if (tight.current) {
        tight.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    // Place + reveal before the first paint of the loop so there's no flash
    // of the disc sitting at the top-left origin.
    for (const el of [wide.current, tight.current]) {
      if (el) el.style.opacity = "1";
    }
    if (wide.current) wide.current.style.transform = `translate3d(${wx}px, ${wy}px, 0)`;
    if (tight.current) tight.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[3] hidden md:block" aria-hidden>
      {/* Each light is a fixed-size gradient disc, centred on the origin via a
          negative margin, then translated to the cursor. Transform-only = cheap. */}
      <div
        ref={wide}
        className="absolute left-0 top-0 opacity-0 will-change-transform"
        style={{
          width: "80rem",
          height: "80rem",
          marginLeft: "-40rem",
          marginTop: "-40rem",
          background:
            "radial-gradient(circle 48rem at center, rgb(59 130 246 / 0.17), transparent 62%)",
        }}
      />
      <div
        ref={tight}
        className="absolute left-0 top-0 opacity-0 will-change-transform"
        style={{
          width: "32rem",
          height: "32rem",
          marginLeft: "-16rem",
          marginTop: "-16rem",
          background:
            "radial-gradient(circle 18rem at center, rgb(34 211 238 / 0.14), transparent 65%)",
        }}
      />
    </div>
  );
}
