"use client";

// import { Footer } from "@components/Footer";
// import { About } from "@modules/About/About";
// import { Hero } from "@modules/Hero/Hero";
// import { Experience } from "@modules/Experience/Experience";
// import { Projects } from "@modules/Projects/Projects";
import LanternCursor from "@components/LanternCursor";
import { UnderConstruction } from "@modules/UnderConstruction/UnderConstruction";

export default function Home() {
  return (
    <div
      // className="flex items-center justify-center min-h-screen"
      className="flex flex-col"
    >
      <LanternCursor />
      <UnderConstruction />
      {/* <div className="md:w-2/4 md:h-screen p-10 md:fixed left-0 top-0 lg:pl-32 xl:pl-64 2xl:pl-96">
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
      </div> */}
    </div>
  );
}
