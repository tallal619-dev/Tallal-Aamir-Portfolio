import { liveProjects, projects } from "@/data/portfolio";
import { LiveProjectCard } from "@/components/ui/LiveProjectCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const deepDiveOrder = [
  "Custom Jewelry Product Configurator",
  "Dressed For Dinner",
  "Shopify Theme Systems",
  "Car Zone Portal"
];

const deepDiveProjects = deepDiveOrder.flatMap((title) => projects.filter((project) => project.title === title));

export function FeaturedWork() {
  return (
    <section id="work" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Selected delivery"
          title="Shopify Work With Real Business Context"
          copy="Storefronts, product experiences, agency builds, and performance-focused improvements that show both client impact and senior development judgment."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {liveProjects.map((project, index) => (
            <LiveProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <SectionHeading
          index="03"
          eyebrow="Technical depth"
          title="Deep-Dive Case Studies"
          copy="A closer look at how I think through requirements, architecture, user flows, maintainability, and launch-ready execution."
          className="mt-24 sm:mt-32"
        />

        <div id="case-studies" className="mt-14 grid gap-5 lg:grid-cols-2">
          {deepDiveProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
