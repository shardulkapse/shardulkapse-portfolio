"use client";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <div className="w-full lg:w-4/5 mx-auto px-12 pt-28" id="about">
      <Slide direction="left" triggerOnce>
        <h1 className="text-6xl lg:text-7xl text-center lg:text-left">
          Skills
        </h1>
      </Slide>
      <Fade delay={100} cascade triggerOnce>
        <ul className="lg:px-20 text-lg mt-20 max-w-5xl mx-auto text-left space-y-5">
          <li className="flex items-center space-x-2 tracking-widest">
            <span className="text-2xl">Frontend</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-5 text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <span> ReactJS, Next.js, Redux, Vanilla JS, JQuery</span>
          </li>
          <li className="flex items-center space-x-2 tracking-widest">
            <span className="text-2xl">Backend</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-5 text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <span> Node.js, Express.js, Deno, Django</span>
          </li>
          <li className="flex items-center space-x-2 tracking-widest">
            <span className="text-2xl">Databases</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-5 text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <span> Redis (upstash), MongoDB, Firebase, MYSQL</span>
          </li>
          <li className="flex items-center space-x-2 tracking-widest">
            <span className="text-2xl">Languages</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-5 text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <span> JavaScript, TypeScript, Python</span>
          </li>
        </ul>
      </Fade>
    </div>
  );
}

export default Skills;
