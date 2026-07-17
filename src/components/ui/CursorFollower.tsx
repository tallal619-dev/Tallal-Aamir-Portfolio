"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const targetSelector = [
  "button",
  "[role='button']",
  "[data-cursor='button']"
].join(",");

export function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorWidth = useMotionValue(38);
  const cursorHeight = useMotionValue(38);
  const cursorRadius = useMotionValue(999);
  const cursorOpacity = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 260, damping: 29, mass: 0.28 });
  const springY = useSpring(cursorY, { stiffness: 260, damping: 29, mass: 0.28 });
  const springWidth = useSpring(cursorWidth, { stiffness: 240, damping: 26, mass: 0.25 });
  const springHeight = useSpring(cursorHeight, { stiffness: 240, damping: 26, mass: 0.25 });
  const springRadius = useSpring(cursorRadius, { stiffness: 240, damping: 26, mass: 0.25 });
  const springOpacity = useSpring(cursorOpacity, { stiffness: 260, damping: 24, mass: 0.2 });
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return undefined;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    const setFreeCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX - 19);
      cursorY.set(event.clientY - 19);
      cursorWidth.set(38);
      cursorHeight.set(38);
      cursorRadius.set(999);
      cursorOpacity.set(1);
      setLocked(false);
    };

    const setTargetCursor = (target: HTMLElement) => {
      const rect = target.getBoundingClientRect();
      const computed = window.getComputedStyle(target);
      const pad = Math.min(Math.max(rect.height * 0.18, 7), 13);
      const radius = Number.parseFloat(computed.borderRadius) || 18;

      cursorX.set(rect.left - pad);
      cursorY.set(rect.top - pad);
      cursorWidth.set(rect.width + pad * 2);
      cursorHeight.set(rect.height + pad * 2);
      cursorRadius.set(Math.min(radius + pad, 999));
      cursorOpacity.set(1);
      setLocked(true);
    };

    const move = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest(targetSelector) : null;
      const target = element instanceof HTMLElement && element.dataset.cursor !== "none" ? element : null;

      if (target) {
        setTargetCursor(target);
        return;
      }

      setFreeCursor(event);
    };

    const leave = () => {
      cursorOpacity.set(0);
      setLocked(false);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);
    window.addEventListener("blur", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("blur", leave);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, [cursorHeight, cursorOpacity, cursorRadius, cursorWidth, cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[300] hidden border border-white bg-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_rgba(255,255,255,0.18)] mix-blend-difference lg:block"
      style={{
        x: springX,
        y: springY,
        width: springWidth,
        height: springHeight,
        borderRadius: springRadius,
        opacity: springOpacity
      }}
    >
      <motion.span
        className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{ opacity: locked ? 0 : 1, scale: locked ? 0 : 1 }}
        transition={{ duration: 0.16 }}
      />
    </motion.div>
  );
}
