"use client";

import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import Image from "next/image";

const urbanist = Urbanist({ subsets: ["latin"] });

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
            : "bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.56)_65.62%,rgba(1,1,1,0)_99.96%,rgba(30,30,30,0)_99.97%,rgba(30,30,30,0)_99.98%)]"
        }`}
      >
        <div className="flex items-center justify-between p-4 md:p-6">
          <Link
            href="/"
            className={`${urbanist.className} text-white text-2xl font-medium hover:opacity-80 transition-opacity`}
          >
            ct recomeçar
          </Link>
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

      <section className="relative h-[88vh] min-h-[600px] flex flex-col bg-[linear-gradient(145deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]">
        {/* Background Image Overlay */}
        <div
          className="absolute -z-10 inset-0 bg-cover bg-position-[right_-200px_top] md:bg-center"
          style={{
            backgroundImage: "url(/background1600.jpg)",
          }}
        />
        <div className="pt-20 md:pt-24" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-around px-6 text-center">
          <div className="text-left max-w-[26ch] sm:text-center sm:max-w-none flex flex-col gap-4 sm:place-items-center">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold text-balance leading-[37.5px] md:leading-normal">
              Comunidade Terapêutica Recomeçar
            </h2>

            <p className="text-white/90 text-base md:text-lg max-w-md text-pretty">
              Comunidade de acolhimento feminino em Nova Santa Rita - RS
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-3 w-full max-w-xs text-xl">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                size="lg"
              >
                <Link
                  href={
                    "https://wa.me/5551995652811" +
                    "?text=" +
                    encodeURI(
                      "Olá! Tenho interesse no acolhimento para mulheres na Comunidade Terapêutica Recomeçar. Gostaria de saber mais sobre o tratamento e como funciona o processo de acolhimento voluntário."
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whats.svg"
                    alt="Ícone WhatsApp"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Enviar Mensagem
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 gap-2 backdrop-blur-sm"
                size="lg"
              >
                <Link
                  href="tel:+5551995652811"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </Link>
              </Button>
            </div>
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
