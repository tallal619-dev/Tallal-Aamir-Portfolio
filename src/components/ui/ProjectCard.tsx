"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Code2, Database, Gauge, ServerCog, ShoppingBag, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { TiltCard } from "@/components/react-bits/TiltCard";
import { cn } from "@/lib/utils";
import { CaseStudyPreview } from "@/components/ui/CaseStudyPreview";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const modalMetricsByMode = {
  shopify: [
    { icon: Code2, label: "Architecture" },
    { icon: ShoppingBag, label: "Commerce UX" },
    { icon: Gauge, label: "Responsive QA" }
  ],
  fullStack: [
    { icon: Code2, label: "Interface Logic" },
    { icon: ServerCog, label: "API Flow" },
    { icon: Database, label: "Data Model" }
  ]
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = usePortfolioMode();
  const isFullStack = mode === "fullStack";
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalMetrics = modalMetricsByMode[mode];
  const modalTitleId = useMemo(() => `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-modal-title`, [project.title]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    const previousFocus = document.activeElement as HTMLElement | null;
    const focusFrame = requestAnimationFrame(() => overlayRef.current?.querySelector<HTMLButtonElement>("button")?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
      if (event.key === "Tab") {
        const focusable = Array.from(overlayRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]') ?? []);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };

    root.dataset.scrollLocked = "true";
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: true } }));
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      delete root.dataset.scrollLocked;
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
      window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: false } }));
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.28) }}
      >
        <TiltCard className="h-full" strength={5}>
          <SpotlightCard className="group/case h-full">
            <article className={cn("grid h-full overflow-hidden", isFullStack ? "min-h-[640px] grid-rows-[auto_1fr]" : "min-h-[540px] grid-rows-[auto_1fr]")}>
              <CaseStudyPreview project={project} />

              <div className={cn("flex flex-col p-6 sm:p-7", isFullStack && "bg-[linear-gradient(180deg,rgba(7,17,31,0.82),rgba(4,8,15,0.96))] p-7 sm:p-8")}>
                <p className="eyebrow text-shopify">{project.eyebrow}</p>
                <h3 className={cn("mt-4 font-semibold leading-tight text-cream", isFullStack ? "text-[1.85rem] sm:text-[2.1rem]" : "text-3xl")}>{project.title}</h3>
                <p className={cn("mt-4 text-pretty text-sm leading-6 text-muted", isFullStack && "max-w-[60ch] leading-7")}>{project.description}</p>

                <div className={cn("mt-5 flex flex-wrap gap-2", isFullStack && "mt-6 gap-2.5")}>
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cream/78">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={cn("mt-auto pt-7", isFullStack && "pt-8")}>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className={cn(
                      "focus-ring inline-flex min-h-12 w-full items-center justify-between rounded-full border border-white/12 px-5 py-3 text-sm font-black uppercase text-cream transition hover:border-lime/50 hover:bg-lime/10",
                      isFullStack && "min-h-14 border-lime/30 bg-lime/10 px-6"
                    )}
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          </SpotlightCard>
        </TiltCard>
      </motion.div>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open && (
                <motion.div
                  ref={overlayRef}
                  className="fixed inset-0 z-[140] flex items-center justify-center overflow-hidden bg-black/82 p-3 backdrop-blur-2xl sm:p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  role="presentation"
                  onClick={() => setOpen(false)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpen(false);
                    }}
                    aria-label="Close case study"
                    className="focus-ring fixed right-4 top-4 z-[160] grid size-12 place-items-center rounded-full border border-white/14 bg-black/72 text-cream shadow-[0_16px_60px_rgba(0,0,0,0.36)] backdrop-blur-xl transition hover:border-lime/50 hover:bg-lime/10 sm:right-7 sm:top-7"
                  >
                    <X size={20} />
                  </button>

                  <motion.div
                    data-case-dialog="true"
                    className={cn(
                      "modal-scrollbar relative max-h-[92svh] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-[8px] border border-white/14 bg-[#090d0a] shadow-[0_40px_150px_rgba(0,0,0,0.72)]",
                      isFullStack && "border-sky-300/20 bg-[#06101d]"
                    )}
                    initial={{ opacity: 0, y: 24, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.985 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={modalTitleId}
                    onClick={(event) => event.stopPropagation()}
                    onWheelCapture={(event) => event.stopPropagation()}
                    onTouchMoveCapture={(event) => event.stopPropagation()}
                  >
                    <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                      <CaseStudyPreview project={project} expanded />

                      <div className="p-5 pt-16 sm:p-8 sm:pt-16 lg:p-10">
                        <div className="max-w-2xl">
                          <p className="eyebrow text-shopify">Technical breakdown</p>
                          <h3 id={modalTitleId} className="mt-3 text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
                            {project.title}
                          </h3>
                          <p className="mt-5 text-pretty text-base leading-7 text-muted">{project.description}</p>
                        </div>

                        <div className="mt-7 grid gap-2 sm:grid-cols-3">
                          {modalMetrics.map((metric) => {
                            const Icon = metric.icon;

                            return (
                              <div key={metric.label} className="flex min-h-16 items-center gap-3 rounded-[8px] border border-white/12 bg-white/[0.035] p-3 text-xs font-bold uppercase text-cream/78">
                                <Icon size={17} className="shrink-0 text-lime" />
                                {metric.label}
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-7 grid gap-4">
                          {[
                            ["Problem", project.problem],
                            ["Solution", project.solution],
                            ["Business Impact", project.impact]
                          ].map(([label, value]) => (
                            <section key={label} className="rounded-[8px] border border-white/10 bg-black/20 p-4">
                              <h4 className="mb-2 text-xs font-black uppercase text-lime">{label}</h4>
                              <p className="text-pretty text-sm leading-6 text-muted">{value}</p>
                            </section>
                          ))}
                        </div>

                        <section className="mt-7">
                          <h4 className="mb-4 text-xs font-black uppercase text-lime">What I Delivered</h4>
                          <ul className="grid gap-3 text-sm text-muted">
                            {project.delivered.map((item) => (
                              <li key={item} className="flex gap-3 rounded-[8px] border border-white/10 bg-black/20 p-3">
                                <Check size={17} className="mt-0.5 shrink-0 text-lime" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </section>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="rounded-full bg-lime/10 px-3 py-1 text-xs font-bold uppercase text-lime">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          data-cursor="button"
                          onClick={() => setOpen(false)}
                          className="focus-ring mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-black uppercase !text-black transition hover:bg-shopify sm:w-fit [&_*]:!text-black"
                        >
                          Build something similar
                          <ArrowUpRight size={17} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}
