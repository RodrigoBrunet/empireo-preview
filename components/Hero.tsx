import Image from "next/image";
// Foto gratuita do Pexels (licença livre para uso comercial): pexels.com/photo/2760241
import obra from "@/public/engenharia-industrial.jpg";

const destaques: { valor: string; texto?: string }[] = [
  { valor: "25+", texto: "anos de experiência" },
  { valor: "Engenharia", texto: "mecânica" },
  { valor: "Segurança", texto: "do trabalho" },
];

// Hero em dois cards (inspirado na Ambev): card azul com grade de "planta
// técnica", slogan, botões e destaques à esquerda; foto à direita.
// Lado a lado a partir de lg; os cantos de baixo virados um para o outro são retos.
export default function Hero() {
  return (
    // overflow-x-clip: durante a entrada lateral os cards ficam fora da tela por um
    // instante e não podem criar rolagem horizontal
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 overflow-x-clip">
      <div className="grid gap-3 lg:grid-cols-5">
        {/* Card azul */}
        <div className="relative overflow-hidden flex flex-col justify-between bg-[#0046A6] text-white rounded-3xl lg:rounded-br-none p-6 sm:p-8 md:p-12 lg:col-span-3 motion-safe:animate-slide-in-left motion-safe:[animation-delay:150ms]">
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

          {/* Conteúdo */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-linear-to-r from-[#B8862F] via-[#E9C46A] to-[#B8862F]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#E9C46A]">
                ENGENHARIA &amp; SEGURANÇA DO TRABALHO
              </span>
            </div>

            <h1 className="font-display font-bold uppercase text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight mt-5">
              Transformando desafios em soluções
            </h1>

            <div className="flex flex-wrap gap-3 mt-8">
              {/* <a> comuns: o Hero só existe na home, então o navegador rola sozinho
                  até #contato / #servicos (respeitando o scroll-mt), sem passar pelo router */}
              <a
                href="#contato"
                className="bg-white text-[#0046A6] font-bold px-6 py-3 rounded-md transition duration-200 hover:bg-[#E9C46A] hover:scale-105 active:scale-95"
              >
                Fale Conosco
              </a>
              <a
                href="#servicos"
                className="border-2 border-white/70 text-white font-bold px-6 py-3 rounded-md transition duration-200 active:scale-95 hover:bg-white/10 hover:border-white hover:scale-105"
              >
                Nossos serviços
              </a>
            </div>
          </div>

          {/* Números em destaque: cada item sempre em duas linhas (whitespace-nowrap).
              O tamanho da fonte acompanha a largura do card (@container + cqi) e as
              colunas seguem a largura do texto, para "anos de experiência" caber */}
          <dl className="@container relative grid grid-cols-1 sm:grid-cols-[auto_auto_auto] sm:justify-between gap-6 mt-12 pt-8 border-t border-white/15">
            {destaques.map((item) => (
              <div
                key={item.valor}
                className="text-center text-[#E9C46A] font-display font-bold whitespace-nowrap leading-snug text-[clamp(1rem,calc(100cqi/12),1.5rem)] sm:text-[clamp(1rem,calc((100cqi-3rem)/25),1.875rem)]"
              >
                <dt>{item.valor}</dt>
                {item.texto && <dd>{item.texto}</dd>}
              </div>
            ))}
          </dl>
        </div>

        {/* Card de foto (acompanha a altura do card azul) */}
        <div className="relative overflow-hidden rounded-3xl lg:rounded-bl-none aspect-4/3 sm:aspect-video lg:aspect-auto lg:col-span-2 motion-safe:animate-slide-in-right motion-safe:[animation-delay:300ms]">
          <Image
            src={obra}
            alt="Profissional com capacete e colete de segurança inspecionando um rotor de turbina industrial"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[30%_50%]"
            priority
            placeholder="blur"
          />

          {/* Camada azul + grade de planta técnica, no padrão do card azul */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#0046A6]/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 mask-[linear-gradient(to_right,black,transparent_85%)]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
