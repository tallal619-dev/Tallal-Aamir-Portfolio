import { experience } from "@/data/portfolio";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
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

      <MobileCarousel
        ariaLabel="Professional experience"
        className="mt-14 md:hidden"
        desktopClassName="md:hidden"
        itemClassName="min-w-[min(88vw,27rem)]"
      >
        {experience.map((item, index) => (
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
        {experience.map((item, index) => (
          <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
