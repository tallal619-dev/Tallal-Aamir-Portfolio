"use client";

import { motion } from "motion/react";
import type { ExperienceEntry } from "@/data/portfolio";

interface TimelineItemProps {
  item: ExperienceEntry;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.article
      className="relative z-10 grid h-full gap-5 pl-9 md:grid-cols-[0.72fr_1fr] md:gap-10 md:pl-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, delay: Math.min(index * 0.04, 0.24) }}
    >
      <span className="absolute left-0 top-1 size-3 rounded-full border border-lime/45 bg-lime shadow-[0_0_26px_rgba(215,255,74,0.75)] md:left-0" />
      <div>
        <p className="font-mono text-xs uppercase text-lime">{item.period}</p>
        <h3 className="mt-3 text-2xl font-semibold text-cream">{item.role}</h3>
        <p className="mt-2 text-sm text-muted">{item.company}</p>
      </div>
      <div>
        {item.description ? <p className="mb-4 text-pretty leading-7 text-cream/78">{item.description}</p> : null}
        <ul className="grid gap-3 text-sm leading-6 text-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-shopify" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
