"use client";
import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
// Foto gratuita do Pexels (licença livre para uso comercial): pexels.com/photo/209719
import foto from "@/public/contato.jpg";
import { areas } from "@/components/Servicos";

// TODO: dados provisórios — trocar pelos contatos reais da Empireo.
// whatsapp: só dígitos, com DDI 55 + DDD (formato exigido pelo wa.me)
const contato = {
  whatsapp: "5500000000000",
  telefone: "(00) 00000-0000",
  email: "contato@empireo.com.br",
};

// Máscara de telefone ao digitar: (00) 0000-0000 para fixo e (00) 00000-0000
// para celular — o formato muda sozinho quando passa de 10 dígitos
function mascaraTelefone(texto: string) {
  const d = texto.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  const meio = d.length > 10 ? 7 : 6;
  if (d.length <= meio) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, meio)}-${d.slice(meio)}`;
}

const campo =
  "w-full rounded-xl border border-[#0046A6]/20 bg-[#F1EFEA]/60 px-4 py-3 text-base text-[#002B6B] placeholder:text-[#0046A6]/40 outline-none transition focus:border-[#C89B3C] focus:bg-white focus:ring-2 focus:ring-[#E9C46A]/40";

// Dois cards lado a lado, no padrão do Hero: foto com "Contato", e-mail e
// telefone por cima, e o formulário. Sem servidor (site estático): ao enviar,
// o formulário abre o WhatsApp com a mensagem já escrita.
export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [telefone, setTelefone] = useState("");

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const valor = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      "Olá! Vim pelo site da Empireo.",
      "",
      `*Nome:* ${valor("nome")}`,
      valor("telefone") ? `*Telefone:* ${valor("telefone")}` : null,
      valor("servico") ? `*Serviço:* ${valor("servico")}` : null,
      "",
      "*Mensagem:*",
      valor("mensagem"),
    ].filter((linha) => linha !== null);

    const url = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  return (
    // id="contato" é o destino do "Contato" do header e do "Fale Conosco" do Hero
    <section
      id="contato"
      className="max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-14 scroll-mt-21 md:scroll-mt-28"
    >
      <div className="grid gap-3 lg:grid-cols-5">
        {/* Card de foto */}
        <div className="relative overflow-hidden rounded-3xl lg:rounded-br-none aspect-3/4 sm:aspect-4/3 lg:aspect-auto lg:col-span-2 text-white">
          <Image
            src={foto}
            alt="Engenheira com capacete de segurança falando ao telefone"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[65%_50%]"
            placeholder="blur"
          />
          {/* Azul de baixo para cima, para o texto ficar legível sobre a foto */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-[#002B6B]/95 via-[#0046A6]/55 to-[#0046A6]/10"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-linear-to-r from-[#B8862F] via-[#E9C46A] to-[#B8862F]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#E9C46A]">
                FALE CONOSCO
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-3xl md:text-5xl mt-3">
              Contato
            </h2>

            <ul className="mt-6 space-y-3">
              <LinhaContato href={`tel:+55${contato.telefone.replace(/\D/g, "")}`} icone={<IconeTelefone />}>
                {contato.telefone}
              </LinhaContato>
              <LinhaContato href={`mailto:${contato.email}`} icone={<IconeEmail />}>
                {contato.email}
              </LinhaContato>
            </ul>
          </div>
        </div>

        {/* Card do formulário (faixa dourada no topo, como em Sobre nós) */}
        <div className="relative overflow-hidden bg-white rounded-3xl lg:rounded-bl-none p-6 sm:p-8 md:p-12 lg:col-span-3">
          <span className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#B8862F] via-[#E9C46A] to-[#B8862F]" />

          <h3 className="font-display font-bold text-2xl md:text-3xl">
            Envie sua mensagem
          </h3>
          <p className="mt-2 text-gray-700">
            Preencha os campos e continue a conversa pelo WhatsApp.
          </p>

          <form onSubmit={enviar} className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold">
              Nome
              <input name="nome" required autoComplete="name" className={campo} placeholder="Seu nome" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">
              Telefone <span className="sr-only">(opcional)</span>
              <input
                name="telefone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={telefone}
                onChange={(e) => setTelefone(mascaraTelefone(e.target.value))}
                maxLength={15}
                className={campo}
                placeholder="(00) 00000-0000"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
              Serviço de interesse
              <select name="servico" defaultValue="" className={campo}>
                <option value="">Selecione (opcional)</option>
                {areas.map((area) => (
                  <option key={area.titulo}>{area.titulo}</option>
                ))}
                <option>Outro</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
              Mensagem
              <textarea
                name="mensagem"
                required
                rows={4}
                className={`${campo} resize-none`}
                placeholder="Conte como podemos ajudar"
              />
            </label>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-4 mt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0046A6] text-white font-bold px-6 py-3 rounded-md cursor-pointer transition duration-200 hover:bg-[#E9C46A] hover:text-[#002B6B] hover:scale-105"
              >
                <IconeMensagem />
                Enviar pelo WhatsApp
              </button>
              {/* aria-live: leitores de tela anunciam a confirmação */}
              <p aria-live="polite" className="text-sm text-gray-700">
                {enviado && "Abrimos o WhatsApp em uma nova aba com a sua mensagem."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function LinhaContato({ href, icone, children }: { href: string; icone: ReactNode; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-3 text-base md:text-lg font-semibold transition hover:text-[#E9C46A]"
      >
        <span className="h-10 w-10 shrink-0 rounded-full border border-white/30 bg-white/10 flex items-center justify-center transition group-hover:border-[#E9C46A] group-hover:bg-[#E9C46A] group-hover:text-[#002B6B]">
          {icone}
        </span>
        {children}
      </a>
    </li>
  );
}

function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {children}
    </svg>
  );
}

function IconeTelefone() {
  return (
    <Icone>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Icone>
  );
}

function IconeEmail() {
  return (
    <Icone>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icone>
  );
}

function IconeMensagem() {
  return (
    <Icone>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
    </Icone>
  );
}
