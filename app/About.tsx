"use client";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="w-full lg:w-4/5 mx-auto px-12 pt-28 pb-20" id="about">
      <Slide direction="left" triggerOnce>
        <h1 className="text-6xl lg:text-7xl text-center lg:text-left">
          About me
        </h1>
      </Slide>
      <Fade delay={500} triggerOnce>
        <p className="lg:px-20 text-lg mt-20 max-w-5xl mx-auto text-left">
          A creative problem solver motivated to combine the Art of Design with
          the Art of Programming. Having insights into Software Development and
          a solid technical background intending to extend my grasp in Software
          Development and looking to utilize my knowledge and skills in
          Technology and Innovation through excellent analytical and conceptual
          thinking that translates user needs, business objectives, and
          technology capabilities into innovative design.
        </p>
      </Fade>
    </div>
  );
}

export default About;
