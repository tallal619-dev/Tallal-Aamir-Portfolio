"use client";

import { Download } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
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

export function ResumeDownloadMenu({ children, className, wrapperClassName, menuClassName, align = "right", onSelect }: ResumeDownloadMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
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

  return (
    <div ref={rootRef} className={cn("relative inline-flex", wrapperClassName)}>
      <button
        type="button"
        data-cursor="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={className}
      >
        {children ?? (
          <>
            <Download size={15} />
            Resume
          </>
        )}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute top-full z-[180] mt-2 grid min-w-60 gap-1 rounded-[8px] border border-white/14 bg-[#070707]/94 p-2 text-cream shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl",
            align === "right" ? "right-0" : "left-0",
            menuClassName
          )}
        >
          {resumeOptions.map((option) => (
            <a
              key={option.href}
              href={option.href}
              download
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
        </div>
      ) : null}
    </div>
  );
}
