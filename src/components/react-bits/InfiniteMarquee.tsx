import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: ReactNode[];
  className?: string;
}

export function InfiniteMarquee({ items, className }: InfiniteMarqueeProps) {
  const looped = [...items, ...items];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="marquee-track flex w-max items-center gap-3 will-change-transform">
        {looped.map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
