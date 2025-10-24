"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const facilities = [
  {
    id: 1,
    image: "/modern-therapy-room-with-comfortable-seating.jpg",
    alt: "Sala de terapia confortável",
  },
  {
    id: 2,
    image: "/peaceful-meditation-garden.jpg",
    alt: "Jardim para meditação",
  },
  {
    id: 3,
    image: "/bright-dining-room-with-healthy-meals.jpg",
    alt: "Refeitório",
  },
  {
    id: 4,
    image: "/cozy-bedroom-natural-light.png",
    alt: "Quarto acolhedor",
  },
  {
    id: 5,
    image: "/exercise-room-with-fitness-equipment.jpg",
    alt: "Sala de exercícios",
  },
  {
    id: 6,
    image: "/group-therapy-circle-with-chairs.jpg",
    alt: "Espaço para terapia em grupo",
  },
  {
    id: 7,
    image: "/outdoor-recreation-area.jpg",
    alt: "Área de recreação",
  },
  {
    id: 8,
    image: "/quiet-reading-library.jpg",
    alt: "Biblioteca",
  },
  {
    id: 9,
    image: "/art-therapy-studio.jpg",
    alt: "Sala de arte terapia",
  },
  {
    id: 10,
    image: "/peaceful-outdoor-patio.jpg",
    alt: "Pátio externo",
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Nossas Instalações
        </h2>
        <p className="text-slate-700 mb-8 leading-relaxed">
          Conheça nosso espaço acolhedor e preparado para oferecer o melhor
          ambiente para sua recuperação.
        </p>

        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-lg bg-slate-200 mb-6">
            <img
              src={facilities[currentIndex].image || "/placeholder.svg"}
              alt={facilities[currentIndex].alt}
              className="w-full h-64 md:h-80 object-cover"
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
