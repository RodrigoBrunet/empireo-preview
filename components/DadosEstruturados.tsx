"use client";
// "use client" só para poder ler `areas` (exportada por Servicos.tsx, que é client);
// o <script> sai igual no HTML estático gerado no build, que é o que o Google lê.
import { areas } from "@/components/Servicos";
import { contato } from "@/lib/contato";
import { site, urlSite } from "@/lib/site";

// Dados estruturados (Schema.org, JSON-LD): dizem ao Google que tipo de empresa é,
// onde fica, como contatar e quais serviços oferece (ajuda na busca local).
// TODO: incluir "email" quando houver o e-mail oficial (o atual é provisório).
export default function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${urlSite}#empresa`,
    name: site.nome,
    legalName: site.razaoSocial,
    description: site.descricao,
    url: urlSite,
    logo: `${urlSite}logo.jpg`,
    image: `${urlSite}logo.jpg`,
    telephone: `+${contato.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua 72, nº 223, Qd. C16, Lt. 12/15, Ed. QS Tower, Sala 1507, Jardim Goiás",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: "74805-480",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Goiânia" },
    sameAs: [contato.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: areas.map((area) => ({
        "@type": "OfferCatalog",
        name: area.titulo,
        itemListElement: area.itens.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.nome },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // "<" escapado evita que um texto quebre a tag <script> (recomendação do Next)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
