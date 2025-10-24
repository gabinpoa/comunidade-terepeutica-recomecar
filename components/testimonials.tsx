export function Testimonials() {
  const testimonials = [
    {
      name: "A. 28 anos",
      duration: "6 meses de tratamento",
      text: "Aprendi a me amar de novo. Aqui, não sou julgada, mas sim acolhida. Hoje sou a mãe que a minha filha merece.",
      image: "/young-woman-portrait-hopeful.jpg",
    },
    {
      name: "C. 35 anos",
      duration: "Mãe de uma acolhida",
      text: "Minha filha voltou a sorrir depois de 3 anos de escuridão. Hoje, não me reconheço mais na pessoa que eu era antes.",
      image: "/woman-smiling-portrait-confident.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">
          Depoimentos
        </h2>
        <p className="text-slate-700 mb-8 leading-relaxed">
          Quem passou por aqui compartilha sua jornada.
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm text-slate-500">
                    {testimonial.duration}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
