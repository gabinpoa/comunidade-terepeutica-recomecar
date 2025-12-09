"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function AboutTherapy() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const keyComponents = [
    {
      id: "objetivo",
      title: "Objetivo Geral do Programa",
      description:
        "Promover a recuperação integral da mulher, fortalecendo aspectos emocionais, físicos, sociais, espirituais e comportamentais, desenvolvendo autonomia, responsabilidade e novas estratégias de vida, com foco na sobriedade estável e na reinserção social saudável.",
    },
  ]

  const expandableComponents = [
    {
      id: "1",
      title: "Avaliação Multidisciplinar",
      category: "Avaliação",
      description:
        "Acolhimento inicial realizado pela equipe composta por: Psicologia, Serviço Social, Coordenação, Enfermagem, Psiquiatria e Acompanhamento Espiritual.",
      details: [
        "Entrevista clínica e psicossocial",
        "Avaliação psiquiátrica",
        "Histórico de uso de substâncias",
        "Identificação de fatores de risco e proteção",
        "Definição do nível de comprometimento e das necessidades individuais",
      ],
    },
    {
      id: "3",
      title: "Atividades Terapêuticas",
      category: "Terapia",
      description: "Rotina estruturada com atividades diárias que promovem bem-estar integral.",
      details: [
        "Psicoterapia individual",
        "Terapia em grupo",
        "Grupos reflexivos",
        "Atividades físicas",
        "Educação emocional",
        "Arteterapia",
        "Cuidados pessoais e responsabilidades diárias",
      ],
    },
    {
      id: "4",
      title: "Plano de Tratamento Individualizado",
      category: "Tratamento",
      description: "PTI personalizado baseado na avaliação inicial, revisado periodicamente pela equipe.",
      details: [
        "Metas mensais de evolução",
        "Intervenções psicológicas e comportamentais",
        "Acompanhamento medicamentoso (quando indicado)",
        "Ações de fortalecimento familiar",
        "Desenvolvimento de habilidades sociais",
        "Treinamento de prevenção à recaída",
        "Preparação para reinserção social e laboral",
      ],
    },
    {
      id: "5",
      title: "Regras de Moradia e Convivência",
      category: "Comunidade",
      description: "Princípios para garantir um ambiente seguro, respeitoso e terapêutico.",
      details: [
        "Respeito mútuo entre acolhidas e equipe",
        "Proibição de agressões, ofensas ou discriminações",
        "Participação obrigatória nas atividades terapêuticas",
        "Cumprimento de horários",
        "Manutenção da organização e higiene dos espaços",
        "Não utilização de celulares ou aparelhos eletrônicos sem autorização",
        "Visitas e contatos familiares conforme calendário oficial",
        "Sigilo, ética e compromisso com o grupo",
      ],
    },
    {
      id: "13",
      title: "Prevenção à Recaída",
      category: "Tratamento",
      description: "Módulo estruturado para preparação pós-alta.",
      details: [
        "Identificação de gatilhos",
        "Construção de estratégias de enfrentamento",
        "Planejamento pós-alta",
        "Fortalecimento da autoeficiência",
        "Treinamento para situações de risco",
      ],
    },
    {
      id: "14",
      title: "Espiritualidade",
      category: "Espiritual",
      description: "Atividade fundamental do tratamento, auxiliando no desenvolvimento interior.",
      details: [
        "Desenvolvimento de fé, propósito e sentido de vida",
        "Fortalecimento interior",
        "Prática de gratidão e reflexão",
        "Reconexão com valores pessoais",
      ],
    },
  ]

  const chipComponents = [
    {
      title: "Zumba",
      description: "Redução da ansiedade, melhora do condicionamento físico, aumento da autoestima",
    },
    {
      title: "Massoterapia",
      description: "Relaxamento muscular e redução do estresse",
    },
    {
      title: "Terapias Holísticas",
      description: "Aromaterapia, musicoterapia, meditação guiada",
    },
    {
      title: "PICS – Práticas Integrativas",
      description: "Reiki, relaxamento e respiração consciente",
    },
    {
      title: "Oficinas Profissionalizantes",
      description: "Culinária, panificação, artesanato, jardinagem",
    },
    {
      title: "Reunião de Amor-Exigente",
      description: "Fortalecimento familiar e reconstrução de vínculos",
    },
    {
      title: "Reuniões de Doze Passos",
      description: "AA e NA - Espiritualidade e responsabilidade pessoal",
    },
  ]

  const categoryColors: Record<string, string> = {
    Avaliação: "bg-blue-50 border-l-2 border-blue-300",
    Terapia: "bg-purple-50 border-l-2 border-purple-300",
    Tratamento: "bg-amber-50 border-l-2 border-amber-300",
    Comunidade: "bg-rose-50 border-l-2 border-rose-300",
    Espiritual: "bg-violet-50 border-l-2 border-violet-300",
  }

  const categoryBadgeColors: Record<string, string> = {
    Avaliação: "bg-blue-200 text-blue-900",
    Terapia: "bg-purple-200 text-purple-900",
    Tratamento: "bg-amber-200 text-amber-900",
    Comunidade: "bg-rose-200 text-rose-900",
    Espiritual: "bg-violet-200 text-violet-900",
  }

  return (
    <section id="sobre" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-light-wisteria-950">Sobre a Terapia</h2>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src="/grupomaior.jpg"
            alt="Grupo de mulheres em terapia"
            className="w-full h-auto"
          />
        </div>

        <p className="text-light-wisteria-800 mb-10 leading-relaxed">
          Aqui, a recuperação acontece de forma integral, fortalecendo aspectos emocionais, físicos, sociais,
          espirituais e comportamentais, desenvolvendo autonomia e novas estratégias de vida com foco na sobriedade
          estável e reinserção social saudável.
        </p>

        <div className="mb-10 p-6 bg-linear-to-r from-emerald-50 to-emerald-100 rounded-lg border-l-4 border-emerald-500">
          <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-3">Objetivo Geral do Programa</h3>
          <p className="text-neutral-700 leading-relaxed">{keyComponents[0].description}</p>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-light-wisteria-950">Componentes Principais:</h3>

        <div className="space-y-3 mb-10">
          {expandableComponents.map((component) => (
            <div
              key={component.id}
              className={`rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 ease-out border ${
                categoryColors[component.category]
              } ${expandedId === component.id ? "ring-2 ring-emerald-400 shadow-md" : ""}`}
              onClick={() => setExpandedId(expandedId === component.id ? null : component.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setExpandedId(expandedId === component.id ? null : component.id)
                }
              }}
              aria-expanded={expandedId === component.id}
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${categoryBadgeColors[component.category]}`}
                    >
                      {component.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-light-wisteria-950 text-sm md:text-base mb-1 flex items-center gap-2">
                      {component.title}
                      <ChevronDown
                        size={18}
                        className={`inline text-neutral-600 transition-transform duration-300 flex-shrink-0 ${
                          expandedId === component.id ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </h4>
                    <p className="text-light-wisteria-800 text-xs md:text-sm leading-relaxed">{component.description}</p>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    expandedId === component.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {component.details.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-neutral-300 border-opacity-30">
                      <ul className="space-y-2">
                        {component.details.map((detail, index) => (
                          <li key={index} className="text-neutral-600 text-xs md:text-sm leading-relaxed flex gap-2">
                            <span className="text-neutral-400 flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-light-wisteria-950">Atividades Complementares:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chipComponents.map((chip, index) => (
            <div
              key={index}
              className="p-4 bg-light-wisteria-50 rounded-lg border border-light-wisteria-200 hover:bg-light-wisteria-100 transition-colors"
            >
              <h4 className="font-semibold text-light-wisteria-950 text-sm md:text-base mb-2">{chip.title}</h4>
              <p className="text-neutral-600 text-xs md:text-sm">{chip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
