import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
