import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import WhatIEngineer from "@/components/sections/WhatIEngineer";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <WhatIEngineer />
      <TechStack />
    </>
  );
}
