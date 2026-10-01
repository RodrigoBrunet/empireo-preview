import Link from "next/link";

const destaques: { valor: string; texto?: string }[] = [
  { valor: "25+", texto: "anos de experiência" },
  { valor: "Engenharia", texto: "mecânica" },
  { valor: "Segurança", texto: "serviços" },
];

// Hero sem foto: card azul com grade de "planta técnica", monograma "E" com a
// faixa dourada do logo, slogan, botões de ação e números em destaque.
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8">
      <div className="relative overflow-hidden bg-[#0046A6] text-white rounded-3xl p-8 md:p-12 lg:p-16">
        {/* Grade de planta técnica, sumindo da direita para a esquerda */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mask-[linear-gradient(to_left,black,transparent_85%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Monograma "E" em contorno + faixa dourada, como no logo */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2"
        >
          <span className="block font-display font-bold leading-none text-[22rem] lg:text-[26rem] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.18)]">
            E
          </span>
          <svg
            viewBox="0 0 400 160"
            className="absolute left-[-15%] top-[38%] w-[130%]"
          >
            <defs>
              <linearGradient id="faixa-dourada" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#B8862F" />
                <stop offset="0.5" stopColor="#E9C46A" />
                <stop offset="1" stopColor="#B8862F" />
              </linearGradient>
            </defs>
            <path
              d="M10 130 C 110 50, 290 20, 390 45 C 300 45, 150 75, 10 130 Z"
              fill="url(#faixa-dourada)"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-linear-to-r from-[#B8862F] via-[#E9C46A] to-[#B8862F]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#E9C46A]">
              ENGENHARIA &amp; SEGURANÇA
            </span>
          </div>

          <h1 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-5">
            Transformando desafios em soluções
          </h1>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/contact"
              className="bg-white text-[#0046A6] font-bold px-6 py-3 rounded-md transition duration-200 hover:bg-[#E9C46A] hover:scale-105"
            >
              Fale Conosco
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/70 text-white font-bold px-6 py-3 rounded-md transition duration-200 hover:bg-white/10 hover:border-white hover:scale-105"
            >
              Nossos serviços
            </Link>
          </div>
        </div>

        {/* Números em destaque */}
        <dl className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/15 max-w-3xl">
          {destaques.map((item) => (
            <div key={item.valor}>
              <dt className="font-display font-bold text-2xl md:text-3xl text-[#E9C46A]">
                {item.valor}
              </dt>
              {item.texto && (
                <dd className="text-sm text-white/80 mt-1">{item.texto}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
