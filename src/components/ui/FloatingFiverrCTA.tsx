"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";
import { FiverrIcon } from "@/components/ui/FiverrIcon";

export function FloatingFiverrCTA() {
  return (
    <motion.a
      href={contact.fiverr}
      data-cursor="button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hire Muhammad Tallal Aamir on Fiverr"
      className="focus-ring group fixed bottom-6 right-6 z-40 hidden size-16 items-center justify-center rounded-full border border-[#1ABB6C]/45 bg-[#1ABB6C] !text-white shadow-[0_18px_70px_rgba(26,187,108,0.24)] transition hover:bg-[#159f5b] lg:inline-flex [&_*]:!text-white"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.45 }}
    >
      <FiverrIcon className="size-8" />
      <ArrowUpRight size={14} className="absolute right-3 top-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
