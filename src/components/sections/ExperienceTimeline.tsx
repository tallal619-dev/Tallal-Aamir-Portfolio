import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Delivery, Leadership, And Range"
        copy="Shopify implementation, development leadership, client communication, and enough full-stack range to solve the product problems around the storefront too."
      />

      <div className="relative mt-16 grid gap-12">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-2 left-[5px] top-2 z-0 w-px bg-white/10 md:left-[7px]">
          <span className="timeline-line-fill absolute inset-x-0 top-0 h-full rounded-full" />
          <span className="timeline-line-glow absolute left-1/2 h-28 w-2 -translate-x-1/2 rounded-full bg-lime/60 blur-md" />
        </div>
        {experience.map((item, index) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
