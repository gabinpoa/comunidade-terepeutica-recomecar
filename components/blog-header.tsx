"use client"

import { Button } from "@/components/ui/button"
import { Menu, ArrowLeft, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Urbanist } from "next/font/google"

interface BlogHeaderProps {
    backLink: string
    backText: string
}

const urbanist = Urbanist({ subsets: ["latin"] });

export function BlogHeader({ backLink, backText }: BlogHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${urbanist.className} fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black`}
    >
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-white text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
            ct recomeçar
          </Link>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hidden md:flex items-center gap-2"
          >
            <Link href={backLink}>
              <ArrowLeft className="h-4 w-4" />
              {backText}
            </Link>
          </Button>
        </div>
        <button
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="bg-black border-t border-white/10">
          <ul className="flex flex-col">
            <li className="md:hidden">
              <Link
                href={backLink}
                className="flex items-center gap-2 px-6 py-4 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ArrowLeft className="h-4 w-4" />
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
  )
}
