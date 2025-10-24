export function LocationMap() {
  return (
    <section className="py-12 md:py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Map Placeholder */}
        <div className="mb-6 rounded-lg overflow-hidden bg-slate-200 h-64 md:h-80 flex items-center justify-center">
          <img src="/map-location-pin.png" alt="Localização" className="w-full h-full object-cover opacity-60" />
        </div>

        {/* Address Information */}
        <div className="text-center space-y-2 text-slate-700">
          <p className="font-semibold">Avenida das Nações, 1180 - Colônia E</p>
          <p>Nova Santa Rita - RS, Brasil</p>
          <p className="text-sm">CEP: 92480-000</p>
          <p className="mt-4">
            <span className="font-semibold">Telefone:</span> (51) 3479-1738
          </p>
          <p className="text-sm text-slate-600 mt-6">Visite-nos hoje!</p>
        </div>
      </div>
    </section>
  )
}
