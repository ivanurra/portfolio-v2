import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";
import { Header, Footer } from "../../components/";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
