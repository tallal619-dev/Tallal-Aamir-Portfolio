"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
  target?: string;
}

export function MagneticButton({ href, children, variant = "primary", download, className, target }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.25 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.18);
    y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      data-cursor="button"
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn(
        "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase transition",
        variant === "primary" && "bg-lime !text-black hover:bg-shopify [&_*]:!text-black",
        variant === "secondary" && "border border-white/15 bg-white/[0.04] text-cream hover:border-lime/50 hover:bg-lime/10",
        variant === "ghost" && "text-muted hover:text-cream",
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
