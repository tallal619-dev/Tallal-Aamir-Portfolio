"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";
import { FiverrIcon } from "@/components/ui/FiverrIcon";
import { useEffect, useState } from "react";

export function FloatingFiverrCTA() {
  const [contactVisible, setContactVisible] = useState(false);
  useEffect(() => {
    const section = document.querySelector("#contact");
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting));
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.a
      href={contact.fiverr}
      data-cursor="button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hire Muhammad Tallal Aamir on Fiverr"
      aria-hidden={contactVisible}
      tabIndex={contactVisible ? -1 : undefined}
      className="focus-ring group fixed bottom-6 right-6 z-40 hidden size-16 items-center justify-center rounded-full border border-[#1ABB6C]/45 bg-[#1ABB6C] !text-white shadow-[0_18px_70px_rgba(26,187,108,0.24)] transition hover:bg-[#159f5b] lg:inline-flex [&_*]:!text-white"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: contactVisible ? 0 : 1, y: contactVisible ? 18 : 0, pointerEvents: contactVisible ? "none" : "auto" }}
      transition={{ duration: 0.3 }}
    >
      <FiverrIcon className="size-8" />
      <ArrowUpRight size={14} className="absolute right-3 top-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
