import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ivanurra.dev",
  description: "Ivan Urra - DevOps & Full Stack Web Developer",
  site_name: "Ivan Urra - DevOps & Full Stack Web Developer",
  url: "https://ivanurra.dev/",
  type: "website",
  image: "https://ivanurra.dev/mockup.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.site_name} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
