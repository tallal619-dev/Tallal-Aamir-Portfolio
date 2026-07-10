"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Code2, Database, Gauge, ServerCog, ShoppingBag, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { TiltCard } from "@/components/react-bits/TiltCard";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type SystemVisualKind = "kanban" | "auction" | "pos" | "desktop" | "records" | "mobile";

interface SystemVisual {
  kind: SystemVisualKind;
  kicker: string;
  title: string;
  stats: string[];
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

function getSystemVisual(project: Project): SystemVisual {
  if (project.title.includes("Trello")) {
    return {
      kind: "kanban",
      kicker: "Product workflow",
      title: "Boards, cards and deployment flow",
      stats: ["Next.js", "Node API", "AWS S3"]
    };
  }

  if (project.title.includes("Auction")) {
    return {
      kind: "auction",
      kicker: "Auction portal",
      title: "Inventory, bidders and admin control",
      stats: ["Live bids", "RBAC", "Supabase"]
    };
  }

  if (project.title.includes("Electron")) {
    return {
      kind: "desktop",
      kicker: "Desktop POS",
      title: "Local counter workflow",
      stats: ["Electron", "Offline", "Receipts"]
    };
  }

  if (project.title.includes("POS")) {
    return {
      kind: "pos",
      kicker: "Retail operations",
      title: "Billing, stock and reporting",
      stats: ["Sales", "Stock", "Reports"]
    };
  }

  if (project.title.includes("Breeders")) {
    return {
      kind: "mobile",
      kicker: "Mobile release",
      title: "Records app shipped to Play Store",
      stats: ["Flutter", "Firebase", "Release"]
    };
  }

  return {
    kind: "records",
    kicker: project.title.includes("Student") ? "Education data" : project.title.includes("Employee") ? "HR system" : "Data system",
    title: "Searchable records and role-based views",
    stats: ["Records", "Roles", "Reports"]
  };
}

function SystemPreview({ kind, isModal }: { kind: SystemVisualKind; isModal: boolean }) {
  const cardHeight = isModal ? "h-16" : "h-10";

  if (kind === "kanban") {
    return (
      <div className="grid grid-cols-3 gap-3">
        {["Plan", "Build", "Ship"].map((column, columnIndex) => (
          <div key={column} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.6rem] font-black uppercase text-cream/65">{column}</span>
              <span className="size-1.5 rounded-full bg-lime" />
            </div>
            <div className="grid gap-2">
              {[0, 1, 2].slice(0, columnIndex === 2 ? 2 : 3).map((item) => (
                <span key={item} className={cn(cardHeight, "rounded-[6px] border border-sky-300/[0.12] bg-sky-300/[0.08]")} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "auction") {
    return (
      <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="grid grid-cols-[2.3rem_1fr_auto] items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-2">
              <span className="h-7 rounded bg-sky-300/[0.12]" />
              <span className="grid gap-1.5">
                <span className="h-1.5 w-24 rounded bg-cream/25" />
                <span className="h-1.5 w-16 rounded bg-lime/60" />
              </span>
              <span className="h-5 w-12 rounded-full bg-lime/15" />
            </div>
          ))}
        </div>
        <div className="rounded-[8px] border border-lime/25 bg-lime/10 p-3">
          <span className="block text-[0.62rem] font-black uppercase text-lime">Live bid</span>
          <span className="mt-5 block text-2xl font-black text-cream">$24.8K</span>
          <span className="mt-4 block h-8 rounded-full bg-lime" />
        </div>
      </div>
    );
  }

  if (kind === "pos" || kind === "desktop") {
    return (
      <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr]">
        <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }, (_, item) => (
              <span key={item} className={cn(isModal ? "h-12" : "h-8", "rounded-[6px] bg-sky-300/10")} />
            ))}
          </div>
          <span className="mt-3 block h-7 rounded-full bg-lime/80" />
        </div>
        <div className="rounded-[8px] border border-white/10 bg-black/30 p-3">
          <span className="block h-2 w-20 rounded bg-cream/30" />
          <span className="mt-4 block h-px bg-white/12" />
          <span className="mt-4 block h-px bg-white/12" />
          <span className="mt-4 block text-2xl font-black text-lime">$184.50</span>
          <span className="mt-5 block h-7 rounded-full border border-lime/30" />
        </div>
      </div>
    );
  }

