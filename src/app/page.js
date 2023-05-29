import Image from "next/image";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Hero />
      <About />
      <Jobs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
