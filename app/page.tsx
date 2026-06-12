import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import KnowMe from "@/components/KnowMe";
import Nav from "@/components/Nav";
import SectionFX from "@/components/SectionFX";
import Spotlight from "@/components/Spotlight";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import WorkTogether from "@/components/WorkTogether";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <Spotlight />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <SectionFX variant={0}>
          <KnowMe />
        </SectionFX>
        <SectionFX variant={1}>
          <Work />
        </SectionFX>
        <SectionFX variant={2}>
          <WorkTogether />
        </SectionFX>
        <SectionFX variant={3}>
          <Testimonials />
        </SectionFX>
        <SectionFX variant={5}>
          <Writing />
        </SectionFX>
        <SectionFX variant={4}>
          <Contact />
        </SectionFX>
      </div>
    </main>
  );
}
