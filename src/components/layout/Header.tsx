"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { contact, navItems } from "@/data/portfolio";
import { StaggeredMenu } from "@/components/react-bits/StaggeredMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{ zIndex: 90 }}
      className={cn(
        "fixed left-0 right-0 top-3 z-50 pointer-events-none transition-all duration-300 sm:top-4",
        scrolled && "top-2 sm:top-3"
      )}
    >
      <nav className="section-shell pointer-events-auto flex min-h-14 items-center justify-between gap-3" aria-label="Primary navigation">
        <a
          href="#top"
          className={cn(
            "focus-ring group inline-flex min-h-12 items-center gap-3 rounded-full border px-2.5 py-2 pr-4 shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition",
            scrolled
              ? "border-white/12 bg-[#070707]/78 text-cream"
              : "border-white/12 bg-[#070707]/64 text-cream"
          )}
          aria-label="Back to top"
        >
          <span
            className={cn(
              "grid size-9 place-items-center rounded-full text-sm font-black transition",
              scrolled ? "bg-lime text-black" : "bg-lime text-black"
            )}
          >
            TA
          </span>
          <span className="hidden text-xs font-black uppercase text-cream sm:block">Tallal Aamir</span>
        </a>

        <div
          className={cn(
            "hidden min-h-12 items-center gap-1 rounded-full border p-1 shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl lg:flex",
            scrolled ? "border-white/12 bg-[#070707]/72" : "border-white/12 bg-[#070707]/58"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2.5 text-xs font-bold uppercase transition",
                scrolled ? "text-cream/68 hover:bg-white/8 hover:text-cream" : "text-cream/72 hover:bg-white/8 hover:text-cream"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.resume}
            data-cursor="button"
            download
            className={cn(
              "focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border px-4 py-3 text-xs font-black uppercase shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition",
              scrolled
                ? "border-white/12 bg-[#070707]/72 text-cream hover:border-lime/60 hover:bg-lime/10"
                : "border-white/12 bg-[#070707]/58 text-cream hover:border-lime/60 hover:bg-lime/10"
            )}
          >
            <Download size={15} />
            Resume
          </a>
          <a
            href={contact.fiverr}
            data-cursor="button"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-5 py-3 text-xs font-black uppercase !text-black shadow-[0_18px_70px_rgba(0,0,0,0.16)] transition hover:bg-shopify [&_*]:!text-black"
          >
            Fiverr
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={cn(
            "focus-ring relative z-[95] grid size-12 place-items-center rounded-full border shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition lg:hidden",
            menuOpen
              ? "border-white/12 bg-white/10 text-cream"
              : scrolled
                ? "border-white/12 bg-[#070707]/78 text-cream"
                : "border-white/12 bg-[#070707]/64 text-cream"
          )}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <StaggeredMenu open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
