// Card de apresentação da empresa, na identidade do logo (azul + dourado).
export default function Apresentacao() {
  return (
    // id="sobre" é o destino do atalho "Sobre nós" do header; scroll-mt desconta
    // a altura do header fixo para o card não ficar escondido atrás dele
    <section
      id="sobre"
      className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 scroll-mt-21 md:scroll-mt-28"
    >
      {/* Hover: o card sobe e a sombra cresce; o "E" do fundo e a linha do título
          reagem junto (group). O movimento fica em motion-safe */}
      <div className="group relative overflow-hidden bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-14 transition duration-500 hover:shadow-xl motion-safe:hover:-translate-y-1">
        {/* Faixa dourada no topo, como a linha do logo */}
        <span className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#B8862F] via-[#E9C46A] to-[#B8862F]" />

        {/* "E" decorativo ao fundo */}
        <span
          aria-hidden="true"
          className="hidden md:block pointer-events-none select-none absolute -right-6 -bottom-20 font-display font-bold text-[18rem] leading-none text-[#0046A6]/5 transition duration-500 group-hover:text-[#0046A6]/10 motion-safe:group-hover:-translate-x-2 motion-safe:group-hover:-translate-y-3"
        >
          E
        </span>

        <div className="relative">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#B8862F]">
            SOBRE NÓS
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Somos a Empireo
          </h2>
          <span className="block h-0.5 w-24 bg-[#C89B3C] mt-5 transition-[width] duration-500 motion-safe:group-hover:w-40" />

          {/* hyphens-auto evita buracos grandes entre palavras no texto justificado (usa o lang="pt-BR") */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-gray-700 sm:text-justify hyphens-auto">
            <p>
              A Empireo é uma empresa com uma equipe de profissionais com mais
              de 25 anos de experiência na área de engenharia mecânica e
              segurança do trabalho. Reunimos um portfólio vasto e em constante
              evolução e aperfeiçoamento, capaz de atender cada demanda com as
              suas especificidades, e entregando os resultados que as pessoas
              desejam com excelência e qualidade.
            </p>
            <p>
              A Empireo sonha grande! A longo prazo! Sem atalhos e com
              responsabilidade! Sempre priorizando soluções simples e resultados
              excepcionais! Temos a ambição de encarar novos desafios e
              conquistar novas parcerias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
