"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { useEffect } from "react";
import { contact, navItems } from "@/data/portfolio";

interface StaggeredMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuHighlights = ["Theme builds", "Product customizers", "AJAX carts", "Performance"];

export function StaggeredMenu({ open, onClose }: StaggeredMenuProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] overflow-hidden bg-[#070707] text-cream lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1.04 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                "radial-gradient(circle at 78% 16%, rgba(215,255,74,0.22), transparent 22rem), radial-gradient(circle at 12% 82%, rgba(0,61,43,0.72), transparent 28rem), radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1.8px)",
              backgroundSize: "auto, auto, 32px 32px"
            }}
          />

          <div className="section-shell relative flex min-h-svh flex-col justify-between pb-7 pt-28">
            <div>
              <motion.p
                className="eyebrow text-lime"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
              >
                Navigation
              </motion.p>

              <nav className="mt-7 grid gap-1" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="focus-ring group flex items-center justify-between border-b border-white/10 py-4 text-4xl font-semibold leading-none text-cream sm:text-6xl"
                    initial={{ opacity: 0, x: -28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -18, filter: "blur(8px)" }}
                    transition={{ delay: 0.12 + index * 0.055, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="text-lime opacity-0 transition group-hover:opacity-100" size={28} />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="grid gap-5">
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
              >
                {menuHighlights.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase text-cream/78">
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="grid gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.43 }}
              >
                <a
                  href={contact.fiverr}
                  data-cursor="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="focus-ring inline-flex min-h-14 items-center justify-between rounded-full bg-lime px-5 py-4 text-sm font-black uppercase !text-black [&_*]:!text-black"
                >
                  Hire Me on Fiverr
                  <ArrowUpRight size={18} />
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contact.resume}
                    data-cursor="button"
                    download
                    onClick={onClose}
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-xs font-bold uppercase text-cream"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    data-cursor="button"
                    onClick={onClose}
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-xs font-bold uppercase text-cream"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
