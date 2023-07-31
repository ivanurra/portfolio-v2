import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Ivan Urra - DevOps & Full Stack Web Developer",
  image: "https://ivanurra.dev/mockup.jpg",
  site_name: "Ivan Urra - DevOps & Full Stack Web Developer",
  title: "ivanurra.dev",
  type: "website",
  url: "https://ivanurra.dev/",
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
