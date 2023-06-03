import { Footer, Header } from "../../components";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <Header />
      <Hero />
      <About />
      <Jobs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
