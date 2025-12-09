export function LocationMap() {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Map Placeholder */}
        <div className="mb-6 rounded-lg overflow-hidden bg-light-wisteria-100 h-64 md:h-80 flex items-center justify-center">
          <iframe
            title="map-overlay"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              visibility: "hidden",
              border: "none",
              outline: "4px dashed crimson",
              height: "100%",
              width: "100%",
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110710.01431808532!2d-51.36155217609173!3d-29.873272019147787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9519633ffe70f9ad%3A0x557ddb3402859404!2sComunidade%20Terap%C3%AAutica%20Recome%C3%A7ar%20-%20Av.%20do%20Passito%2C%20746%20-%20Calif%C3%B3rnia%20II%2C%20Nova%20Santa%20Rita%20-%20RS%2C%2092480-000!3m2!1d-29.8732875!2d-51.2913448!5e0!3m2!1sen!2sbr!4v1671000838222!5m2!1sen!2sbr"
            width="364"
            height="250"
            className="border-2 border-black"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa — Comunidade Terapêutica Recomeçar"
          />
        </div>

        {/* Address Information */}
        <div className="text-center space-y-2 text-slate-700">
          <p className="font-semibold">
            Avenida do Passito, 746 - Califórnia II
          </p>
          <p>Nova Santa Rita - RS, Brasil</p>
          <p className="text-sm">CEP: 92480-000</p>
          <p className="mt-4">
            <span className="font-semibold">Telefone:</span> +55 (51) 99565-2811
          </p>
          <p className="text-sm text-slate-600 mt-6">Visite-nos hoje! <br /> Aberto 24h todos os dias</p>
        </div>
      </div>
    </section>
  )
}
