import Image from "next/image";
import Hero from "@/componentes/hero/hero"
import Experience from "@/componentes/card_experience/card_experience"
import Skill from "@/componentes/card_skill/card_skill"
import Contact from "@/componentes/Contacto/Contacto"
import Skills from "@/componentes/skills/skills"
import Timeline from "@/componentes/timeline/timeline"
import AboutMe from "@/componentes/aboutMe/about"
export default function Home() {
  return (
    <>
    <Hero/>
    <Experience/>
    <Skill/>
    <Skills/>
    <Timeline/>
    <AboutMe/>
    <Contact/>
    
    </>
  );
}
