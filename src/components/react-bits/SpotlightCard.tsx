"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

type SpotlightStyle = CSSProperties & {
  "--spotlight-x": string;
  "--spotlight-y": string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    ref.current?.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    ref.current?.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      style={{ "--spotlight-x": "50%", "--spotlight-y": "50%" } as SpotlightStyle}
      className={cn(
        "group relative overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.035] transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:border-lime/40 hover:bg-white/[0.055] hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(var(--accent-rgb),0.18),transparent_42%)]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
