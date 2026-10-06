import Image, { type StaticImageData } from "next/image";
import bancoDoBrasil from "@/public/parceiros/banco-do-brasil.png";
import caixa from "@/public/parceiros/caixa.png";
import caoaChery from "@/public/parceiros/caoa-chery.png";
import icoMetais from "@/public/parceiros/ico-metais.png";
import perfinasa from "@/public/parceiros/perfinasa.png";
import senai from "@/public/parceiros/senai.png";
import treGo from "@/public/parceiros/tre-go.png";
import ufg from "@/public/parceiros/ufg.png";
import unops from "@/public/parceiros/unops.png";

type Parceiro = {
  nome: string;
  // Logo real: importar de /public (SVG ou PNG com fundo transparente) e colocar aqui
  logo?: StaticImageData;
  // Fundo do card quando o logo vem com fundo próprio (ex.: preto), para não virar um retângulo no card branco
  fundo?: string;
};

// Parceiros da Empireo (confirmar com cada um a autorização de uso do logo)
const parceiros: Parceiro[] = [
  { nome: "CAOA Chery", logo: caoaChery, fundo: "bg-black" },
  // Logo oficial com fundo transparente (Wikimedia Commons)
  { nome: "UNOPS", logo: unops },
  // Logo oficial com fundo transparente (Wikimedia Commons)
  { nome: "TRE-GO", logo: treGo },
  // Logo oficial (Wikimedia Commons, SVG convertido para PNG)
  { nome: "Banco do Brasil", logo: bancoDoBrasil },
  // Logo oficial (Wikimedia Commons, SVG convertido para PNG)
  { nome: "UFG", logo: ufg },
  // Logo do site oficial (icometais.com.br)
  { nome: "ICO Metais", logo: icoMetais },
  // Logo do site oficial (perfinasa.com.br), versão comemorativa de 64 anos
  { nome: "Perfinasa Perfilados", logo: perfinasa },
  // Logo oficial de 2024 (Wikimedia Commons)
  { nome: "SENAI", logo: senai },
  // Logo oficial (Wikimedia Commons, SVG convertido para PNG)
  { nome: "Caixa Econômica Federal", logo: caixa },
];

// Faixa de logos entre Serviços e Contato (prova social antes do formulário).
// Logos sempre nas cores originais das marcas
export default function Parceiros() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14">
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
        <p className="text-sm font-semibold tracking-[0.25em] text-[#B8862F]">PARCEIROS</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
          Empresas que confiam na Empireo
        </h2>
        <span className="block h-0.5 w-24 bg-[#C89B3C] mt-5 mx-auto" />
      </div>

      {/* 9 parceiros: 3 linhas de 3 a partir do tablet; no celular, 2 por linha
          e o último ocupa a linha inteira, para não sobrar um card sozinho num canto */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {parceiros.map((parceiro, i) => (
          <li
            key={parceiro.nome}
            // Cascata ao rolar até a seção (Revelar em page.tsx marca data-revelar):
            // escondido enquanto "oculto", e cada logo sobe 70ms depois do anterior.
            // active: no toque o card afunda de leve (no celular não há hover)
            style={{ animationDelay: `${i * 70}ms` }}
            className={`group h-24 md:h-28 last:col-span-2 md:last:col-span-1 rounded-2xl ${parceiro.fundo ?? "bg-white"} shadow-sm flex items-center justify-center px-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.97]
              group-data-[revelar=oculto]/revelar:motion-safe:opacity-0 group-data-[revelar=visivel]/revelar:motion-safe:animate-fade-up`}
          >
            {parceiro.logo ? (
              // Limite de altura E de largura: logos largos e altos ficam com peso visual
              // parecido; o contêiner também nunca passa da largura do card
              <span className="flex justify-center w-full max-w-35 md:max-w-55">
                <Image
                  src={parceiro.logo}
                  alt={parceiro.nome}
                  className="max-h-14 md:max-h-18 w-auto max-w-full object-contain"
                />
              </span>
            ) : (
              <LogoProvisorio nome={parceiro.nome} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

// Marca genérica no lugar do logo real: símbolo + nome, em cinza que fica azul no hover
function LogoProvisorio({ nome }: { nome: string }) {
  return (
    <span className="flex items-center gap-2 text-gray-400 transition duration-300 group-hover:text-[#0046A6]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="h-7 w-7 shrink-0">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
      <span className="font-display font-bold text-sm md:text-base whitespace-nowrap">{nome}</span>
    </span>
  );
}
