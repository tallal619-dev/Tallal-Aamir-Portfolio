"use client";

import { motion } from "motion/react";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const { content } = usePortfolioMode();

  return (
    <section id="process" className="section-shell py-24 sm:py-32">
      <SectionHeading
        index="06"
        eyebrow={content.processHeading.eyebrow}
        title={content.processHeading.title}
        copy={content.processHeading.copy}
      />

      <MobileCarousel
        ariaLabel="Work process steps"
        className="mt-14"
        desktopClassName="md:grid-cols-3 lg:grid-cols-5"
        itemClassName="min-w-[min(82vw,20rem)]"
      >
        {content.processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            className="h-full min-h-[310px] rounded-[8px] border border-white/12 bg-white/[0.035] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24) }}
          >
            <span className="display-text text-7xl text-lime/24">0{index + 1}</span>
            <h3 className="mt-10 text-2xl font-semibold text-cream">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
          </motion.article>
        ))}
      </MobileCarousel>
    </section>
  );
}
