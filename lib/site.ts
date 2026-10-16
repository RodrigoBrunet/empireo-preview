// Dados de SEO do site, usados no layout (título, descrição, Open Graph),
// no robots.txt, no sitemap.xml e nos dados estruturados (Schema.org).

// Endereço completo da página inicial (domínio oficial no build, localhost no
// npm run dev; definido no next.config.ts)
export const urlSite = `${process.env.NEXT_PUBLIC_SITE_URL}/`;

export const site = {
  nome: "Empireo Engenharia & Segurança",
  razaoSocial: "Empireo Engenharia & Segurança Ltda",
  // ~60 caracteres: é o que o Google costuma mostrar inteiro
  titulo: "Engenharia Mecânica e Segurança do Trabalho em Goiânia | Empireo",
  // ~155 caracteres: aparece abaixo do título no resultado da busca
  descricao:
    "Treinamentos NR-12 e Inventor, projetos de climatização, estruturas metálicas e redes de GLP, inspeções NR-12 e NR-13 em Goiânia. Mais de 25 anos de experiência.",
};
