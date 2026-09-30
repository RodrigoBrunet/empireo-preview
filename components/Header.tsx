"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-[#0046A6] shadow-md fixed w-full z-50">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Menu principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`} // ou logo.png se converter
            alt="Logo Empireo Engenharia & Segurança"
            width={140}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-16 text-sm font-semibold">
          <li>
            <Link href="/" className="hover:text-[#C89B3C] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#C89B3C] transition-colors"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-[#C89B3C] transition-colors"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#C89B3C] transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Botão de destaque */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#0046A6] text-white font-bold px-4 py-2 rounded-md hover:bg-[#003580] transition-colors"
        >
          Fale Conosco
        </Link>
      </nav>
    </header>
  );
}
