"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCarouselProps {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
  desktopClassName?: string;
  itemClassName?: string;
}

export function MobileCarousel({
  children,
  ariaLabel,
  className,
  trackClassName,
  desktopClassName,
  itemClassName
}: MobileCarouselProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const target = track?.children[index] as HTMLElement | undefined;

    if (!track || !target) return;
    const left = target.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft - (track.clientWidth - target.offsetWidth) / 2;
    track.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const updateActive = () => {
      const trackBounds = track.getBoundingClientRect();
      const trackCenter = trackBounds.left + trackBounds.width / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      Array.from(track.children).forEach((child, index) => {
        const childBounds = (child as HTMLElement).getBoundingClientRect();
        const childCenter = childBounds.left + childBounds.width / 2;
        const distance = Math.abs(childCenter - trackCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActive(nearestIndex);
    };

    updateActive();
    track.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      track.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [items.length]);

  return (
    <div className={cn("relative min-w-0", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget || window.matchMedia("(min-width: 768px)").matches) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            scrollToIndex(Math.max(0, Math.min(items.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
          }
        }}
        className={cn(
          "focus-ring no-scrollbar flex min-w-0 touch-auto snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain pb-5 md:grid md:overflow-visible md:pb-0",
          desktopClassName,
          trackClassName
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full shrink-0 snap-center self-stretch md:w-auto md:min-w-0 md:shrink md:snap-start [&>*]:h-full [&>*]:w-full",
              itemClassName
            )}
          >
            {item}
          </div>
        ))}
      </div>

      {items.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={active === 0}
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/14 bg-white/[0.05] text-cream transition hover:border-lime/45 hover:text-lime disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={active === items.length - 1}
              onClick={() => scrollToIndex(Math.min(active + 1, items.length - 1))}
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/14 bg-white/[0.05] text-cream transition hover:border-lime/45 hover:text-lime disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center" aria-label="Carousel slides">
            {items.length <= 6 ? items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                className="focus-ring grid size-7 place-items-center rounded-full"
              ><span className={cn("h-1.5 rounded-full transition-all", active === index ? "w-5 bg-lime" : "w-1.5 bg-white/28")} /></button>
            )) : <span className="min-w-16 text-center text-xs font-bold tabular-nums text-cream/70" aria-live="polite">{active + 1} / {items.length}</span>}
          </div>
        </div>
      ) : null}
    </div>
  );
}
