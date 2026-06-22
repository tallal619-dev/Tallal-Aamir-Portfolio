"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";

export function FloatingFiverrCTA() {
  return (
    <motion.a
      href={contact.fiverr}
      data-cursor="button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hire Muhammad Tallal Aamir on Fiverr"
      className="focus-ring group fixed bottom-6 right-6 z-40 hidden size-16 flex-col items-center justify-center rounded-full border border-lime/35 bg-lime text-[0.68rem] font-black uppercase leading-none !text-black shadow-[0_18px_70px_rgba(149,191,71,0.22)] transition hover:bg-shopify lg:inline-flex [&_*]:!text-black"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.45 }}
    >
      Fiverr
      <ArrowUpRight size={15} className="mt-1 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
