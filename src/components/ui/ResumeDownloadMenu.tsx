"use client";

import { Download } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { contact } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ResumeDownloadMenuProps {
  children?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  menuClassName?: string;
  align?: "left" | "right";
  onSelect?: () => void;
}

const resumeOptions = [
  {
    label: "Shopify Resume",
    detail: "Senior Shopify Developer",
    href: contact.resume
  },
  {
    label: "Full Stack Resume",
    detail: "Software Developer",
    href: contact.fullStackResume
  }
];

const MENU_GAP = 8;
const MENU_MARGIN = 12;
const MIN_MENU_WIDTH = 240;
const MIN_MENU_HEIGHT = 112;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), Math.max(min, max));

export function ResumeDownloadMenu({ children, className, wrapperClassName, menuClassName, align = "right", onSelect }: ResumeDownloadMenuProps) {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({ visibility: "hidden" });
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const toggleMenu = () => {
    if (!open) {
      setMenuStyle({ visibility: "hidden" });
    }

    setOpen((current) => !current);
  };

  const updateMenuPosition = useCallback(() => {
    const root = rootRef.current;

    if (!root || typeof window === "undefined") {
      return;
    }

    const triggerRect = root.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const availableWidth = viewportWidth - MENU_MARGIN * 2;
    const menuWidth = Math.min(Math.max(triggerRect.width, MIN_MENU_WIDTH), availableWidth);
    const measuredHeight = menuRef.current?.getBoundingClientRect().height ?? 152;
    const availableBelow = viewportHeight - triggerRect.bottom - MENU_GAP - MENU_MARGIN;
    const availableAbove = triggerRect.top - MENU_GAP - MENU_MARGIN;
    const openAbove = availableBelow < measuredHeight && availableAbove > availableBelow;
    const availableHeight = Math.max(openAbove ? availableAbove : availableBelow, MIN_MENU_HEIGHT);
    const menuHeight = Math.min(measuredHeight, availableHeight, viewportHeight - MENU_MARGIN * 2);

    const unclampedLeft = align === "right" ? triggerRect.right - menuWidth : triggerRect.left;
    const left = clamp(unclampedLeft, MENU_MARGIN, viewportWidth - menuWidth - MENU_MARGIN);
    const top = openAbove
      ? clamp(triggerRect.top - MENU_GAP - menuHeight, MENU_MARGIN, viewportHeight - menuHeight - MENU_MARGIN)
      : clamp(triggerRect.bottom + MENU_GAP, MENU_MARGIN, viewportHeight - menuHeight - MENU_MARGIN);

    setMenuStyle({
      left,
      maxHeight: Math.max(MIN_MENU_HEIGHT, availableHeight),
      top,
      transformOrigin: openAbove ? "bottom center" : "top center",
      visibility: "visible",
      width: menuWidth
    });
  }, [align]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(updateMenuPosition);

    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  return (
    <div ref={rootRef} className={cn("relative inline-flex", wrapperClassName)}>
      <button
        type="button"
        data-cursor="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={toggleMenu}
        className={className}
      >
        {children ?? (
          <>
            <Download size={15} />
            Resume
          </>
        )}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={menuRef}
              id={menuId}
              role="menu"
              style={menuStyle}
              className={cn(
                "fixed z-[220] grid gap-1 overflow-y-auto overscroll-contain rounded-[8px] border border-white/14 bg-[#070707]/94 p-2 text-cream shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl",
                menuClassName
              )}
            >
              {resumeOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  download
                  data-cursor="button"
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onSelect?.();
                  }}
                  className="focus-ring flex items-center justify-between gap-4 rounded-[8px] px-3 py-3 text-left transition hover:bg-lime/10 hover:text-lime"
                >
                  <span>
                    <span className="block text-xs font-black uppercase">{option.label}</span>
                    <span className="mt-1 block text-[0.68rem] font-bold uppercase text-cream/48">{option.detail}</span>
                  </span>
                  <Download size={16} className="shrink-0" />
                </a>
              ))}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
