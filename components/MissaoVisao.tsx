import type { ComponentType } from "react";

type Card = {
  rotulo: string;
  titulo: string;
  texto: string;
  Icone: ComponentType<{ className?: string }>;
  estilo: {
    card: string;
    brilho: string; // mancha de luz desfocada no canto
    etiqueta: string;
    marcaDagua: string; // ícone grande e transparente ao fundo
    texto: string;
  };
};

// Cards de Missão e Foco nas cores da paleta (marinho e dourado), com visual
// mais leve: título sem serifa, rótulo em etiqueta, brilho e ícone de fundo.
const cards: Card[] = [
  {
    rotulo: "Nossa missão",
    titulo: "Crescer junto com nossos parceiros",
    texto:
      "Entregar trabalhos de excelência com competência, honestidade e integridade. Queremos crescer junto com os nossos parceiros. Somos uma empresa ambiciosa à procura de desafios para serem superados.",
    Icone: IconeAlvo,
    estilo: {
      card: "bg-[#002B6B] text-white",
      brilho: "bg-[#0046A6]",
      etiqueta: "bg-white/10 border-white/15 text-[#E9C46A]",
      marcaDagua: "text-white/[0.06]",
      texto: "text-white/80",
    },
  },
  {
    rotulo: "Nosso foco",
    titulo: "Excelência com ética e compromisso",
    texto:
      "Entregar resultados de excelência com ética, competência e integridade. Queremos parceiros através de um trabalho de excelência e compromissado com as suas necessidades.",
    Icone: IconeOlho,
    estilo: {
      card: "bg-linear-to-br from-[#C89B3C] via-[#E9C46A] to-[#C89B3C] text-[#002B6B]",
      brilho: "bg-white/60",
      etiqueta: "bg-white/40 border-[#002B6B]/15 text-[#002B6B]",
      marcaDagua: "text-[#002B6B]/[0.08]",
      texto: "text-[#002B6B]/85",
    },
  },
];

export default function MissaoVisao() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14">
      <div className="grid gap-3 md:grid-cols-2">
        {cards.map(({ rotulo, titulo, texto, Icone, estilo }) => (
          <article
            key={rotulo}
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${estilo.card}`}
          >
            {/* Animações contínuas enquanto o mouse está no card: definidas como pausadas
                (globals.css) e o hover força rodar (o ! vence o shorthand do animate-*);
                ao sair param onde estão, sem "pular" de volta */}
            {/* Brilho desfocado no canto, "respira" no hover */}
            <span
              aria-hidden="true"
              className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-60 motion-safe:animate-respirar group-hover:[animation-play-state:running]! ${estilo.brilho}`}
            />
            {/* Ícone grande ao fundo, gira devagar no hover */}
            <Icone
              className={`absolute -bottom-10 -right-10 h-56 w-56 transition-[scale] duration-700 group-hover:scale-110 motion-safe:animate-girar-lento group-hover:[animation-play-state:running]! ${estilo.marcaDagua}`}
            />

            <span
              className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${estilo.etiqueta}`}
            >
              <Icone className="h-4 w-4" />
              {rotulo}
            </span>
            <h3 className="relative text-2xl md:text-3xl font-semibold tracking-tight mt-6">
              {titulo}
            </h3>
            <p
              className={`relative mt-4 text-base md:text-lg leading-relaxed lg:text-justify hyphens-auto ${estilo.texto}`}
            >
              {texto}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function IconeAlvo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconeOlho({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
