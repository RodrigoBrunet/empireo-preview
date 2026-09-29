import "../styles/globals.css"; // ajuste o caminho conforme sua estrutura
import type { ReactNode } from "react";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-[#0046A6]">
        <Header /> {/* Cabeçalho branco com logo branca destacada */}
        <main>{children}</main>
      </body>
    </html>
  );
}
