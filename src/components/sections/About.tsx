"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import ProfileCard from "@/components/react-bits/ProfileCard";

const shopifyPhrases = [
  "I turn rough Shopify briefs into clean storefront systems.",
  "I build product flows that feel simple for customers and maintainable for teams.",
  "I debug Liquid, AJAX carts, app conflicts, and performance issues without losing calm.",
  "I bring senior communication, delivery ownership, and practical commerce judgment."
];

const fullStackPhrases = [
  "I connect interfaces, APIs, records, roles, and release details.",
  "I build dashboards, portals, POS tools, auction flows, and business systems around real users.",
  "I move from fuzzy brief to usable product without dropping the boring-but-important details.",
  "I bring frontend polish, backend judgment, and calm technical explanation."
];

const shopifyHighlights = [
  "Shopify sections, product pages, metafields, cart UX",
  "Conversion-aware implementation with clean handoff",
  "Client-ready communication and developer leadership"
];

const fullStackHighlights = [
  "Next.js interfaces, APIs, dashboards, and product flows",
  "POS, IMS, auction portals, data banks, and desktop apps",
  "Clear thinking across UI, backend, data, and deployment"
];

type LenisWindow = Window & {
  __portfolioLenis?: {
    scrollTo?: (target: Element | string | number, options?: { offset?: number }) => void;
  };
};

function TypewriterText({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const atEnd = !deleting && displayed === current;
    const atStart = deleting && displayed === "";
    const delay = atEnd ? 1350 : atStart ? 240 : deleting ? 24 : 42;

    const timer = window.setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
        return;
      }

      if (atStart) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }

      const nextLength = displayed.length + (deleting ? -1 : 1);
      setDisplayed(current.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, displayed, phraseIndex, phrases]);

  return (
    <span>
      {displayed}
      <span className="ml-1 inline-block h-[1em] w-[0.12em] translate-y-1 bg-lime align-baseline animate-pulse" aria-hidden="true" />
    </span>
  );
}

export function About() {
  const { content, mode } = usePortfolioMode();
  const phrases = useMemo(() => (mode === "fullStack" ? fullStackPhrases : shopifyPhrases), [mode]);
  const highlights = mode === "fullStack" ? fullStackHighlights : shopifyHighlights;

  const scrollToContact = () => {
    const target = document.querySelector("#contact");

    if (!target) {
      return;
    }

    const lenis = (window as LenisWindow).__portfolioLenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(target, { offset: -88 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.pushState(null, "", "#contact");
  };

  return (
    <section id="about" className="overflow-hidden border-y border-white/10 bg-[#080b08] py-24 text-cream sm:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.26 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs text-lime">01</span>
              <span className="h-px w-12 bg-white/18" />
              <span className="eyebrow">About</span>
            </div>

            <p className="display-text max-w-4xl text-[3.5rem] leading-none text-cream sm:text-[5.4rem] lg:text-[6.4rem]">
              What I Bring To The Table
            </p>

            <div className="mt-8 min-h-[8.5rem] max-w-3xl text-pretty text-2xl font-semibold leading-snug text-cream sm:text-3xl lg:text-4xl" aria-live="polite">
              <TypewriterText key={mode} phrases={phrases} />
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I am a developer who cares about the shape of the product, not just the ticket. I like clean interfaces, clear scope, reliable delivery, and code that the next person can understand without needing a rescue mission.
            </p>

            <div className="mt-9 grid gap-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm font-bold uppercase text-cream/78 sm:text-base">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-lime" size={19} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              data-cursor="button"
              className="focus-ring mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-lime px-6 py-3 text-sm font-black uppercase !text-black transition hover:bg-shopify [&_*]:!text-black"
            >
              Talk About A Role Or Project
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileCard
              avatarUrl="/assets/profile/tallal-aamir.jpeg"
              behindGlowColor={mode === "fullStack" ? "rgba(125, 190, 255, 0.67)" : "rgba(215, 255, 74, 0.58)"}
              behindGlowEnabled
              className="about-profile-card mx-auto lg:mx-0"
              contactText="Contact Me"
              enableMobileTilt
              enableTilt={true}
              handle="tallal-aamir"
              innerGradient={
                mode === "fullStack"
                  ? "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                  : "linear-gradient(145deg,#2833148c 0%,#d7ff4a38 100%)"
              }
              name="Tallal Aamir"
              onContactClick={scrollToContact}
              showUserInfo
              status="Open to remote work"
              title={content.headerRole}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
