"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

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
      className="focus-ring fixed bottom-5 right-5 z-40 grid size-16 place-items-center rounded-full border border-lime/40 bg-lime !text-black shadow-[0_18px_70px_rgba(0,0,0,0.34)] transition hover:bg-shopify lg:hidden [&_*]:!text-black"
      initial={{ opacity: 0, y: 18 }}
      animate={hidden || scrollLocked ? { opacity: 0, y: 18, pointerEvents: "none" } : { opacity: 1, y: 0, pointerEvents: "auto" }}
      transition={{ delay: hidden || scrollLocked ? 0 : 0.7, duration: 0.36 }}
    >
      <Mail size={23} strokeWidth={2.4} />
    </motion.button>
  );
}
