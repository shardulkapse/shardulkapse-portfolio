import React from "react";
import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Hero from "./Hero";
import Contact from "./Contact";

function page() {
  return (
    <div className="w-full min-h-screen bg-[#040608] text-white font-Cinzel scrollbar-hide">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default page;
