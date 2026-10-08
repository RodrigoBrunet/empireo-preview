"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { linkWhatsApp } from "@/lib/contato";
import Revelar from "@/components/Revelar";

type Tema = "azul" | "marinho" | "dourado";

type Item = {
  nome: string;
  // TODO: textos de rascunho — revisar com a Empireo
  descricao: string;
};

type Area = {
  titulo: string;
  tema: Tema;
  icone: ReactNode;
  itens: Item[];
};

// Exportada: o formulário de Contato usa os títulos como opções de serviço
export const areas: Area[] = [
  {
    titulo: "Treinamentos",
    tema: "azul",
    icone: <IconeCapelo />,
    itens: [
      {
        nome: "NR-12 — Segurança em Máquinas e Equipamentos",
        descricao: `A Empireo Engenharia e Segurança do Trabalho oferece treinamentos para a sua
          empresa da normativa regulamentadora NR-12 do Ministério do Trabalho e Emprego,
          adequando a sua empresa às exigências das legislações vigentes, e impactando em um
          ambiente de trabalho seguro e saudável com resultados na qualidade e produtividade dos
          cooperadores da sua empresa. Os treinamentos atendem à normativa mencionada e são
          planejados para a realidade da sua empresa. Os profissionais da Empireo tem
          experiência e são capacitados para a emissão de certificação para atender aos requisitos
          exigidos pelo Ministério do Trabalho e Emprego.
          Para maiores informações sobre o treinamento da NR-12 ofertado pela Empireo favor
          entrar em contato com o suporte técnico.`,
      },
      {
        nome: "Inventor Professional e Inventor Nastran",
        descricao: `A Empireo Engenharia e Segurança do Trabalho oferece treinamento nos softwares Autodesk Inventor Professional 2026 e Inventor Nastran 2026 para estudantes e profissionais que atuam na área de projetos mecânicos e estruturais. A Empireo tem planejamentos de cursos nos softwares mencionados para atender usuários desde o nível básico até o nível avançado, contemplando desde: a modelagem de elementos de máquinas e estruturas metálicas; montagem de conjuntos mecânicos e estruturas metálicas; simulação de funcionamento de conjuntos mecânicos; simulação e análise numérica de deformações de elementos e estruturas sob aplicação de forças: lineares e não-lineares; estáticas e dinâmicas; uniaxiais e multiaxiais; além do gerenciamento, apresentação e formalização de projetos executivos usando os softwares.

        O treinamento ofertado pela empresa Empireo na área de projetos mecânicos é voltado para o software Autodesk Inventor por alguns motivos. Primeiramente o Inventor é um software poderoso devido à modelagem paramétrica, que permite alterar dimensões e projetos inteiros de forma automática. Além disso, ele oferece ferramentas avançadas de simulação, testes de resistência mecânica e funções de automação que dinamizam o desenvolvimento de elementos de máquinas, conjuntos mecânicos complexos e estruturas metálicas. Várias empresas de grande porte no mundo, em diversos campos de atuação, utilizam o Inventor, tais como a: Boieng, Airbus, Siemens, entre outras.

        Para profissionais experientes no uso do Inventor, a Empireo oferece treinamento avançado em estruturas metálicas e conjuntos mecânicos complexos com foco em simulação e análise numérica sob condições de falhas complexas, tais como: fadiga, fluência, impacto, desgaste superficial e corrosão, entre outras. Para essa abordagem mais profunda a Empireo faz uso do software Autodesk Inventor Nastran 2026.

        O treinamento no Autodesk Inventor 2026 oferecido pela Empireo, não se limita à aprendizagem dos comandos do software, mas também o aluno é estimulado à concepção de projetos tendo em vista cenários reais no cotidiano profissional.

        O responsável pelo treinamento no software Autodesk Inventor Professional 2026 e Inventor Nastran 2026 é licenciado pela Autodesk para a capacitação de profissionais. Tem mais de 25 anos de experiência na área de projetos mecânicos. É graduado em engenharia mecânica, e mestre e doutor na área de engenharia mecânica com foco em: tribologia; tratamento superficial; fenômenos de desgaste; fadiga de alto ciclo; plasticidade de corpos; fadiga multiaxial e fadiga por fretting em materiais e estruturas.

        Conforme mencionado, a Empireo elabora planejamentos de cursos do Inventor Professional 2026 e do Inventor Nastran 2026 de acordo com o interesse e necessidade do usuário. Portanto, para maiores informações favor entrar em contato com o suporte técnico dos treinamentos.`,
      },
    ],
  },
  {
    titulo: "Projeto e Execução",
    tema: "marinho",
    icone: <IconeEsquadro />,
    itens: [
      {
        nome: "Sistemas de climatização, exaustão, ventilação e renovação de ar",
        descricao: `A Empireo tem vasta experiência com projetos e execução de sistemas de climatização,
refrigeração, exaustão, ventilação e renovação de ar de médio e grande porte. Sistemas de
climatização de centrais, tais como: Self-contained, chiller a ar, chiller a água, entre outros. Além de
projetos e execuções de sistemas VRF (Fluxo de Refrigerante Variável no tempo).
A Empireo também elabora projetos e executa sistemas de exaustão e ventilação de pequeno e
grande porte, para ambientes como: soldagem; cozinhas comerciais e industriais; sistemas de
ventilação para conforto térmico, e controle de proliferação de vírus, bactérias e aerossóis nocivos
em alguns ambientes de fábricas e galpões. Também elaboramos e executamos sistemas de exaustão
para laboratórios que exigem constante eliminação de vapores químicos, odores e substâncias
tóxicas de forma segura.
A Empireo desenvolve sistemas de renovação de ar exigidos por normativas para quaisquer
ambientes. Com destaque para ambientes específicos, e que exigem esterilização, tais como: salas
cirúrgicas, laboratórios farmacêuticos, clínicas, salas odontológicas, Unidades de Terapia Intensiva
(UTI), entre outros ambientes e circunstâncias.
Os projetos são elaborados de forma personalizada, e seguindo as normativas regulamentadoras
vigentes. Todos os projetos são executivos e contemplam: projeto base, cálculo de perda de carga,
cálculo de dimensionamento de dutos (caso de centrais, retorno e sistemas de renovação de ar),
cálculo de tubulações e outros acessórios (caso de sistema de chiller a água), memorial descritivo,
projeto gráfico, apresentação, e planilha orçamentária.
Para maiores informações sobre os nossos projetos e obras executadas dos sistemas
mencionados acima favor entrar em contato com o suporte técnico da Empireo.`,
      },
      {
        nome: "Pressurização de escadas",
        descricao: `A Empireo possui um corpo técnico competente para elaborar e executar projetos de pressurização
de escada, e sempre seguindo as orientações da normativa ABNT NBR-14880, além das instruções
(normas técnicas) do Corpo de Bombeiros, de forma a garantir um sistema seguro e eficiente.
Os projetos de pressurização de escada são elaborados de forma personalizada, e seguindo as
normativas regulamentadoras vigentes. Os projetos são executivos e contemplam: projeto base,
cálculo de dimensionamento do sistema, memorial descritivo, apresentação, e planilha
orçamentária.
Para maiores informações sobre os nossos projetos e obras executadas de sistemas de
pressurização de escada favor entrar em contato com o suporte técnico da Empireo.`,
      },
      {
        nome: "Estruturas metálicas",
        descricao: `A Empireo Engenharia e Segurança do Trabalho Ltda. possui profissional técnico com vasta
experiência técnica na área de projetos de estruturas metálicas. Todos os projetos são desenvolvidos
com foco em segurança, qualidade e baixo custo de execução. Os projetos são desenvolvidos
utilizando o software Inventor Professional, em conjunto com o software Inventor Nastran, de
forma a simular carregamentos a que a estrutura metálica será submetida em cenário real, e analisar
numericamente o comportamento da estrutura metálica sob condições diversas. A experiência de
mais de 25 anos do corpo técnico da Empireo com projetos de estruturas metálicas, aliada com uma
formação acadêmica em nível de doutorado na área de engenharia mecânica, com foco em:
tribologia; tratamento superficial; fenômenos de desgaste; fadiga de alto ciclo; plasticidade de
corpos; fadiga multiaxial e fadiga por fretting; proporcionam uma qualidade, segurança e relativo
baixo custo nos projetos executados de estruturas metálicas. As normativas técnicas ABNT NBR-
8800, NBR-6123, NBR-6120, NBR-14762, NBR-14323, NBR-16239, NBR-5419, NBR-8681, e
outras normativas afins são seguidas de forma rigorosa pela Empireo.
Os projetos são elaborados de forma personalizada. Todos os projetos são executivos e contemplam:
projeto base, cálculos de dimensionamento, relatórios de simulação de carregamento e análise
numérica, projeto gráfico, apresentação, e planilha orçamentária.
Para maiores informações sobre os nossos projetos e obras executadas de estruturas
metálicas favor entrar em contato com o suporte técnico da Empireo.`,
      },
      {
        nome: "Máquinas, equipamentos e dispositivos sob demanda",
        descricao: `O projeto de máquinas, equipamentos e dispositivos sob demanda é o destaque de serviços
ofertados pela Empireo. Quando se trata de um projeto original o cliente ganha várias vantagens,
dentre elas pode-se destacar: soluções integradas ao processo produtivo da sua empresa, ou seja,
sem alterar o balanceamento da “Curva V” da linha de produção. Além disso, o cliente tem a
oportunidade de apresentar à Empireo os objetivos desejados pela máquina/equipamento/dispositivo
a ser projetada, garantindo o pagamento das funcionalidades que realmente irá contribuir no seu
processo produtivo. Importante ressaltar a questão do custo financeiro envolvido: um projeto de
máquina/equipamento/dispositivo sob demanda pode acarretar em um custo inicial mais elevado em
comparação à uma máquina disponível no mercado. Isso se deve ao fato da elaboração de um
projeto executivo direcionado para a necessidade específica do processo produtivo do cliente, e da
produção e montagem das peças específicas para a máquina/equipamento/dispositivo em
fabricação. No entanto, vários parâmetros devem ser analisados pelo cliente! Primeiro, existe uma
máquina pronta no mercado, e que atende prontamente às exigências do processo produtivo? O
preço da máquina e os custos diretos e indiretos são mais vantajosos em relação à uma máquina
projetada sob demanda? Outro, consideremos o cenário de que não existe a máquina pretendida no
Brasil, mas há em outro país, e atende as exigências do processo produtivo! Novamente...o preço da
máquina, e os custos diretos e indiretos são mais vantajosos em relação à uma máquina projetada
sob demanda. Além disso, essa máquina importada está adequada à normativa NR-12 (Segurança
no trabalho em máquinas e equipamentos)?
Experiências em cenário real da Empireo com parceiros demonstraram que esse custo inicial “se
paga” através da redução de custos ligados à perda de produtos e insumos na linha de produção, e
baixo custo de manutenção da máquina/equipamento/dispositivo projetado sob demanda.
Também há situações em que a demanda por parte do cliente tem por objetivo elaborar
modificações nas máquinas já existentes na linha de produção com o objetivo de “balancear” a linha
de produção, melhorar o desempenho, eliminar gargalos e reduzir perdas de produto e/ou insumos.
Dentro dessa condição pode se encaixar o retrofit das máquinas/equipamentos, que a Empireo
também realiza.
A equipe técnica responsável na área de projetos mecânicos tem mais de 25 anos de
experiência. É formada por profissionais graduados em engenharia mecânica, e doutores
na área de engenharia mecânica. Essa experiência e formação acadêmica proporcionam:
segurança (todas as máquinas/equipamentos/dispositivos da Empireo são produzidos em
concordância com a normativa NR-12, e outras normativas afins); qualidade; ética; produtividade;

redução de perda de produtos e insumos do processo produtivo, e relativo baixo custo dos projetos
executados.
Para maiores informações sobre os nossos projetos de máquinas, equipamentos e
dispositivos favor entrar em contato com o suporte técnico da Empireo.`,
      },
      {
        nome: "Redes de GLP e tubulações industriais",
        descricao: `A Empireo tem experiência na elaboração e execução de projetos de redes de GLP e tubulações
industriais. Pessoas jurídicas de direito público e privado relevantes, e parceiros da Empireo,
tiveram as demandas atendidas de forma satisfatória em projetos e execuções de redes de GLP e
tubulações industriais. A Empireo possui Certidões de Acervo Técnico (CAT) emitidos via CREA-
GO, atestando a experiência da empresa, e a satisfação dos clientes na realização de serviços de
redes de GLP e tubulações industriais.
Todos os trabalhos são realizados com a capacidade e competência características da Empireo, e
sempre em concordância com as orientações das normativas vigentes, tais como: ABNT NBR-
15526, NBR-13523, NBR-13103, NBR-15358, além da Norma Técnica do Corpo de Bombeiros
local.
Os projetos são executivos e contemplam: projeto base, cálculo de dimensionamento do sistema de
rede, projeto do abrigo/tanque estacionário, definição do tipo de abastecimento, memorial
descritivo, apresentação, e planilha orçamentária.
Para maiores informações sobre os nossos projetos e obras executadas de redes de GLP
e tubulações industriais favor entrar em contato com o suporte técnico da Empireo.`,
      },
    ],
  },
  {
    titulo: "Inspeções e Vistorias",
    tema: "dourado",
    icone: <IconePrancheta />,
    itens: [
      {
        nome: "NR-12",
        descricao: `A inspeção em máquinas e equipamentos segundo as diretrizes da normativa NR-12 é de
fundamental importância para garantir a segurança dos trabalhadores, prevenindo acidentes
de trabalho. Acidentes de trabalho causados pela não conformidade das máquinas e
equipamentos à NR-12 geram sérios problemas financeiros para as empresas incluindo:
despesas médicas; pagamentos de multas aplicadas por órgãos fiscalizadores (ex.: Justiça do
Trabalho); indenizações. Há também outros graves danos como: eventual interrupção do
processo produtivo da empresa; desgaste da sua imagem perante o mercado; além do estado
físico-psicológico e emocional do tralhador e sua família abalados após o acidente de
trabalho.
A Empireo tem mais de 15 anos de experiência com vistorias em máquinas e equipamentos
segundo as diretrizes da NR-12. A metodologia utilizada pela Empireo é a realização de
uma vistoria com emissão de um laudo inicial, indicando pontos em não concordância com a
NR-12, e orientando sobre os procedimentos a serem feitos para a adequação das máquinas
e equipamentos sob vistoria. Após a adequação das máquinas e equipamentos, o profissional
da Empireo realiza uma segunda vistoria para atestar se as máquinas e equipamentos estão
em concordância com os parâmetros abordados na normativa NR-12. Todo o procedimento
é feito em perfeita consonância com os órgãos fiscalizadores, dentre eles o CREA através da
emissão da ART (Anotação de Responsabilidade Técnica), que dá validade jurídica aos
laudos emitidos.
Para mais informações sobre vistorias em máquinas e equipamentos segundo a
normativa NR-12 realizadas pela Empireo, favor entrar em contato com o nosso
suporte técnico.`,
      },
      {
        nome: "Vasos de pressão e caldeiras",
        descricao: `A Empireo tem vasta experiência em inspeções e vistorias em vasos de pressão e caldeiras,
em obediência à normativa ABNT NBR-13, e outras normativas afins. As inspeções e
vistorias são realizadas nas periodicidades previstas na normativa, e também em
circunstâncias que eventualmente possuam comprometer a integridade estrutural do vaso de
pressão e/ou caldeira. A Empireo gera toda a documentação exigida pela normativa, tais
como: prontuário do equipamento; registro da vistoria/inspeção; relatório da
vistoria/inspeção; projeto do equipamento e instalação do mesmo; e certificação de
calibragem dos acessórios de segurança do equipamento.
Toda a documentação exigida pela normativa NR-13, e outras afins, gerada na vistoria do
vaso de pressão e/ou caldeira tem validade jurídica via emissão de Anotação de
Responsabilidade Técnica (ART) junto ao CREA.
Para conhecer com maior detalhes os nossos serviços de vistoria e inspeção em vasos de
pressão e caldeiras, favor entrar em contato com o nosso suporte técnico.`,
      },
      {
        nome: "Modernização de elevadores",
        descricao: `A Empireo realiza trabalho de fiscalização de modernização de elevadores para empresas
públicas e privadas. A empresa já fiscalizou serviços de modernização de elevadores para
órgãos públicos importantes, tais como: Tribunal Regional Eleitoral do Estado de Goiás
(TRE-GO), e Núcleo Estadual do Ministério da Saúde em Goiás.
A modernização de elevadores através da substituição de sistemas antigos por tecnologias
modernas, proporciona a redução tanto no consumo de energia elétrica quanto nas falhas
frequentes do equipamento. Além disso, há outros pontos importantes para serem
considerados, tais como: menor tempo de espera para os usuários do equipamento, e a
adequação às normas de acessibilidade vigentes no Brasil.
Para maiores detalhes do serviço de fiscalização de modernização de elevadores realizado
pela Empireo, favor entrar em contato com o suporte técnico.`,
      },
      {
        nome: "Rede de GLP",
        descricao: `Inspeções periódicas em redes de GLP são de fundamental importância para
prevenir riscos de vazamento, explosões e acidentes. A Empireo tem
clientes/parceiros importantes que demandam inspeções em redes de GLP em
suas várias instalações, sempre orientada pelas normativas vigentes da ABNT,
instrução técnica, e norma técnica do Corpo de Bombeiros. A Empireo realiza a
inspeção na rede de GLP, e emite toda a documentação exigida pelas normativas,
deixando a sua empresa segura e regularizada com os órgãos fiscalizadores.
Para mais informações sobre os nossos trabalhos de inspeções em redes de GLP,
favor entrar em contato com o nosso suporte técnico.`,
      },
      {
        nome: "Teste de estanqueidade",
        descricao: `Os testes de estanqueidade tem por objetivo verificar se há vazamentos em tubulações e seus
acessórios, mangueiras, tanques de armazenamento, dentre outros equipamentos. Há várias
normativas vigentes que regulam os testes de estanqueidade, variando na abordagem de
acordo com o fluido, instalações e aplicações.
A Empireo tem um corpo técnico preparado, e os dispositivos e aparelhos para mensurar,
verificar e atestar a integridade de objeto de realização do teste de estanqueidade, e para
todas as abordagens das normativas vigentes.
Entre em contato com o nosso suporte técnico para conhecer os nossos trabalhos de teste de
estanqueidade.`,
      },
      {
        nome: "Vida útil e bom funcionamento de máquinas e equipamentos",
        descricao: `A Empireo possui profissionais experientes na vistoria de máquinas e equipamentos para
atestar o bom funcionamento e/ou a vida útil das mesmas. Nos laudos técnicos os
profissionais da Empireo vistoriam a segurança da máquina/equipamento, avaliando o grau
de risco a que o trabalhador está exposto. Também é realizada manutenção preditiva para
detectar eventuais anomalias em componentes mecânicos, que podem evoluir para futuras
falhas. Além disso, é avaliado o desempenho da máquina e/ou equipamento, e é feita uma
estimativa da sua durabilidade técnica. Após a realização da vistoria, a Empireo elabora
documentação técnica, que é devidamente anotada no CREA para dar validade jurídica.
Esse trabalho de vistoria de vida útil e bom funcionamento de máquinas e equipamentos são
de extrema importância em: processos de compra de máquinas usadas; empresas de locação
de máquinas e equipamentos; seguradoras; bancos e instituições financiadoras; além de
perícias para o poder judiciário.
Entre em contato com o nosso suporte técnico para conhecer com maiores detalhes os
nossos trabalhos de vistoria de vida útil e bom funcionamento de máquinas e equipamentos.`,
      },
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
    cta: string;
  }
> = {
  azul: {
    card: "bg-[#0046A6] text-white",
    destaque: "text-[#E9C46A]",
    divisor: "border-white/15",
    chip: "border-white/25 bg-white/10 text-white hover:bg-[#E9C46A] hover:border-[#E9C46A] hover:text-[#002B6B]",
    botao: "border-white/40",
    cta: "bg-[#E9C46A] text-[#002B6B] hover:bg-white",
  },
  marinho: {
    card: "bg-[#002B6B] text-white",
    destaque: "text-[#E9C46A]",
    divisor: "border-white/15",
    chip: "border-white/25 bg-white/10 text-white hover:bg-[#E9C46A] hover:border-[#E9C46A] hover:text-[#002B6B]",
    botao: "border-white/40",
    cta: "bg-[#E9C46A] text-[#002B6B] hover:bg-white",
  },
  dourado: {
    card: "bg-linear-to-br from-[#C89B3C] via-[#E9C46A] to-[#C89B3C] text-[#002B6B]",
    destaque: "text-[#002B6B]/80",
    divisor: "border-[#002B6B]/20",
    chip: "border-[#002B6B]/25 bg-white/30 text-[#002B6B] hover:bg-[#002B6B] hover:border-[#002B6B] hover:text-white",
    botao: "border-[#002B6B]/40",
    cta: "bg-[#002B6B] text-white hover:bg-[#0046A6]",
  },
};

// Formato dos chips dos subtópicos; as cores vêm de temas[...].chip
const chipBase =
  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm leading-snug text-left";

// Duração da animação do card de detalhe (abrir e fechar), em ms
const DURACAO = 450;

type Detalhe = {
  area: Area;
  item: Item;
  // Distância do centro do chip clicado até o centro da tela: o card nasce ali
  dx: number;
  dy: number;
  origem: HTMLElement;
};

// Trava a rolagem da página com o card aberto; o padding compensa a barra de
// rolagem que some, para o conteúdo não "pular" para o lado
function travarRolagem(travar: boolean) {
  const raiz = document.documentElement;
  raiz.style.paddingRight = travar
    ? `${window.innerWidth - raiz.clientWidth}px`
    : "";
  raiz.style.overflow = travar ? "hidden" : "";
}

export default function Servicos() {
  const [detalhe, setDetalhe] = useState<Detalhe | null>(null);
  const [visivel, setVisivel] = useState(false);

  const abrir = (area: Area, item: Item, origem: HTMLElement) => {
    const r = origem.getBoundingClientRect();
    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setDetalhe({
      area,
      item,
      origem,
      dx: semMovimento ? 0 : r.left + r.width / 2 - window.innerWidth / 2,
      dy: semMovimento ? 0 : r.top + r.height / 2 - window.innerHeight / 2,
    });
    travarRolagem(true);
    // Dois frames: o card é pintado primeiro sobre o chip e só então anima até o centro
    requestAnimationFrame(() => requestAnimationFrame(() => setVisivel(true)));
  };

  // Volta o card para o chip e só depois o desmonta
  const fechar = () => {
    if (!detalhe || !visivel) return;
    setVisivel(false);
    setTimeout(() => {
      travarRolagem(false);
      setDetalhe(null);
      detalhe.origem.focus({ preventScroll: true });
    }, DURACAO);
  };

  return (
    // id="servicos" é o destino do atalho "Serviços" do header
    <section
      id="servicos"
      className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14 scroll-mt-21 md:scroll-mt-28"
    >
      {/* Revelar anima o conteúdo, não a <section> com id: o destino do link do menu não se desloca */}
      <Revelar>
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
            <CardArea key={area.titulo} area={area} onAbrir={abrir} />
          ))}
        </div>
      </Revelar>

      {/* SEO: as descrições só aparecem no card de detalhe (montado ao clicar), então
          não estariam no HTML estático. Esta cópia invisível na tela (sr-only) deixa
          o texto completo legível para buscadores e leitores de tela */}
      <div className="sr-only">
        {areas.map((area) => (
          <section key={area.titulo}>
            <h3>{area.titulo}</h3>
            {area.itens.map((item) => (
              <article key={item.nome}>
                <h4>{item.nome}</h4>
                {item.descricao
                  .split(/\n\s*\n/)
                  .filter(Boolean)
                  .map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
              </article>
            ))}
          </section>
        ))}
      </div>

      {detalhe && (
        <CardDetalhe detalhe={detalhe} visivel={visivel} onFechar={fechar} />
      )}
    </section>
  );
}

