"use client";

import { Footer, Header, Navigation } from "../../components";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";
import ScrollArea from "react-scrollbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      {/* <Header /> */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-1 p-12 z-10">
          <Hero />
          <Navigation />
        </div>
        <div className="col-span-1 md:col-span-2 md:h-screen p-12 scrollable-column">
          <ScrollArea>
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
          </ScrollArea>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
