"use client"
import React, { useEffect, useState } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from '../components/Projects';
import Contact from "@/components/Contact";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { PageInfo } from '../typing';



export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null)

  useEffect(() => {
    const pageInfo = async () => {
      const data = await fetchPageInfo()
      setPageInfo(data);
    }
    pageInfo()
  }, [])

  if (!pageInfo) {
    return <div>Loading...</div>;
  }
  return (
    <main className="bg-[#1C1F33] text-[#fafafa] h-screen snap-y snap-mandatory overflow-y-scroll w-full 
    scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600">
      <Header />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
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
        <Contact title="Contact" />
      </section>
    </main>
  );
}

