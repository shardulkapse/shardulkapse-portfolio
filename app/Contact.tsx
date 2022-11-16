"use client";
import React from "react";
import { Slide, Fade, Zoom } from "react-awesome-reveal";

function Contact() {
  return (
    <div
      className="w-full pt-40 pb-10 flex flex-col justify-center items-center mt-20 text-center"
      id="contact"
    >
      <Fade>
        <p className="mb-8 text-lg lg:text-2xl tracking-widest">
          Still confused, then
        </p>
      </Fade>
      <Zoom>
        <a
          className="text-5xl lg:text-9xl font-bold hover:text-lime-600 tracking-widest duration-500 ease-in-out"
          href="mailto: shardulkapse29@gmail.com"
        >
          Let's Talk
        </a>
      </Zoom>
      <Fade>
        <p className="mt-8">
          or send an email to{" "}
          <a
            href="mailto: shardulkapse29@gmail.com"
            className="underline underline-offset-4 hover:text-lime-500 duration-500 ease-in-out"
          >
            shardulkapse29@gmail.com
          </a>
        </p>
      </Fade>
      <Fade delay={500}>
        <p className="mt-40 text-sm lg:text-base tracking-widest">
          created using Next.js and Tailwindcss
        </p>
      </Fade>
    </div>
  );
}

export default Contact;
