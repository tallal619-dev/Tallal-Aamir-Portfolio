"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BadgeCheck, MessageCircle, Star } from "lucide-react";
import { contact, fiverrReviewBreakdown, fiverrReviewStats } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FiverrIcon } from "@/components/ui/FiverrIcon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { cn } from "@/lib/utils";

const stars = Array.from({ length: 5 }, (_, index) => index);

export function FiverrReviews() {
  const { content, mode } = usePortfolioMode();

  return (
    <section id="reviews" className={cn("overflow-hidden border-y border-lime/10 py-24 sm:py-32", mode === "fullStack" ? "bg-[#050b16]" : "bg-[#071008]")}>
      <div className="section-shell">
        <SectionHeading
          index="09"
          eyebrow={content.reviewsHeading.eyebrow}
          title={content.reviewsHeading.title}
          copy={content.reviewsHeading.copy}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="relative overflow-hidden rounded-[8px] border border-lime/18 bg-black/42 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65 }}
          >
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -right-20 top-10 size-72 rounded-full bg-lime/18 blur-3xl" />
              <div className="absolute -bottom-24 left-8 size-80 rounded-full bg-emerald/40 blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-xs font-black uppercase text-cream">
                <BadgeCheck size={16} className="text-lime" />
                Public Fiverr Profile
              </div>

              <div className="mt-10 flex items-end gap-4">
                <span className="display-text text-[7rem] text-lime sm:text-[9rem]">5.0</span>
                <div className="pb-5">
                  <div className="flex gap-1 text-lime" aria-label="5 star Fiverr rating">
                    {stars.map((star) => (
                      <Star key={star} size={20} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase text-cream/80">Overall rating</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {fiverrReviewStats.map((stat) => (
                  <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-2xl font-black text-cream">{stat.value}</p>
                    <p className="mt-2 text-xs font-black uppercase text-lime">{stat.label}</p>
                    <p className="mt-3 text-xs leading-5 text-muted">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3">
                {fiverrReviewBreakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-sm font-black uppercase text-cream">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-xs font-black text-black">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <MagneticButton
                  href={contact.fiverr}
                  target="_blank"
                  className="w-full justify-between !bg-[#1ABB6C] !text-white hover:!bg-[#159f5b] [&_*]:!text-white sm:w-auto"
                >
                  <span className="inline-flex items-center gap-2">
                    <FiverrIcon className="size-5" />
                    Read Reviews
                  </span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          <MobileCarousel
            ariaLabel="Fiverr review highlights"
            desktopClassName="md:grid-cols-2"
            itemClassName="min-w-[min(86vw,23rem)]"
          >
            {content.reviewHighlights.map((review, index) => (
              <motion.div
                key={review.focus}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24) }}
              >
                <SpotlightCard className="h-full">
                  <article className="flex h-full min-h-[250px] flex-col p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-lime/24 bg-lime/10 px-3 py-1 text-xs font-black uppercase text-lime">
                        {review.focus}
                      </span>
                      <ArrowUpRight size={18} className="text-lime" />
                    </div>
                    <p className="mt-8 text-xl font-semibold leading-8 text-cream">{review.summary}</p>
                    <div className="mt-auto flex items-center gap-3 pt-8 text-sm text-muted">
                      <MessageCircle size={17} className="text-lime" />
                      Fiverr client review pattern
                    </div>
                  </article>
                </SpotlightCard>
              </motion.div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
