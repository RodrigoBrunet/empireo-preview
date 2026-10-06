"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/logo.jpg";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  // trailingSlash: true faz o pathname vir como "/about/"
  const pathname = usePathname().replace(/(.)\/$/, "$1");

  // Fecha o menu mobile com a tecla Esc
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  // "Inicio" aponta para a página atual, então o navegador não rola
  // sozinho: sobe até o topo (suave pelo scroll-behavior do CSS) e tira o #sobre da URL
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    close();
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0 });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <header className="bg-white text-[#0046A6] shadow-md sticky top-0 w-full z-50 motion-safe:animate-header-in">
      <nav
        // Desktop: 3 colunas (logo | links | vazio) para os links ficarem no centro exato
        className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] px-4 md:px-6 py-3 md:py-2"
        aria-label="Menu principal"
      >
        {/* Logo: <a> comum (não Link) para recarregar a página inteira; o basePath
            precisa ir na mão porque só o Link do Next o adiciona sozinho */}
        {/* overflow-hidden + margens negativas cortam a margem branca de cima (~10%)
            e de baixo (~16%) do logo.jpg: o logo fica do mesmo tamanho e o header mais baixo */}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`} className="flex items-center w-fit overflow-hidden">
          <Image
            src={logo}
            alt="Logo Empireo Engenharia & Segurança"
            className="h-20 md:h-32 w-auto -mt-2 -mb-3 md:-mt-3 md:-mb-5"
            priority
          />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 lg:gap-16 text-base lg:text-lg font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="inline-block transition duration-200 hover:text-[#C89B3C] hover:scale-115"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* ☰ que vira ✕: as linhas de cima e de baixo descem/sobem até o centro e
              giram 45°, a do meio some. transform-box: fill-box gira cada linha no próprio centro */}
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {[7, 12, 17].map((y, i) => (
              <path
                key={y}
                d={`M4 ${y}h16`}
                className="origin-center transform-fill transition duration-300 ease-out"
                style={{
                  transform: open
                    ? i === 1
                      ? "scaleX(0)"
                      : `translateY(${12 - y}px) rotate(${i === 0 ? 45 : -45}deg)`
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      {/* Abre deslizando: grid-rows de 0fr para 1fr anima até a altura real do menu;
          inert tira os links do Tab e do leitor de tela enquanto está fechado.
          absolute (flutua sob o header): abrir/fechar não empurra a página, senão o
          clique num link rolaria para o lugar errado enquanto o menu ainda fecha */}
      <div
        id="menu-mobile"
        inert={!open}
        className={`md:hidden absolute inset-x-0 top-full grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] shadow-md" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul
            className={`flex flex-col px-4 py-2 text-lg font-semibold bg-white border-t transition-colors ${
              open ? "border-gray-100" : "border-transparent"
            }`}
          >
            {links.map((link, i) => (
              <li
                key={link.href}
                // Itens entram em cascata, deslizando da esquerda
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={`transition duration-300 ease-out ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                }`}
              >
                {/* No toque não há hover: enquanto o dedo está na linha (active:), ela ganha
                    fundo dourado claro, barrinha dourada à esquerda e o texto desliza.
                    tap-highlight transparente tira o retângulo cinza padrão do celular */}
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="relative block py-3 px-3 -mx-3 rounded-xl transition-all duration-150 [-webkit-tap-highlight-color:transparent]
                    before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-0 before:w-1 before:rounded-full before:bg-[#C89B3C] before:transition-all before:duration-150
                    hover:text-[#C89B3C] hover:bg-[#E9C46A]/15 hover:pl-5 hover:before:h-6
                    active:text-[#B8862F] active:bg-[#E9C46A]/25 active:pl-5 active:before:h-6"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
