import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import WhatIEngineer from "@/components/sections/WhatIEngineer";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <WhatIEngineer />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