function CardArea({
  area,
  onAbrir,
}: {
  area: Area;
  onAbrir: (area: Area, item: Item, origem: HTMLElement) => void;
}) {
  const [aberto, setAberto] = useState(false);
  const t = temas[area.tema];
  const idLista = `servicos-${area.tema}`;

  return (
    <article
      // lg (1024px) tem 3 colunas estreitas: padding, ícone e título encolhem só nessa faixa
      className={`rounded-3xl p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl has-[>button:active]:scale-[0.98] ${t.card}`}
    >
      <button
        type="button"
        onClick={() => setAberto((prev) => !prev)}
        aria-expanded={aberto}
        aria-controls={idLista}
        className="w-full flex items-center gap-3 md:gap-5 lg:gap-3 xl:gap-5 text-left cursor-pointer"
      >
        <span
          className={`shrink-0 h-9 w-9 md:h-12 md:w-12 lg:h-9 lg:w-9 xl:h-12 xl:w-12 ${t.destaque}`}
        >
          {area.icone}
        </span>

        {/* lg:min-h-[2lh]: reserva 2 linhas para os cards fechados terem a mesma altura */}
        <span className="flex-1 min-w-0 flex items-center font-display font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl leading-tight lg:min-h-[2lh]">
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
                className="invisible hidden lg:flex flex-col items-start gap-2 col-start-1 row-start-1"
              >
                {outra.itens.map((item) => (
                  <span key={item.nome} className={chipBase}>
                    {item.nome}
                    <IconeSeta />
                  </span>
                ))}
              </div>
            ))}

            {/* Um chip por linha (flex-col), todos os cards no mesmo padrão */}
            <ul className="flex flex-col items-start gap-2 col-start-1 row-start-1">
              {area.itens.map((item, i) => (
                <li
                  key={item.nome}
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
                  {/* Hover num elemento interno, sem herdar o atraso da cascata.
                      O clique abre o card de detalhe, que nasce a partir deste chip */}
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => onAbrir(area, item, e.currentTarget)}
                    className={`group/chip ${chipBase} ${t.chip} cursor-pointer transition duration-200 active:scale-95 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg`}
                  >
                    {item.nome}
                    <IconeSeta />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

// Card de detalhe do tópico: nasce pequeno sobre o chip clicado e cresce até o
// centro da tela (translate + scale), com o fundo escurecendo e desfocando.
// Ao fechar, faz o caminho inverso de volta ao chip.
function CardDetalhe({
  detalhe,
  visivel,
  onFechar,
}: {
  detalhe: Detalhe;
  visivel: boolean;
  onFechar: () => void;
}) {
  const { area, item, dx, dy } = detalhe;
  const t = temas[area.tema];
  // Linha em branco na descrição = novo parágrafo; texto longo (ex.: Inventor)
  // ganha um card mais largo para não virar uma coluna estreita e comprida
  const paragrafos = item.descricao.split(/\n\s*\n/).filter(Boolean);
  const textoLongo = item.descricao.length > 600;
  const cardRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  // onFechar muda a cada render; o listener de teclado lê sempre a versão atual
  const onFecharRef = useRef(onFechar);
  useEffect(() => {
    onFecharRef.current = onFechar;
  });

  // Esc fecha; Tab fica preso dentro do card; o foco começa no botão de fechar
  useEffect(() => {
    fecharRef.current?.focus({ preventScroll: true });
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFecharRef.current();
      if (e.key !== "Tab" || !cardRef.current) return;
      const focaveis =
        cardRef.current.querySelectorAll<HTMLElement>("button, a[href]");
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // "Solicitar orçamento" abre o WhatsApp direto, com o tópico já na mensagem
  const whatsapp = linkWhatsApp(
    `Olá! Vim pelo site da Empireo e gostaria de um orçamento de ${area.titulo}: ${item.nome}.`,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detalhe-titulo"
      className="fixed inset-0 z-60 flex items-center justify-center p-4"
    >
      {/* Fundo: escurece e desfoca a página; clicar fora fecha */}
      <div
        aria-hidden="true"
        onClick={() => onFechar()}
        className={`absolute inset-0 bg-[#002B6B]/60 backdrop-blur-sm transition-opacity ${
          visivel ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: `${DURACAO}ms` }}
      />

      <div
        ref={cardRef}
        className={`relative w-full ${textoLongo ? "max-w-4xl" : "max-w-xl"} max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl ${t.card}`}
        style={{
          transform: visivel
            ? "none"
            : `translate(${dx}px, ${dy}px) scale(0.15)`,
          opacity: visivel ? 1 : 0,
          transition: `transform ${DURACAO}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DURACAO * 0.6}ms ease-out`,
        }}
      >
        {/* Conteúdo entra um pouco depois do card, subindo de leve */}
        <div
          className={`transition duration-300 ${
            visivel
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-start gap-4">
            <span
              className={`shrink-0 h-10 w-10 md:h-12 md:w-12 ${t.destaque}`}
            >
              {area.icone}
            </span>
            <p
              className={`flex-1 pt-2 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase ${t.destaque}`}
            >
              {area.titulo}
            </p>
            <button
              ref={fecharRef}
              type="button"
              onClick={() => onFechar()}
              aria-label="Fechar"
              className={`shrink-0 h-9 w-9 rounded-full border flex items-center justify-center cursor-pointer transition duration-200 hover:rotate-90 ${t.botao}`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <h3
            id="detalhe-titulo"
            className="font-display font-bold text-2xl md:text-3xl leading-tight mt-5"
          >
            {item.nome}
          </h3>
          <span className={`block mt-5 border-t ${t.divisor}`} />
          <div
            // hyphens-auto evita buracos grandes entre palavras no texto justificado (usa o lang="pt-BR")
            className={`mt-5 space-y-4 leading-relaxed opacity-90 sm:text-justify hyphens-auto ${
              textoLongo ? "text-base" : "text-base md:text-lg"
            }`}
          >
            {paragrafos.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          {/* Link (não botão): abre o WhatsApp em nova aba e fecha o card */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onFechar()}
            className={`mt-8 inline-flex items-center gap-2 font-bold px-6 py-3 rounded-md transition duration-200 hover:scale-105 active:scale-95 ${t.cta}`}
          >
            <IconeWhatsApp />
            Suporte técnico
          </a>
        </div>
      </div>
    </div>
  );
}

// Exportado: o botão "Enviar pelo WhatsApp" do Contato usa o mesmo ícone
export function IconeWhatsApp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function IconeSeta() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 opacity-70 transition-transform group-hover/chip:translate-x-0.5"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
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
