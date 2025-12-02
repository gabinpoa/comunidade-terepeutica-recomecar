export function AboutTherapy() {
  const stages = [
    {
      number: "1",
      title: "Avaliação Multidisciplinar",
      description:
        "Acolhimento inicial realizado pela equipe composta por: Psicologia, Serviço Social, Coordenação, Enfermagem, Psiquiatria e Acompanhamento Espiritual. Inclui: Entrevista clínica e psicossocial, Avaliação psiquiátrica, Histórico de uso de substâncias, Identificação de fatores de risco e proteção, Definição do nível de comprometimento e das necessidades individuais.",
    },
    {
      number: "2",
      title: "Objetivo Geral do Programa",
      description:
        "Promover a recuperação integral da mulher, fortalecendo aspectos emocionais, físicos, sociais, espirituais e comportamentais, desenvolvendo autonomia, responsabilidade e novas estratégias de vida, com foco na sobriedade estável e na reinserção social saudável.",
    },
    {
      number: "3",
      title: "Atividades Terapêuticas",
      description:
        "As acolhidas participam de uma rotina estruturada com atividades diárias como: Psicoterapia individual, Terapia em grupo, Grupos reflexivos, Atividades físicas, Educação emocional, Arteterapia, Cuidados pessoais e responsabilidades diárias.",
    },
    {
      number: "4",
      title: "Plano de Tratamento Individualizado",
      description:
        "Cada acolhida recebe um PTI baseado na avaliação inicial, contendo: Metas mensais de evolução, Intervenções psicológicas e comportamentais, Acompanhamento medicamentoso (quando indicado), Ações de fortalecimento familiar, Desenvolvimento de habilidades sociais, Treinamento de prevenção à recaída, Preparação para reinserção social e laboral. O PTI é revisado periodicamente pela equipe.",
    },
    {
      number: "5",
      title: "Regras de Moradia e Convivência",
      description:
        "Para garantir um ambiente seguro, respeitoso e terapêutico, são adotados princípios como: Respeito mútuo entre acolhidas e equipe, Proibição de agressões, ofensas ou discriminações, Participação obrigatória nas atividades terapêuticas, Cumprimento de horários, Manutenção da organização e higiene dos espaços, Não utilização de celulares ou aparelhos eletrônicos sem autorização, Visitas e contatos familiares conforme calendário oficial, Sigilo, ética e compromisso com o grupo.",
    },
    {
      number: "6",
      title: "Oficinas Profissionalizantes",
      description:
        "Desenvolvimento de habilidades práticas para fortalecer a autonomia pós-tratamento. Podem incluir: Culinária, Panificação e confeitaria, Artesanato, Jardinagem e hortas, Organização e limpeza profissional.",
    },
    {
      number: "7",
      title: "Zumba",
      description:
        "Atividade física e recreativa realizada semanalmente, contribuindo para: Redução da ansiedade, Melhora do condicionamento físico, Aumento da autoestima, Integração entre as acolhidas.",
    },
    {
      number: "8",
      title: "Massoterapia",
      description:
        "Atendimento terapêutico que auxilia no bem-estar físico e emocional, promovendo: Relaxamento muscular, Redução do estresse, Melhora da qualidade do sono, Acolhimento corporal durante o tratamento.",
    },
    {
      number: "9",
      title: "Terapias Holísticas",
      description:
        "Intervenções que complementam o cuidado integral: Aromaterapia, Musicoterapia, Meditação guiada.",
    },
    {
      number: "10",
      title: "PICS – Práticas Integrativas e Complementares em Saúde",
      description:
        "Aplicação de técnicas reconhecidas pelo SUS, tais como: Reiki, Relaxamento e respiração consciente.",
    },
    {
      number: "11",
      title: "Reunião de Amor-Exigente",
      description:
        "Encontros periódicos com foco em: Fortalecimento das famílias, Disciplina, limites e corresponsabilidade, Reconstrução de vínculos, Orientação sobre o processo terapêutico.",
    },
    {
      number: "12",
      title: "Reuniões de Doze Passos – AA e NA",
      description:
        "Trabalham espiritualidade, comportamento e responsabilidade pessoal, proporcionando: Compartilhamento de experiências, Acolhimento entre pares, Desenvolvimento de novas percepções sobre o uso, Estímulo à sobriedade contínua.",
    },
    {
      number: "13",
      title: "Prevenção à Recaída",
      description:
        "Módulo estruturado para: Identificação de gatilhos, Construção de estratégias de enfrentamento, Planejamento pós-alta, Fortalecimento da autoeficiência, Treinamento para situações de risco.",
    },
    {
      number: "14",
      title: "Espiritualidade",
      description:
        "Atividade fundamental do tratamento, auxiliando no: Desenvolvimento de fé, propósito e sentido de vida, Fortalecimento interior, Prática de gratidão e reflexão, Reconexão com valores pessoais.",
    },
  ];

  return (
    <section id="sobre" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Sobre o Plano Terapêutico
        </h2>

        {/* Image */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src="/placeholder.avif"
            alt="Terapia em grupo"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <p className="text-slate-700 mb-8 leading-relaxed">
          O melhor Tratamento para a Dependência Química (álcool e outras
          drogas) e Dependência de Jogos e Apostas.
        </p>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">
          Etapas do Tratamento:
        </h3>

        <div className="space-y-6">
          {stages.map((stage) => (
            <div key={stage.number} className="flex gap-4">
              <div className="shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  {stage.number}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{stage.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
