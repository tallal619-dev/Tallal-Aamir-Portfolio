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
    if (event.target !== event.currentTarget) return;
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
                alt={`${project.title} live website preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-top transition duration-700 group-hover/live:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-lime/30 bg-black/80 px-3 py-1 text-xs font-bold uppercase text-lime">
                Live 0{index + 1}
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
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-cream/78">
                    {tag}
                  </span>
                ))}
              </div>

              <span
                onClick={stopPropagation}
                className="mt-auto pt-7 opacity-100 transition duration-500"
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
