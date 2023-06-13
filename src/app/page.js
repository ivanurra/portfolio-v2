"use client";

import { ButtonCV, Credits, Navigation, SocialMedia } from "../../components";

import { About, Contact, Hero, Experience, Portfolio } from "../../modules";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* 1st Column */}
      <div className="md:w-2/4 md:h-screen p-12 md:fixed left-0 top-0 md:pl-80">
        <Hero />
        <div className="overflow-y-auto">
          <Navigation />
          <ButtonCV />
          <SocialMedia />
        </div>
      </div>

      {/* 2nd Column */}
      <div className="md:w-2/4 p-12 ml-auto md:pr-60">
        <section id="section1">
          <About />
        </section>
        <section id="section2">
          <Experience />
        </section>
        <section id="section3">
          <Portfolio />
        </section>
        <section id="section4">
          <Contact />
        </section>
        <Credits />
      </div>
    </div>
  );
}
