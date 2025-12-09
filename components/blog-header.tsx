"use client";

import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import logoFlatIcon from "@/public/logo-flat-icon.svg";

interface BlogHeaderProps {
  backLink: string;
  backText: string;
}

const urbanist = Urbanist({ subsets: ["latin"] });

export function BlogHeader({ backLink, backText }: BlogHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`${urbanist.className} fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-light-wisteria-400`}
    >
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-white text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            <Image
              src={logoFlatIcon}
              alt="Logo Comunidade Terapêutica Recomeçar"
              width={44}
              height={44}
              className="invert filter brightness-0"
            />
          </Link>

            <Link href={backLink} className="text-white hover:bg-white/10 hidden md:flex items-center gap-2 p-2 rounded-lg">
              <ArrowLeft size={40} className="h-5 w-5" />
              {backText}
            </Link>
        </div>
        <button
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="bg-light-wisteria-400 border-t border-white/10">
          <ul className="flex flex-col">
            <li className="md:hidden">
              <Link
                href={backLink}
                className="flex items-center gap-2 px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ArrowLeft className="h-5 w-5" />
                {backText}
              </Link>
            </li>
            <li>
              <Link
                href="/#sobre"
                className="block px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre a Terapia
              </Link>
            </li>
            <li>
              <Link
                href="/#instalacoes"
                className="block px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossas Instalações
              </Link>
            </li>
            <li>
              <Link
                href="/#depoimentos"
                className="block px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias e Artigos
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                className="block px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