  if (kind === "mobile") {
    return (
      <div className="mx-auto grid max-w-[22rem] grid-cols-[0.68fr_1fr] items-center gap-4">
        <div className="rounded-[1.35rem] border border-sky-300/25 bg-black/40 p-2">
          <div className="min-h-48 rounded-[1rem] bg-sky-300/[0.08] p-3">
            <span className="mx-auto block h-1 w-10 rounded bg-cream/25" />
            <span className="mt-6 block h-20 rounded-[8px] bg-lime/15" />
            <span className="mt-3 block h-2 w-24 rounded bg-cream/25" />
            <span className="mt-2 block h-2 w-16 rounded bg-sky-300/30" />
          </div>
        </div>
        <div className="grid gap-2">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="h-10 rounded-[8px] border border-white/10 bg-white/[0.04]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
        <span className="h-2 w-32 rounded bg-cream/20" />
        <span className="h-6 w-16 rounded-full bg-lime/60" />
      </div>
      <div className="grid gap-2">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[auto_1fr_0.75fr] items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-2">
            <span className="size-2 rounded-full bg-lime" />
            <span className="h-1.5 rounded bg-cream/20" />
            <span className="h-1.5 rounded bg-sky-300/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemCaseVisual({ project, index, variant = "card" }: { project: Project; index: number; variant?: "card" | "modal" }) {
  const visual = getSystemVisual(project);
  const isModal = variant === "modal";

  return (
    <div className={cn("relative h-full overflow-hidden bg-[#06101d]", isModal ? "min-h-[680px]" : "min-h-[250px]")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.22),transparent_24rem),linear-gradient(135deg,rgba(56,189,248,0.14),transparent_42%,rgba(37,99,235,0.12))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

      <div className={cn("relative z-10 flex h-full flex-col", isModal ? "p-7 lg:p-9" : "p-5")}>
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-lime/35 bg-black/50 px-3 py-1 text-xs font-black uppercase text-lime backdrop-blur-xl">
            Case 0{index + 1}
          </span>
          <span className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1 text-[0.66rem] font-black uppercase text-cream/70">
            {visual.stats[0]}
          </span>
        </div>

        <div className={cn("grid flex-1 items-center gap-5", isModal ? "py-8" : "py-5")}>
          <div className={cn("mx-auto w-full max-w-[34rem] rounded-[8px] border border-sky-300/20 bg-black/40 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl", isModal && "max-w-[40rem] p-4")}>
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-red-400/75" />
                <span className="size-2 rounded-full bg-amber-300/75" />
                <span className="size-2 rounded-full bg-lime/80" />
              </div>
              <span className="h-2 w-20 rounded-full bg-white/12" />
            </div>
            <SystemPreview kind={visual.kind} isModal={isModal} />
          </div>
        </div>

        <div>
          <p className="text-[0.68rem] font-black uppercase text-lime">{visual.kicker}</p>
          {!isModal ? <h4 className="mt-2 max-w-xl text-2xl font-semibold leading-tight text-cream">{visual.title}</h4> : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {visual.stats.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[0.65rem] font-bold uppercase text-cream/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = usePortfolioMode();
  const isFullStack = mode === "fullStack";
  const [open, setOpen] = useState(false);
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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    root.dataset.scrollLocked = "true";
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: true } }));
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      delete root.dataset.scrollLocked;
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
      window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: false } }));
      window.removeEventListener("keydown", handleKeyDown);
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
            <article className="grid h-full min-h-[540px] grid-rows-[250px_1fr] overflow-hidden">
              <div className="relative overflow-hidden border-b border-white/10 bg-[#080d0a]">
                {isFullStack ? (
                  <SystemCaseVisual project={project} index={index} />
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} case study preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-90 transition duration-700 group-hover/case:scale-105 group-hover/case:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.04),rgba(7,7,7,0.64)),radial-gradient(circle_at_24%_18%,rgba(215,255,74,0.16),transparent_38%)]" />
                    <div className="absolute left-5 top-5 rounded-full border border-lime/35 bg-black/42 px-3 py-1 text-xs font-black uppercase text-lime backdrop-blur-xl">
                      Case 0{index + 1}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div className="rounded-[8px] border border-white/12 bg-black/44 px-3 py-2 backdrop-blur-xl">
                        <p className="text-[0.68rem] font-black uppercase text-cream/72">{project.eyebrow}</p>
                      </div>
                      <span className="h-px flex-1 bg-gradient-to-r from-lime/70 to-transparent" />
                    </div>
                  </>
                )}
              </div>

              <div className={cn("flex flex-col p-6 sm:p-7", isFullStack && "bg-[linear-gradient(180deg,rgba(7,17,31,0.82),rgba(4,8,15,0.96))]")}>
                <p className="eyebrow text-shopify">{project.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-cream">{project.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-6 text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cream/78">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className={cn(
                    "focus-ring mt-auto inline-flex min-h-12 w-full items-center justify-between rounded-full border border-white/12 px-5 py-3 text-sm font-black uppercase text-cream transition hover:border-lime/50 hover:bg-lime/10",
                    isFullStack && "border-lime/30 bg-lime/10"
                  )}
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                  <ArrowUpRight size={17} />
                </button>
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
                      <figure className={cn("relative min-h-[260px] overflow-hidden bg-[#07100b] sm:min-h-[350px] lg:sticky lg:top-0 lg:min-h-[680px]", isFullStack && "lg:self-start")}>
                        {isFullStack ? (
                          <SystemCaseVisual project={project} index={index} variant="modal" />
                        ) : (
                          <>
                            <Image
                              src={project.image}
                              alt={`${project.title} case study visual`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 48vw"
                              className="object-cover brightness-125 contrast-110 saturate-125"
                              priority={open}
                            />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,rgba(215,255,74,0.08),transparent_34%)]" />
                            <div className="absolute left-4 top-4 rounded-full border border-lime/35 bg-black/50 px-3 py-1 text-xs font-black uppercase text-lime backdrop-blur-xl sm:left-6 sm:top-6">
                              Case Study 0{index + 1}
                            </div>
                          </>
                        )}
                      </figure>

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
