"use client";

import { Navigation } from "../../components";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";

export default function Home() {
  return (
    <div className="flex">
      {/* 1st Column */}
      <div className="w-1/4 h-screen p-12 fixed left-0 top-0">
        <Hero />
        <div className="overflow-y-auto">
          <Navigation />
        </div>
      </div>

      {/* 2nd Column */}
      <div className="w-3/4 p-12 ml-auto">
        <section id="section1">
          <About />
        </section>
        <section id="section2">
          <Jobs />
        </section>
        <section id="section3">
          <Portfolio />
        </section>
        <section id="section4">
          <Contact />
        </section>
      </div>
    </div>
  );
}
