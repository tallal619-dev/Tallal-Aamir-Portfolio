import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function CaseStudyPreview({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  return (
    <figure className={cn("m-0 overflow-hidden bg-[#f7f7f5] text-[#59616b]", expanded && "lg:sticky lg:top-0 lg:self-start")}>
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={project.image}
          alt={`${project.title}: interface recreation with illustrative content`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
          className="object-contain"
          priority={expanded}
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-black/10 bg-[#fafaf8] px-4 py-3 text-[11px] leading-5 sm:px-5 sm:text-xs">
        <span>Interface recreation <span aria-hidden="true">·</span> Sample content</span>
        {expanded && (
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-8 items-center gap-1 rounded-sm font-semibold !text-[#364552] underline decoration-[#bbc1c5] underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#364552]"
            aria-label={`View full-size interface recreation for ${project.title} (opens in a new tab)`}
          >
            View full size <ArrowUpRight size={13} />
          </a>
        )}
      </figcaption>
    </figure>
  );
}
