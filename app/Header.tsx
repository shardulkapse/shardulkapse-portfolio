"use client";
import { Slide } from "react-awesome-reveal";
function Header() {
  return (
    <div className="w-full lg:w-4/5 mx-auto flex justify-between items-center px-5 py-6 lg:p-12">
      <Slide direction="down">
        <a className="text-2xl lg:text-4xl font-bold" href="/">
          <span className="text-lime-500">sk</span>Folio
        </a>
      </Slide>
      <Slide direction="down">
        <a
          href="#contact"
          className="outline-none bg-zinc-900 px-6 py-2 rounded-full text-base lg:text-xl tracking-wide hover:bg-slate-900 hover:text-lime-500 duration-500 ease-in-out"
        >
          Let's Connect
        </a>
      </Slide>
    </div>
  );
}

export default Header;
