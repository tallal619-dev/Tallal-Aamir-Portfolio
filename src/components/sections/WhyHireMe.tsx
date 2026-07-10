"use client";

import { motion } from "motion/react";
import { CheckCircle2, Quote } from "lucide-react";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

export function WhyHireMe() {
  const { content } = usePortfolioMode();

  return (
    <section className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="07"
          eyebrow={content.whyHireHeading.eyebrow}
          title={content.whyHireHeading.title}
          copy={content.whyHireHeading.copy}
        />

        <MobileCarousel
          ariaLabel="Reasons clients and teams trust me"
          className="mt-14"
          desktopClassName="md:grid-cols-2 xl:grid-cols-3"
          itemClassName="min-w-[min(86vw,23rem)]"
        >
          {content.whyHire.map((item, index) => (
            <motion.div
              key={item.title}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.045, 0.24) }}
            >
              <SpotlightCard className="h-full">
                <article className="h-full min-h-[210px] p-6">
                  <CheckCircle2 size={22} className="text-lime" />
                  <h3 className="mt-6 text-xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </SpotlightCard>
            </motion.div>
          ))}
        </MobileCarousel>

        <MobileCarousel
          ariaLabel="Professional working notes"
          className="mt-16"
          desktopClassName="md:grid-cols-3"
          itemClassName="min-w-[min(86vw,23rem)]"
        >
          {content.testimonials.map((testimonial, index) => (
            <motion.figure
              key={`${testimonial}-${index}`}
              className="h-full rounded-[8px] border border-dashed border-white/16 bg-black/22 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: index * 0.07 }}
            >
              <Quote size={24} className="text-lime" />
              <blockquote className="mt-6 text-lg text-cream">{testimonial}</blockquote>
              <figcaption className="mt-5 text-sm text-muted">Professional working note</figcaption>
            </motion.figure>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
