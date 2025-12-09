"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const facilities = [
	{
		id: 4,
		image: "/floresarvore.jpg",
		alt: "Flores e árvore",
	},
	{
		id: 3,
		image: "/cachorro.jpg",
		alt: "Cachorro",
	},
	{
		id: 2,
		image: "/patio.jpg",
		alt: "Pátio",
	},
	{
		id: 8,
		image: "/beliche.jpg",
		alt: "Beliche",
	},
	{
		id: 9,
		image: "/estante.jpg",
		alt: "Estante",
	},
	{
		id: 5,
		image: "/grupo.jpg",
		alt: "Grupo de pessoas",
	},
	{
		id: 6,
		image: "/patio9por16.jpg",
		alt: "Pátio 9 por 16",
	},
	{
		id: 1,
		image: "/arcoiris.jpg",
		alt: "Arco-íris",
	},
	{
		id: 7,
		image: "/arvore.jpg",
		alt: "Árvore",
	},
	{
		id: 10,
		image: "/gramado.jpg",
		alt: "Gramado",
	},
];

export function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? facilities.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === facilities.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="instalacoes" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-light-wisteria-950">
          Nossas Instalações
        </h2>
        <p className="text-slate-700 mb-8 leading-relaxed">
          Conheça nosso espaço acolhedor e preparado para oferecer o melhor
          ambiente para sua recuperação.
        </p>

        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-lg bg-light-wisteria-100 mb-6">
            <img
              src={facilities[currentIndex].image}
              alt={facilities[currentIndex].alt}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={goToPrevious}
            variant="outline"
            size="icon"
            className="absolute left-4 top-[calc(50%-3rem)] -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="absolute right-4 top-[calc(50%-3rem)] -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-3">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-emerald-500"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-sm text-slate-500">
            {currentIndex + 1} / {facilities.length}
          </p>
        </div>
      </div>
    </section>
  );
}
