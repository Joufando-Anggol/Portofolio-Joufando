import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import React, { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      {/* Hero */}
      <Hero />
    </div>
  )
}