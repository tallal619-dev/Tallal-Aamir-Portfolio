"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

type LenisWindow = Window & {
  __portfolioLenis?: {
    scrollTo?: (target: Element | string | number, options?: { offset?: number }) => void;
  };
};

export function FloatingContactCTA() {
  const [hidden, setHidden] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const contact = document.querySelector("#contact");

    if (!contact || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting && entry.intersectionRatio > 0.24);
      },
      { threshold: [0, 0.24] }
    );

    observer.observe(contact);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScrollLock = (event: Event) => {
      const detail = (event as CustomEvent<{ locked?: boolean }>).detail;
      setScrollLocked(Boolean(detail?.locked));
    };

    window.addEventListener("portfolio:scroll-lock", handleScrollLock);

    return () => window.removeEventListener("portfolio:scroll-lock", handleScrollLock);
  }, []);

  const handleClick = () => {
    const contact = document.querySelector("#contact");

    if (!contact) {
      return;
    }

    const lenis = (window as LenisWindow).__portfolioLenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(contact, { offset: -84 });
    } else {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.pushState(null, "", "#contact");
  };

  return (
    <motion.button
      type="button"
      data-cursor="button"
      aria-label="Jump to contact form"
      onClick={handleClick}
      className="focus-ring fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-lime/35 bg-lime px-5 py-4 text-sm font-black uppercase !text-black shadow-[0_18px_70px_rgba(0,0,0,0.34)] transition hover:bg-shopify lg:hidden [&_*]:!text-black"
      initial={{ opacity: 0, y: 18 }}
      animate={hidden || scrollLocked ? { opacity: 0, y: 18, pointerEvents: "none" } : { opacity: 1, y: 0, pointerEvents: "auto" }}
      transition={{ delay: hidden || scrollLocked ? 0 : 0.7, duration: 0.36 }}
    >
      <MessageCircle size={18} />
      Let&apos;s Talk
    </motion.button>
  );
}
