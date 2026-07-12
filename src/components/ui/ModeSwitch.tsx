"use client";

import { Code2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { SVGProps } from "react";
import { portfolioModeCopy } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { cn } from "@/lib/utils";

interface ModeSwitchProps {
  compact?: boolean;
  className?: string;
  showHint?: boolean;
}

const hintSeenEvent = "portfolio:mode-hint-seen";

function ShopifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.4 7.7 8.7 5.1c.7-1.4 1.8-2.1 3.2-2.1 1.7 0 2.8 1.2 3 3.4l.1 1.1 2.7.2 1 12.4-13.7.9 1-13.1 1.4-.2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
      <path d="M9.3 7.6c.5-2.2 1.3-3.2 2.5-3.2 1.2 0 1.8 1 1.9 3.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.65" />
      <path
        d="M9.5 15.8c.7.7 2.4.9 3.3.3.8-.5.8-1.4-.1-1.8l-1.8-.7c-1.2-.5-1.4-1.7-.5-2.4.8-.7 2.4-.7 3.3 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

export function ModeSwitch({ compact = false, className, showHint = false }: ModeSwitchProps) {
  const { mode, switchMode } = usePortfolioMode();
  const isFullStack = mode === "fullStack";
  const nextMode = isFullStack ? "shopify" : "fullStack";
  const [hintDismissed, setHintDismissed] = useState(false);

  useEffect(() => {
    if (!showHint) {
      return undefined;
    }

    const handleHintSeen = () => setHintDismissed(true);
    window.addEventListener(hintSeenEvent, handleHintSeen);

    return () => window.removeEventListener(hintSeenEvent, handleHintSeen);
  }, [showHint]);

  const handleClick = () => {
    switchMode(nextMode);

    if (showHint) {
      setHintDismissed(true);
      window.dispatchEvent(new CustomEvent(hintSeenEvent));
    }
  };

  const button = (
    <button
      type="button"
      data-cursor="button"
      aria-label={`Switch to ${portfolioModeCopy[nextMode].switchLabel} portfolio`}
      aria-pressed={isFullStack}
      onClick={handleClick}
      onPointerUp={(event) => event.currentTarget.blur()}
      className={cn(
        "focus-ring relative grid min-h-12 shrink-0 grid-cols-2 overflow-hidden rounded-full border border-white/14 bg-[#070707]/68 p-1 text-cream shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition hover:border-lime/30",
        compact ? "w-[5.35rem]" : "w-[6.25rem]",
        className
      )}
      title={`Switch to ${portfolioModeCopy[nextMode].switchLabel} portfolio`}
    >
      <motion.span
        aria-hidden="true"
        className="absolute bottom-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-lime"
        style={{ boxShadow: `0 0 18px ${isFullStack ? "rgba(56,189,248,0.22)" : "rgba(215,255,74,0.24)"}` }}
        animate={{ left: isFullStack ? "calc(50%)" : "0.25rem" }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className={cn("relative z-10 inline-flex items-center justify-center rounded-full transition", !isFullStack ? "text-black" : "text-cream/60")}>
        <ShopifyIcon className={compact ? "size-5" : "size-[1.35rem]"} />
        <span className="sr-only">{portfolioModeCopy.shopify.switchLabel}</span>
      </span>
      <span className={cn("relative z-10 inline-flex items-center justify-center rounded-full transition", isFullStack ? "text-black" : "text-cream/60")}>
        <Code2 size={compact ? 18 : 19} />
        <span className="sr-only">{portfolioModeCopy.fullStack.switchLabel}</span>
      </span>
    </button>
  );

  if (!showHint) {
    return button;
  }

  return (
    <span className={cn("mode-switch-nudge relative inline-flex shrink-0", compact && "mode-switch-nudge-compact")}>
      {!hintDismissed ? (
        <>
          <span aria-hidden="true" className="mode-switch-glow" />
          <span className={cn("mode-switch-note", compact && "mode-switch-note-compact")}>{compact ? "swap" : "Psst, flip modes"}</span>
        </>
      ) : null}
      {button}
    </span>
  );
}
