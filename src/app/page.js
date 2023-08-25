"use client";

import { Footer } from "../../components";
import LanternCursor from "../../components/LanternCursor";
import { About, Hero, Experience, Projects } from "../../modules";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LanternCursor />
      <div className="md:w-2/4 md:h-screen p-10 md:fixed left-0 top-0 lg:pl-32 xl:pl-64 2xl:pl-96">
        <Hero />
      </div>

      <div className="md:w-2/4 p-10 ml-auto lg:pr-32 xl:pr-64 2xl:pr-96">
        <section id="section1">
          <About />
        </section>
        <section id="section2">
          <Experience />
        </section>
        <section id="section3">
          <Projects />
        </section>
        <Footer />
      </div>
    </div>
  );
}
