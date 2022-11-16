"use client";

import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-14 text-center">
      <Fade delay={300} triggerOnce>
        <Image src="/images.png" alt="hero" width={350} height={350} />
      </Fade>
      <Fade cascade delay={600} triggerOnce>
        <h2 className="text-6xl lg:text-8xl tracking-widest">Shardul Kapse</h2>
        <h3 className="text-lg tracking-widest mt-5">
          Full stack software developer
        </h3>
      </Fade>
      <Fade delay={1000} triggerOnce>
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mt-20 animate-bounce text-lime-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </Fade>
    </div>
  );
}

export default Hero;
