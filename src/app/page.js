import { Footer, Header } from "../../components";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <Header />
      <Hero />
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
      <Footer />
    </main>
  );
}
