import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const display = Archivo_Black({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: "400",
});

const body = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Collectividual",
  description:
    "A place where one person can become a whole team. Tools, labs, and formats for ideas that need structure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-[var(--bg)] text-[var(--text)] antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
