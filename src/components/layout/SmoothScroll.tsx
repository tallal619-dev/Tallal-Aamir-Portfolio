"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const root = document.documentElement;
    const handleScrollLock = (event: Event) => {
      const locked = (event as CustomEvent<{ locked?: boolean }>).detail?.locked ?? root.dataset.scrollLocked === "true";

      if (locked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    (window as Window & { __portfolioLenis?: Lenis }).__portfolioLenis = lenis;
    window.addEventListener("portfolio:scroll-lock", handleScrollLock);

    if (root.dataset.scrollLocked === "true") {
      lenis.stop();
    }

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("portfolio:scroll-lock", handleScrollLock);
      if ((window as Window & { __portfolioLenis?: Lenis }).__portfolioLenis === lenis) {
        delete (window as Window & { __portfolioLenis?: Lenis }).__portfolioLenis;
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
