"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// Versão do logo sem as margens brancas do arquivo original (public/logo.jpg)
import logo from "@/public/logo-header.jpg";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/contact", label: "Contato" },
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
        className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] px-4 md:px-6 py-3 md:py-1"
        aria-label="Menu principal"
      >
        {/* Logo: <a> comum (não Link) para recarregar a página inteira; o basePath
            precisa ir na mão porque só o Link do Next o adiciona sozinho */}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`} className="flex items-center w-fit">
          <Image
            src={logo}
            alt="Logo Empireo Engenharia & Segurança"
            className="h-20 md:h-32 w-auto"
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
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="md:hidden border-t border-gray-100 bg-white"
      >
        <ul className="flex flex-col px-4 py-2 text-lg font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              {/* active: repete o efeito do hover, já que no toque não há hover */}
              <Link
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="block py-3 origin-left transition duration-200
                  hover:text-[#C89B3C] hover:scale-115
                  active:text-[#C89B3C] active:scale-115"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
