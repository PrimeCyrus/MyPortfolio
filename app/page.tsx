import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import KnowMe from "@/components/KnowMe";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import SectionFX from "@/components/SectionFX";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import Work from "@/components/Work";

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
        <SectionFX variant={3}>
          <Services />
        </SectionFX>
        <SectionFX variant={0}>
          <Process />
        </SectionFX>
        <SectionFX variant={4}>
          <Contact />
        </SectionFX>
      </div>
    </main>
  );
}
