"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

type TiltStyle = CSSProperties & {
  "--tilt-x": string;
  "--tilt-y": string;
};

export function TiltCard({ children, className, strength = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * strength;
    const rotateX = ((0.5 - y / bounds.height) * strength).toFixed(3);

    ref.current?.style.setProperty("--tilt-x", `${rotateX}deg`);
    ref.current?.style.setProperty("--tilt-y", `${rotateY.toFixed(3)}deg`);
  };

  const reset = () => {
    ref.current?.style.setProperty("--tilt-x", "0deg");
    ref.current?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ "--tilt-x": "0deg", "--tilt-y": "0deg" } as TiltStyle}
      className={cn("transition-transform duration-200 [transform:perspective(900px)_rotateX(var(--tilt-x))_rotateY(var(--tilt-y))]", className)}
    >
      {children}
    </div>
  );
}
