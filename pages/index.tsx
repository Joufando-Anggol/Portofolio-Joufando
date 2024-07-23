import React, { useEffect, useRef, useState } from "react";
import About from "@/pages/About";
import Hero from "@/pages/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Project from "@/pages/Project";
import Services from "@/pages/Services";
import Skills from "@/components/Skills";
import ProjectDetails from "@/components/ProjectDetails";
import Footer from "@/pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "@/components/ScrollTopButton"; // Import the ScrollToTopButton component

export default function Home() {
  const [nav, setNav] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    closeNav(); // Close mobile navigation after scrolling
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MobileNav
        nav={nav}
        closeNav={closeNav}
        scrollToRef={scrollToRef}
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        footerRef={footerRef}
      />
      <Nav
        openNav={openNav}
        scrollToRef={scrollToRef}
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        footerRef={footerRef}
      />
      <div className="relative z-[30]">
        <ScrollToTopButton /> {/* Add the scroll to top button here */}
        <div ref={heroRef}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={servicesRef}><Services /></div>
        {/* <div ref={skillsRef}><Skills /></div> */}
        <div ref={projectRef}><Project /></div>
        <div ref={projectRef}><ProjectDetails /></div>
        <div ref={footerRef}><Footer /></div>
      </div>

    </div>
  );
}
