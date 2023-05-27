import Head from "next/head";
import Image from "next/image";
import { About, Contact, Hero, Jobs, Portfolio } from "../modules";
import { Footer, Navbar } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>ivanurra.dev</h1>
      <Navbar />
      <Hero />
      <About />
      <Jobs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
