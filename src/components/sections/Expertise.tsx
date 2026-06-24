"use client";

import { motion } from "motion/react";
import { Database, Gauge, LayoutTemplate, PlugZap, ShoppingCart, SlidersHorizontal } from "lucide-react";
import { expertiseCards } from "@/data/portfolio";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { TiltCard } from "@/components/react-bits/TiltCard";

const iconMap = {
  layout: LayoutTemplate,
  sliders: SlidersHorizontal,
  cart: ShoppingCart,
  database: Database,
  speed: Gauge,
  plug: PlugZap
};

export function Expertise() {
  return (
    <section id="expertise" className="section-shell py-24 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="Expertise"
        title="What I Bring To Shopify Teams"
        copy="Custom storefront architecture, conversion-led UX, and clean engineering habits for brands, agencies, and in-house commerce teams."
      />

      <MobileCarousel
        ariaLabel="Shopify expertise areas"
        className="mt-14"
        desktopClassName="md:grid-cols-2 xl:grid-cols-3"
        itemClassName="min-w-[min(86vw,23rem)]"
      >
        {expertiseCards.map((card, index) => {
          const Icon = iconMap[card.icon];

          return (
            <motion.div
              key={card.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: Math.min(index * 0.06, 0.3) }}
            >
              <TiltCard className="h-full">
                <SpotlightCard className="h-full">
                  <article className="flex h-full min-h-[300px] flex-col p-6 sm:p-7">
                    <div className="mb-8 grid size-14 place-items-center rounded-[8px] border border-lime/24 bg-lime/[0.08] text-lime">
                      <Icon size={25} />
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight text-cream">{card.title}</h3>
                    <p className="mt-4 text-pretty text-sm leading-7 text-muted">{card.description}</p>
                    <div className="mt-auto pt-8">
                      <span className="block h-px w-full bg-gradient-to-r from-lime/45 via-white/10 to-transparent" />
                    </div>
                  </article>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          );
        })}
      </MobileCarousel>
    </section>
  );
}
