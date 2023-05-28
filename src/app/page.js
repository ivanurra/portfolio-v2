import Image from "next/image";
import { About, Contact, Hero, Jobs, Portfolio } from "../../modules";
import { Footer } from "../../components";
import NavBar from "../../components/NavBar/NavBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <Hero />
      <About />
      <Jobs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
