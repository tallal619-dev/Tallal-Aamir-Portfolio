import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { NeonName } from "@/components/sections/NeonName";
import { Process } from "@/components/sections/Process";
import { ShopifyStack } from "@/components/sections/ShopifyStack";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyHireMe } from "@/components/sections/WhyHireMe";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />
      <Expertise />
      <NeonName />
      <FeaturedWork />
      <ExperienceTimeline />
      <ShopifyStack />
      <Process />
      <WhyHireMe />
      <Contact />
    </main>
  );
}
