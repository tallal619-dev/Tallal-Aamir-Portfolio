"use client";

import { useLayoutEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Download, Mail, X } from "lucide-react";
import { contact, navItems } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { FiverrIcon } from "@/components/ui/FiverrIcon";
import { ResumeDownloadMenu } from "@/components/ui/ResumeDownloadMenu";

interface StaggeredMenuProps {
  open: boolean;
  onClose: () => void;
}

type LenisWindow = Window & {
  __portfolioLenis?: {
    scrollTo?: (target: Element | string | number, options?: { offset?: number }) => void;
  };
};

export function StaggeredMenu({ open, onClose }: StaggeredMenuProps) {
  const { content, mode } = usePortfolioMode();
  const panelRef = useRef<HTMLDivElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const layerColors = mode === "fullStack" ? ["#38bdf8", "#2563eb", "#05070c"] : ["#d7ff4a", "#95bf47", "#071008"];
  const ambientBackground =
    mode === "fullStack"
      ? "radial-gradient(circle at 78% 16%, rgba(56,189,248,0.22), transparent 22rem), radial-gradient(circle at 12% 82%, rgba(37,99,235,0.42), transparent 28rem), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.8px)"
      : "radial-gradient(circle at 78% 16%, rgba(215,255,74,0.22), transparent 22rem), radial-gradient(circle at 12% 82%, rgba(0,61,43,0.42), transparent 28rem), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.8px)";

  useLayoutEffect(() => {
    if (!open) {
      return undefined;
    }

    const panel = panelRef.current;
    const content = contentRef.current;
    const layers = preLayersRef.current ? Array.from(preLayersRef.current.querySelectorAll(".sm-prelayer")) : [];
    const itemLabels = panel ? Array.from(panel.querySelectorAll(".sm-panel-item-label")) : [];
    const lowerItems = panel ? Array.from(panel.querySelectorAll(".sm-lower-item")) : [];
    const previousBodyOverflow = document.body.style.overflow;

    if (!panel || !content) {
      return undefined;
    }

    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: true } }));

    const context = gsap.context(() => {
      gsap.set([panel, ...layers], { xPercent: 100, opacity: 1 });
      gsap.set(itemLabels, { yPercent: 135, rotate: 8 });
      gsap.set(lowerItems, { y: 20, opacity: 0 });

      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      layers.forEach((layer, index) => {
        timeline.to(layer, { xPercent: 0, duration: 0.5 }, index * 0.07);
      });

      timeline.to(panel, { xPercent: 0, duration: 0.68 }, layers.length ? 0.2 : 0);
      timeline.to(itemLabels, { yPercent: 0, rotate: 0, duration: 0.82, stagger: 0.075 }, "-=0.42");
      timeline.to(lowerItems, { y: 0, opacity: 1, duration: 0.48, stagger: 0.06 }, "-=0.38");
    }, content);

    return () => {
      context.revert();
      document.body.style.overflow = previousBodyOverflow;
      window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: false } }));
    };
  }, [open]);

  const closeAndScroll = (href: string) => {
    onClose();

    window.setTimeout(() => {
      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      const lenis = (window as LenisWindow).__portfolioLenis;

      if (lenis?.scrollTo) {
        lenis.scrollTo(target, { offset: -88 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      window.history.pushState(null, "", href);
    }, 360);
  };

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      onClose();
      return;
    }

    event.preventDefault();
    closeAndScroll(href);
  };

  if (!open) {
    return null;
  }

  return (
    <div ref={contentRef} className="pointer-events-auto fixed inset-0 z-[140] isolate overflow-hidden bg-[#070707] xl:hidden" aria-modal="true" role="dialog">
      <div ref={preLayersRef} className="pointer-events-auto absolute inset-0" aria-hidden="true">
        {layerColors.map((color) => (
          <div key={color} className="sm-prelayer absolute inset-0" style={{ background: color }} />
        ))}
      </div>

      <div
        ref={panelRef}
        className="pointer-events-auto absolute inset-0 overflow-y-auto bg-[#070707] text-cream shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="focus-ring absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full border border-white/12 bg-white/8 text-cream backdrop-blur-xl transition hover:bg-white/14"
        >
          <X size={21} />
        </button>

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            background: ambientBackground,
            backgroundSize: "auto, auto, 32px 32px"
          }}
        />

        <div className="section-shell relative flex min-h-svh flex-col justify-between pb-7 pt-28">
          <div>
            <p className="sm-lower-item eyebrow text-lime">Navigation</p>

            <nav className="mt-7 grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <div key={item.href} className="overflow-hidden border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={(event) => handleAnchorClick(event, item.href)}
                    className="focus-ring group flex items-center justify-between py-4 text-4xl font-semibold leading-none text-cream transition hover:text-lime sm:text-6xl"
                    aria-label={`Go to ${item.label}`}
                  >
                    <span className="sm-panel-item-label inline-block will-change-transform">{item.label}</span>
                    <span className="sm-panel-item-label flex items-start gap-2 text-sm text-lime will-change-transform">
                      {String(index + 1).padStart(2, "0")}
                      <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                    </span>
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className="grid gap-5">
            <div className="sm-lower-item flex flex-wrap gap-2">
              {content.menuHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase text-cream/78">
                  {item}
                </span>
              ))}
            </div>

            <div className="sm-lower-item grid gap-3">
              <a
                href={contact.fiverr}
                data-cursor="button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="focus-ring inline-flex min-h-14 items-center justify-between rounded-full bg-[#1ABB6C] px-5 py-4 text-sm font-black uppercase !text-white transition hover:bg-[#159f5b] [&_*]:!text-white"
              >
                <span className="inline-flex items-center gap-3">
                  <FiverrIcon className="size-7" />
                  Hire Me
                </span>
                <ArrowUpRight size={18} />
              </a>
              <div className="grid grid-cols-2 gap-3">
                <ResumeDownloadMenu
                  align="left"
                  onSelect={onClose}
                  wrapperClassName="w-full"
                  className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-xs font-bold uppercase text-cream"
                >
                  <Download size={16} />
                  Resume
                </ResumeDownloadMenu>
                <a
                  href={`mailto:${contact.email}`}
                  data-cursor="button"
                  onClick={onClose}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-xs font-bold uppercase text-cream"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
