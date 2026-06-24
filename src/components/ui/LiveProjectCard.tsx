"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import type { KeyboardEvent, MouseEvent } from "react";
import type { LiveProject } from "@/data/portfolio";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { TiltCard } from "@/components/react-bits/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface LiveProjectCardProps {
  project: LiveProject;
  index: number;
}

export function LiveProjectCard({ project, index }: LiveProjectCardProps) {
  const openProject = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  const stopPropagation = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      role="link"
      tabIndex={0}
      aria-label={`Open live site for ${project.title}`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      className="focus-ring cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.64, delay: Math.min(index * 0.06, 0.28) }}
    >
      <TiltCard className="h-full">
        <SpotlightCard className="group/live h-full">
          <article className="relative grid h-full min-h-[500px] grid-rows-[220px_1fr] overflow-hidden">
            <div className="relative overflow-hidden border-b border-white/10 bg-[#07100c]">
              <Image
                src={project.image}
                alt={`${project.title} AI-generated e-commerce thumbnail`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover opacity-88 transition duration-700 group-hover/live:scale-105 group-hover/live:opacity-100 group-hover/live:brightness-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.72)),radial-gradient(circle_at_30%_20%,rgba(215,255,74,0.12),transparent_38%)]" />
              <div className="absolute inset-5 rounded-[8px] border border-white/12 bg-black/8 backdrop-blur-[0.2px] transition duration-500 group-hover/live:border-lime/35" />
              <div className="absolute left-6 top-6 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-bold uppercase text-lime">
                Live 0{index + 1}
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 opacity-90 transition duration-500 group-hover/live:opacity-100">
                <div className="grid gap-2 rounded-[8px] border border-white/12 bg-black/42 p-3 backdrop-blur-md">
                  <span className="h-1.5 w-20 rounded-full bg-cream/55" />
                  <span className="h-1.5 w-12 rounded-full bg-lime/70" />
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-lime/60 to-transparent" />
              </div>
            </div>

            <div className="flex flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="eyebrow text-shopify">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-cream">{project.title}</h3>
                </div>
                <ExternalLink className="mt-1 shrink-0 text-lime opacity-70 transition group-hover/live:translate-x-1 group-hover/live:-translate-y-1 group-hover/live:opacity-100" size={22} />
              </div>

              <p className="mt-5 text-pretty text-sm leading-7 text-muted">{project.description}</p>

              <div className="mt-6 flex translate-y-0 flex-wrap gap-2 opacity-100 transition duration-500 md:translate-y-3 md:opacity-72 md:group-hover/live:translate-y-0 md:group-hover/live:opacity-100">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-cream/78">
                    {tag}
                  </span>
                ))}
              </div>

              <span
                onClick={stopPropagation}
                className="mt-auto pt-7 opacity-100 transition duration-500 md:translate-y-2 md:opacity-0 md:group-hover/live:translate-y-0 md:group-hover/live:opacity-100"
              >
                <MagneticButton href={project.url} target="_blank" variant="secondary" className="w-full justify-between">
                  Live Site
                </MagneticButton>
              </span>
            </div>
          </article>
        </SpotlightCard>
      </TiltCard>
    </motion.div>
  );
}
