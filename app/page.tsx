import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Services />
        <Process />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
