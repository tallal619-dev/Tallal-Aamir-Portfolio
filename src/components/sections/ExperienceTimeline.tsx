"use client";

import { experience } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

const monthIndex: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};

function parseDateValue(value: string) {
  const normalized = value.trim().toLowerCase();

  if (normalized === "present") {
    return Number.MAX_SAFE_INTEGER;
  }

  const [month = "", year = "0"] = normalized.split(/\s+/);
  return Number.parseInt(year, 10) * 12 + (monthIndex[month.slice(0, 3)] ?? 0);
}

function getPeriodBounds(period: string) {
  const [start = "", end = start] = period.split(/\s+-\s+/);

  return {
    start: parseDateValue(start),
    end: parseDateValue(end)
  };
}

const sortedExperience = experience
  .map((item, index) => ({ item, index, bounds: getPeriodBounds(item.period) }))
  .sort((a, b) => b.bounds.end - a.bounds.end || b.bounds.start - a.bounds.start || a.index - b.index)
  .map(({ item }) => item);

export function ExperienceTimeline() {
  const { content } = usePortfolioMode();

  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow={content.experienceHeading.eyebrow}
        title={content.experienceHeading.title}
        copy={content.experienceHeading.copy}
      />

      <MobileCarousel
        ariaLabel="Professional experience"
        className="mt-14 md:hidden"
        desktopClassName="md:hidden"
        itemClassName="min-w-[min(88vw,27rem)]"
      >
        {sortedExperience.map((item, index) => (
          <div key={`${item.role}-${item.company}-mobile`} className="h-full rounded-[8px] border border-white/12 bg-white/[0.035] p-5">
            <TimelineItem item={item} index={index} />
          </div>
        ))}
      </MobileCarousel>

      <div className="relative mt-16 hidden gap-12 md:grid">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-2 left-[5px] top-2 z-0 w-px bg-white/10 md:left-[7px]">
          <span className="timeline-line-fill absolute inset-x-0 top-0 h-full rounded-full" />
          <span className="timeline-line-glow absolute left-1/2 h-28 w-2 -translate-x-1/2 rounded-full bg-lime/60 blur-md" />
        </div>
        {sortedExperience.map((item, index) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
