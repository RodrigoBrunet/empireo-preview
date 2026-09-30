"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/logo.jpg";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre nós" },
  { href: "/services", label: "Serviços" },
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

  return (
    <header className="bg-white text-[#0046A6] shadow-md sticky top-0 w-full z-50">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-1"
        aria-label="Menu principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={close}>
          <Image
            src={logo}
            alt="Logo Empireo Engenharia & Segurança"
            className="h-20 md:h-32 w-auto"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 lg:gap-16 text-sm font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="inline-block transition duration-200 hover:text-[#C89B3C] hover:scale-115"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão de destaque */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#0046A6] text-white font-bold px-4 py-2 rounded-md transition duration-200 hover:bg-[#003580] hover:scale-110"
        >
          Fale Conosco
        </Link>

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
        <ul className="flex flex-col px-4 py-2 font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              {/* active: repete o efeito do hover, já que no toque não há hover */}
              <Link
                href={link.href}
                onClick={close}
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
        <div className="px-4 pb-4">
          <Link
            href="/contact"
            onClick={close}
            className="block text-center bg-[#0046A6] text-white font-bold px-4 py-3 rounded-md transition duration-200
              hover:bg-[#003580] hover:scale-105
              active:bg-[#003580] active:scale-105"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
