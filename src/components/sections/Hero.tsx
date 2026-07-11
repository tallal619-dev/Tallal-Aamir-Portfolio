"use client";

import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import LiquidEther from "@/components/react-bits/LiquidEther";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ResumeDownloadMenu } from "@/components/ui/ResumeDownloadMenu";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), Math.max(min, max));

export function Hero() {
  const { content, mode } = usePortfolioMode();
  const heroRef = useRef<HTMLElement>(null);
  const [nameTag, setNameTag] = useState({ x: 24, y: 24, active: false });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = heroRef.current?.getBoundingClientRect();

    if (!bounds || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    setNameTag({
      x: clamp(x + 22, 16, bounds.width - 244),
      y: clamp(y + 22, 96, bounds.height - 80),
      active: true
    });
  };

  const handleLeave = () => {
    setNameTag((current) => ({ ...current, active: false }));
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate flex min-h-[94svh] items-center overflow-hidden border-b border-white/10 bg-[#050806] px-0 pb-14 pt-28 text-cream sm:pt-32"
      style={{ backgroundColor: content.heroBackground }}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <LiquidEther
          colors={content.heroColors}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-30 hidden rounded-full border border-lime/32 bg-black/70 px-4 py-2 text-xs font-black uppercase text-lime shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:block"
        style={{ left: nameTag.x, top: nameTag.y }}
        animate={{ opacity: nameTag.active ? 1 : 0, scale: nameTag.active ? 1 : 0.96 }}
        transition={{ duration: 0.16 }}
      >
        {content.heroNameTag}
      </motion.div>

      <div className="section-shell relative z-10">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            key={`${mode}-hero-badge`}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.07] px-4 py-2 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="size-2 rounded-full bg-lime"
              style={{ boxShadow: `0 0 18px ${mode === "fullStack" ? "rgba(56,189,248,0.9)" : "rgba(215,255,74,0.9)"}` }}
            />
            <span className="text-[0.68rem] font-black uppercase text-cream/66 sm:text-xs">{content.heroBadge}</span>
          </motion.div>

          <h1 className="display-text max-w-5xl text-balance text-[4.15rem] text-cream sm:text-[5.8rem] md:text-[6.9rem] lg:text-[8rem]">
            <span className="block overflow-hidden">
              <motion.span
                key={`${mode}-hero-first`}
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
              >
                {content.heroFirstLine}
              </motion.span>
            </span>
            {" "}
            <span className="block overflow-hidden">
              <motion.span
                key={`${mode}-hero-second`}
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.08, duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
              >
                {content.heroSecondLead}{" "}
                <span className="relative inline-block text-cream">
                  <span className="relative z-10">{content.heroHighlight}</span>
                  <span className="absolute inset-x-[-0.06em] bottom-[0.06em] z-0 h-[0.2em] rounded-[3px] bg-lime" />
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            key={`${mode}-hero-copy`}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-cream/68 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.62 }}
          >
            {content.heroCopy}
          </motion.p>

          <motion.div
            className="mt-8 grid w-full max-w-md grid-cols-2 gap-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.58 }}
          >
            <MagneticButton
              href="#contact"
              className={mode === "fullStack" ? "w-full !bg-[#38bdf8] !text-black hover:!bg-[#60a5fa] sm:w-auto" : "w-full !bg-lime !text-black hover:!bg-shopify sm:w-auto"}
            >
              Let&apos;s Work Together
            </MagneticButton>
            <MagneticButton
              href="#work"
              variant="secondary"
              className="w-full !border-white/16 !bg-white/[0.06] !text-cream hover:!border-lime/45 hover:!bg-lime/10 sm:w-auto"
            >
              View Work
            </MagneticButton>
            <ResumeDownloadMenu
              align="left"
              className="focus-ring group col-span-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase !text-cream/66 transition hover:!text-lime sm:w-auto"
            >
              Download Resume
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ResumeDownloadMenu>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
