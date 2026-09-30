import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Empireo Engenharia & Segurança",
  description: "Empireo Engenharia & Segurança — transformando desafios em soluções.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-[#0046A6] font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
