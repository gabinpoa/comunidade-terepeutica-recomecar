"use client";

import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between p-4 md:p-6">
          <Link
            href="/"
            className="text-white text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            recomeçar
          </Link>
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="bg-black border-t border-white/10">
            <ul className="flex flex-col">
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

      <section className="relative h-[85vh] min-h-[600px] flex flex-col bg-slate-800">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=600&query=peaceful+nature+therapy+background)",
          }}
        />

        <div className="pt-20 md:pt-24" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Recomeçar: Tratamento de dependência química
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-md mb-8 text-pretty">
            Centro de acolhimento feminino em um Nova Santa Rita
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar Mensagem
            </Button>
            <Button
              variant="outline"
              className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 gap-2 backdrop-blur-sm"
              size="lg"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex justify-center pb-6">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>
    </>
  );
}
