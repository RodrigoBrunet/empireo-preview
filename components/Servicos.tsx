"use client";
import { useState, type ReactNode } from "react";

type Tema = "azul" | "marinho" | "dourado";

type Area = {
  titulo: string;
  tema: Tema;
  icone: ReactNode;
  itens: string[];
};

const areas: Area[] = [
  {
    titulo: "Treinamentos",
    tema: "azul",
    icone: <IconeCapelo />,
    itens: [
      "NR-12 — Segurança em Máquinas e Equipamentos",
      "Inventor Professional",
      "Inventor Nastran",
    ],
  },
  {
    titulo: "Projeto e Execução",
    tema: "marinho",
    icone: <IconeEsquadro />,
    itens: [
      "Sistemas de climatização, exaustão, ventilação e renovação de ar",
      "Pressurização de escadas",
      "Estruturas metálicas",
      "Máquinas, equipamentos e dispositivos sob demanda",
      "Redes de GLP e tubulações industriais",
    ],
  },
  {
    titulo: "Inspeções e Vistorias",
    tema: "dourado",
    icone: <IconePrancheta />,
    itens: [
      "NR-12",
      "Vasos de pressão e caldeiras",
      "Modernização de elevadores",
      "Rede de GLP",
      "Teste de estanqueidade",
      "Vida útil de máquinas e equipamentos",
    ],
  },
];

// Variações da paleta do logo, as mesmas usadas no hero e em Missão/Foco
const temas: Record<
  Tema,
  {
    card: string;
    destaque: string;
    divisor: string;
    chip: string;
    botao: string;
  }
> = {
  azul: {
    card: "bg-[#0046A6] text-white",
    destaque: "text-[#E9C46A]",
    divisor: "border-white/15",
    chip: "border-white/25 bg-white/10 text-white hover:bg-[#E9C46A] hover:border-[#E9C46A] hover:text-[#002B6B]",
    botao: "border-white/40",
  },
  marinho: {
    card: "bg-[#002B6B] text-white",
    destaque: "text-[#E9C46A]",
    divisor: "border-white/15",
    chip: "border-white/25 bg-white/10 text-white hover:bg-[#E9C46A] hover:border-[#E9C46A] hover:text-[#002B6B]",
    botao: "border-white/40",
  },
  dourado: {
    card: "bg-linear-to-br from-[#C89B3C] via-[#E9C46A] to-[#C89B3C] text-[#002B6B]",
    destaque: "text-[#002B6B]/80",
    divisor: "border-[#002B6B]/20",
    chip: "border-[#002B6B]/25 bg-white/30 text-[#002B6B] hover:bg-[#002B6B] hover:border-[#002B6B] hover:text-white",
    botao: "border-[#002B6B]/40",
  },
};

// Formato dos chips dos subtópicos; as cores vêm de temas[...].chip
const chipBase =
  "inline-flex rounded-full border px-3.5 py-1.5 text-sm leading-snug";

export default function Servicos() {
  return (
    // id="servicos" é o destino do atalho "Serviços" do header
    <section
      id="servicos"
      className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14 scroll-mt-26 md:scroll-mt-34"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
        <p className="text-sm font-semibold tracking-[0.25em] text-[#B8862F]">
          NOSSOS SERVIÇOS
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
          Como podemos ajudar
        </h2>
        <span className="block h-0.5 w-24 bg-[#C89B3C] mt-5 mx-auto" />
      </div>

      {/* items-start: abrir um card não estica os vizinhos */}
      <div className="grid gap-3 lg:grid-cols-3 items-start">
        {areas.map((area) => (
          <CardArea key={area.titulo} area={area} />
        ))}
      </div>
    </section>
  );
}

function CardArea({ area }: { area: Area }) {
  const [aberto, setAberto] = useState(false);
  const t = temas[area.tema];
  const idLista = `servicos-${area.tema}`;

  return (
    <article
      className={`rounded-3xl p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${t.card}`}
    >
      <button
        type="button"
        onClick={() => setAberto((prev) => !prev)}
        aria-expanded={aberto}
        aria-controls={idLista}
        className="w-full flex items-center gap-3 md:gap-5 text-left cursor-pointer"
      >
        <span className={`shrink-0 h-9 w-9 md:h-12 md:w-12 ${t.destaque}`}>{area.icone}</span>

        {/* lg:min-h-[2lh]: reserva 2 linhas para os cards fechados terem a mesma altura */}
        <span className="flex-1 min-w-0 flex items-center font-display font-bold text-xl md:text-2xl leading-tight lg:min-h-[2lh]">
          {area.titulo}
        </span>

        {/* "+" que gira e vira "×" ao abrir */}
        <span
          aria-hidden="true"
          className={`shrink-0 h-9 w-9 rounded-full border flex items-center justify-center transition-transform duration-300 ${t.botao} ${
            aberto ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {/* Expansão animada: grid-rows de 0fr para 1fr anima até a altura real do conteúdo */}
      <div
        id={idLista}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          aberto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* -mx-3 px-3 (e pb-3 no grid abaixo): folga para o chip crescer e fazer sombra no hover sem ser cortado */}
        <div className="overflow-hidden -mx-3 px-3" inert={!aberto}>
          {/* Lista real e, empilhadas na mesma célula, cópias invisíveis de todas as
              listas: a área fica com a altura da maior, então os cards abertos ficam
              do mesmo tamanho no desktop */}
          <div className={`grid mt-6 pt-6 pb-3 border-t ${t.divisor}`}>
            {areas.map((outra) => (
              <div
                key={outra.titulo}
                aria-hidden="true"
                className="invisible hidden lg:flex flex-wrap gap-2 col-start-1 row-start-1"
              >
                {outra.itens.map((item, i) => (
                  <span key={item + i} className={chipBase}>
                    {item}
                  </span>
                ))}
              </div>
            ))}

            <ul className="flex flex-wrap content-start gap-2 col-start-1 row-start-1">
              {area.itens.map((item, i) => (
                <li
                  key={item + i}
                  // Chips entram em cascata ao abrir
                  style={{
                    transitionDelay: aberto ? `${120 + i * 60}ms` : "0ms",
                  }}
                  className={`flex transition duration-300 ${
                    aberto
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95"
                  }`}
                >
                  {/* Hover num elemento interno, sem herdar o atraso da cascata */}
                  <span
                    className={`${chipBase} ${t.chip} transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

function IconeCapelo() {
  return (
    <Icone>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </Icone>
  );
}

function IconeEsquadro() {
  return (
    <Icone>
      <path d="M4 20V4l16 16H4z" />
      <path d="M8 16v-4l4 4H8z" />
      <path d="M4 8h2M4 12h2" />
    </Icone>
  );
}

function IconePrancheta() {
  return (
    <Icone>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M9 12l2 2 4-4" />
    </Icone>
  );
}
