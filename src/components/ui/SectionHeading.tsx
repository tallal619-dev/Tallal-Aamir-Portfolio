"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
}

export function SectionHeading({ index, eyebrow, title, copy, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("flex flex-col gap-5 md:flex-row md:items-end md:justify-between", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-lime">{index}</span>
          <span className="h-px w-12 bg-white/18" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="display-text max-w-4xl text-[3.4rem] text-cream sm:text-[5.5rem] lg:text-[7.25rem]">
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-md text-pretty text-base leading-7 text-muted">{copy}</p> : null}
    </motion.div>
  );
}
