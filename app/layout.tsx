import "../styles/globals.css";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/Header";

// Serifada parecida com a tipografia do logo, usada nos títulos (classe font-display)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Empireo Engenharia & Segurança",
  description: "Empireo Engenharia & Segurança — transformando desafios em soluções.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={cinzel.variable} data-scroll-behavior="smooth">
      <body className="bg-[#F1EFEA] text-[#0046A6] font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
