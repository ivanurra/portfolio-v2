import Head from "next/head";
import { Inter } from "next/font/google";
import { GTag } from "../../lib/gtag/GTag";
import { metadata } from "./metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.site_name} />
      </Head>
      <GTag />
      <body className={inter.className ? inter.className : "default-font"}>
        {children}
      </body>
    </>
  );
}
