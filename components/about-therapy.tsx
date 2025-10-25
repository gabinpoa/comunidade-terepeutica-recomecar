export function AboutTherapy() {
  const stages = [
    {
      number: "1",
      title: "Avaliação inicial",
      description:
        "Entrevista clínica para entender as necessidades individuais.",
    },
    {
      number: "2",
      title: "Desintoxicação e Acolhimento",
      description: "Ambiente seguro para lidar com os sintomas de abstinência.",
    },
    {
      number: "3",
      title: "Terapia em Grupo",
      description: "Compartilhamento de experiências com outras mulheres.",
    },
    {
      number: "4",
      title: "Reinserção Progressiva",
      description: "Preparação para retornar à vida social e profissional.",
    },
  ];

  return (
    <section id="sobre" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
          Sobre a Terapia
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
          Aqui, a recuperação acontece em etapas, com apoio humano e atividades
          que promovem bem-estar físico e emocional.
        </p>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">
          Etapas:
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
