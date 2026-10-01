// Cards de Missão e Visão, em variações da paleta do logo:
// azul-marinho (mais escuro que o azul do hero) e dourado em degradê.
export default function MissaoVisao() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14">
      <div className="grid gap-3 md:grid-cols-2">
        {/* Missão — azul-marinho */}
        <article className="relative overflow-hidden bg-[#002B6B] text-white rounded-3xl p-8 md:p-12">
          <span
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[14px] border-white/5"
          />
          <IconeAlvo className="relative h-12 w-12 text-[#E9C46A]" />
          <p className="relative text-sm font-semibold tracking-[0.25em] text-[#E9C46A] mt-6">
            NOSSA MISSÃO
          </p>
          <h3 className="relative font-display font-bold text-2xl md:text-3xl mt-2">
            Crescer junto com nossos parceiros
          </h3>
          <span className="relative block h-0.5 w-16 bg-[#C89B3C] mt-5" />
          <p className="relative mt-5 text-base md:text-lg leading-relaxed text-white/85 text-justify hyphens-auto">
            Entregar trabalhos de excelência com competência, honestidade e
            integridade. Queremos crescer junto com os nossos parceiros. Somos
            uma empresa ambiciosa à procura de desafios para serem superados.
          </p>
        </article>

        {/* Visão — dourado */}
        <article className="relative overflow-hidden bg-linear-to-br from-[#C89B3C] via-[#E9C46A] to-[#C89B3C] text-[#002B6B] rounded-3xl p-8 md:p-12">
          <span
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[14px] border-white/20"
          />
          <IconeOlho className="relative h-12 w-12 text-[#002B6B]" />
          <p className="relative text-sm font-semibold tracking-[0.25em] text-[#002B6B]/80 mt-6">
            NOSSO FOCO
          </p>
          <h3 className="relative font-display font-bold text-2xl md:text-3xl mt-2">
            Excelência com ética e compromisso
          </h3>
          <span className="relative block h-0.5 w-16 bg-[#002B6B] mt-5" />
          <p className="relative mt-5 text-base md:text-lg leading-relaxed text-[#002B6B]/90 text-justify hyphens-auto">
            Entregar resultados de excelência com ética, competência e
            integridade. Queremos parceiros através de um trabalho de excelência
            e compromissado com as suas necessidades.
          </p>
        </article>
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
