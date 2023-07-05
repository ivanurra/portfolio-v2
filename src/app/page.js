"use client";

import { Footer } from "../../components";
import { About, Hero, Experience, Projects } from "../../modules";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="md:w-2/4 md:h-screen p-12 md:fixed left-0 top-0 xl:pl-80 2xl:pl-96">
        <Hero />
      </div>

      <div className="md:w-2/4 p-12 ml-auto xl:pr-80 2xl:pr-96">
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
