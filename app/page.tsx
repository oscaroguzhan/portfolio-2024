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
import { PageInfo, Social, Experience as ExperienceType, Skill } from '../typing';
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchSkills } from "@/utils/fetchSkills";


export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null)
  const [socials, setSocials] = useState<Social[] |null> (null)
  const [experiences, setExperiences] = useState<ExperienceType[] | null>(null)
  const [skills, setSkills] = useState<Skill[] | null>(null)
  
  useEffect(() => {
    const data = async () => {
      const pageInfo = await fetchPageInfo()
      const socials = await fetchSocials()
      const experiences = await fetchExperiences()
      const skills = await fetchSkills()
      setPageInfo(pageInfo)
      setSocials(socials)
      setExperiences(experiences)
      setSkills(skills)
    }
    data()
  }, [])

  if (!pageInfo || !socials || !experiences || !skills ) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className="bg-[#1C1F33] text-[#fafafa] h-screen snap-y snap-mandatory overflow-y-scroll w-full 
    scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600">
      <Header socials={socials}/>
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About title="About" pageInfo={pageInfo}/>
        
      </section>
      {/* Experience Section */}
      <section id="experiences" className="snap-center">
        <Experience title="Experiences"experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills title="Skills" skills={skills}/>
      </section>
      <section id="projects" className="snap-start">
        <Projects title="Projects" />
      </section>
      {/* Contact Section */}
      <section id="contact" className="snap-center">
        <Contact title="Contact" pageInfo={pageInfo}/>
      </section>
    </main>
  );
}

