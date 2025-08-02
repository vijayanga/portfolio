import Hero from "./area/hero";
import About from "./area/about";
import Skills from "./area/skills";
import Projects from "./area/projects";
import Contact from "./area/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
