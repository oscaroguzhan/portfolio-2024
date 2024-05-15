
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from '../components/Projects';
import Contact from "@/components/Contact";


export default function Home() {

  return (
    <main className="bg-[#1C1F33] text-[#fafafa] h-screen snap-y snap-mandatory overflow-y-scroll w-full 
    scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About title="About" />
      </section>
      {/* Experience Section */}
      <section id="experiences" className="snap-center">
        <Experience title="Experiences" />
      </section>
      <section id="skills" className="snap-start">
        <Skills title="Skills" />
      </section>
      <section id="projects" className="snap-start">
        <Projects title="Projects" />
      </section>
      {/* Contact Section */}
      <section id="contact" className="snap-center">
        <Contact title="Contact"/>
      </section>
    </main>
  );
}
