"use client";

import { ButtonCV, Credits, Navigation, SocialMedia } from "../../components";
import { About, Hero, Experience } from "../../modules";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1st Column */}
      <div className="md:w-2/4 md:h-screen p-12 md:fixed left-0 top-0 lg:pl-80">
        <Hero />
        <div className="overflow-y-auto">
          <Navigation />
          <ButtonCV />
          <SocialMedia />
        </div>
      </div>

      {/* 2nd Column */}
      <div className="md:w-2/4 p-12 ml-auto lg:pr-60">
        <section id="section1">
          <About />
        </section>
        <section id="section2">
          <Experience />
        </section>
        <Credits />
      </div>
    </div>
  );
}
