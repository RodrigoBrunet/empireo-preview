// Dados de contato da Empireo, usados no Contato e nos cards de detalhe de Serviços.
// TODO: dados provisórios — trocar pelos contatos reais da Empireo.
// whatsapp: só dígitos, com DDI 55 + DDD (formato exigido pelo wa.me)
export const contato = {
  whatsapp: "5500000000000",
  telefone: "(00) 00000-0000",
  email: "contato@empireo.com.br",
  // TODO: link do perfil da Empireo (ex.: https://www.instagram.com/empireo)
  instagram: "#",
};

// Link que abre a conversa com a Empireo no WhatsApp, com o texto já escrito
export function linkWhatsApp(texto: string) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`;
}
