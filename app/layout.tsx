import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site, urlSite } from "@/lib/site";

// Serifada parecida com a tipografia do logo, usada nos títulos (classe font-display)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
});

// SEO: título/descrição da busca, endereço canônico e prévia ao compartilhar
// (WhatsApp, LinkedIn…). A imagem da prévia vem de app/opengraph-image.png
export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: site.titulo,
  description: site.descricao,
  alternates: { canonical: urlSite },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: urlSite,
    siteName: site.nome,
    title: site.titulo,
    description: site.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descricao,
  },
};

// Cor da barra do navegador no celular, no azul do logo
export const viewport: Viewport = {
  themeColor: "#0046A6",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={cinzel.variable} data-scroll-behavior="smooth">
      <body className="bg-[#F1EFEA] text-[#0046A6] font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
