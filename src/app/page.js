import { Footer, Header } from "../../components";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      {/* <Header /> */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-1 p-12">
          <Hero />
        </div>
        <div className="col-span-1 md:col-span-2">
          <div 
          className="md:overflow-y-auto md:h-screen p-12"
          >
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
      </div>
      <Footer />
    </main>
  );
}
