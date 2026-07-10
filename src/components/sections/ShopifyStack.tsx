"use client";

import { motion } from "motion/react";
import { fullStackSkillGroups, skillGroups } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { cn } from "@/lib/utils";

export function ShopifyStack() {
  const { content, mode } = usePortfolioMode();
  const availableSkillGroups = mode === "fullStack" ? fullStackSkillGroups : skillGroups;
  const orderedSkillGroups = content.skillGroupOrder.flatMap((title) => availableSkillGroups.filter((group) => group.title === title));

  return (
    <section className={cn("border-y border-white/10 py-24 sm:py-32", mode === "fullStack" ? "bg-[#06111f]/72" : "bg-[#0a0f0b]/56")}>
      <div className="section-shell">
        <SectionHeading
          index="05"
          eyebrow={content.stackHeading.eyebrow}
          title={content.stackHeading.title}
          copy={content.stackHeading.copy}
        />

        <MobileCarousel
          ariaLabel="Technical skill groups"
          className="mt-14"
          desktopClassName="md:grid-cols-2"
          trackClassName="gap-5"
          itemClassName="min-w-[min(88vw,26rem)]"
        >
          {orderedSkillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="h-full rounded-[8px] border border-white/12 bg-white/[0.035] p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.56, delay: Math.min(index * 0.06, 0.24) }}
            >
              <h3 className="mb-5 text-2xl font-semibold text-cream">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.article>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
