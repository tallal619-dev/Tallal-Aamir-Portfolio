"use client";

import { liveProjects, projects } from "@/data/portfolio";
import { usePortfolioMode } from "@/components/layout/PortfolioModeProvider";
import { LiveProjectCard } from "@/components/ui/LiveProjectCard";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedWork() {
  const { content, mode } = usePortfolioMode();
  const showShopifyProjects = mode === "shopify";
  const deepDiveProjects = content.caseStudyOrder.flatMap((title) => projects.filter((project) => project.title === title));

  return (
    <section id="work" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow={content.featuredHeading.eyebrow}
          title={content.featuredHeading.title}
          copy={content.featuredHeading.copy}
        />

        {showShopifyProjects ? (
          <>
            <MobileCarousel
              ariaLabel="Live Shopify projects"
              className="mt-14"
              desktopClassName="md:grid-cols-2 xl:grid-cols-3"
              trackClassName="gap-5"
              itemClassName="min-w-[min(88vw,25rem)]"
            >
              {liveProjects.map((project, index) => (
                <LiveProjectCard key={project.title} project={project} index={index} />
              ))}
            </MobileCarousel>

            <SectionHeading
              index="03"
              eyebrow={content.caseStudyHeading.eyebrow}
              title={content.caseStudyHeading.title}
              copy={content.caseStudyHeading.copy}
              className="mt-24 sm:mt-32"
            />
          </>
        ) : null}

        <MobileCarousel
          ariaLabel={showShopifyProjects ? "Deep-dive case studies" : "Full-stack systems case studies"}
          className="mt-14"
          desktopClassName="md:grid-cols-2"
          trackClassName="gap-5"
          itemClassName="min-w-[min(88vw,25rem)]"
        >
          {deepDiveProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
