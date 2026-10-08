// Dados de contato da Empireo, usados no Contato e nos cards de detalhe de Serviços.
// TODO: o e-mail ainda é provisório (telefone/WhatsApp já são os reais).
// whatsapp: só dígitos, com DDI 55 + DDD (formato exigido pelo wa.me)
export const contato = {
  whatsapp: "5562993230990",
  telefone: "(62) 99323-0990",
  email: "contato@empireo.com.br",
  // TODO: link do perfil da Empireo (ex.: https://www.instagram.com/empireo)
  instagram: "#",
  // Endereço escrito sempre igual (site, Google, cartões): consistência ajuda na busca local
  endereco: {
    // Uma linha por parte do endereço;   (espaço que não quebra) mantém
    // juntos "nº 223", "Sala 1507", "CEP 74805-480" etc. quando a coluna é estreita
    linhas: [
      "Rua 72, nº 223, Qd. C16, Lt. 12/15",
      "Ed. QS Tower, Sala 1507",
      "Jardim Goiás – Goiânia/GO",
      "CEP 74805-480",
    ],
    // Busca no Google Maps (abre a rota); só link, sem mapa incorporado nem cookies
    mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Ed. QS Tower, Rua 72, 223 - Jardim Goiás, Goiânia - GO, 74805-480",
    )}`,
  },
};

// Link que abre a conversa com a Empireo no WhatsApp, com o texto já escrito
export function linkWhatsApp(texto: string) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`;
}
