"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="py-12 md:py-16 px-6 bg-amber-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">
          Fale Conosco
        </h2>
        <p className="text-slate-700 mb-6">Estamos aqui para ajudar.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-slate-700">
              Nome:
            </Label>
            <Input
              disabled
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 bg-white border-slate-300"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-slate-700">
              Telefone:
            </Label>
            <Input
              disabled
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1 bg-white border-slate-300"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white"
            size="lg"
            disabled
          >
            Pedir Contato (Indisponível)
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-700 mb-3">OU:</p>
          <Button
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
                  WhatsApp Agora
                </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
