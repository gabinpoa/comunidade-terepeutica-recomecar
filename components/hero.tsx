import { Button } from "@/components/ui/button"
import { Menu, MessageCircle, Phone, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex flex-col bg-slate-800">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=600&query=peaceful+nature+therapy+background)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <h1 className="text-white text-xl md:text-2xl font-bold">recomeçar</h1>
        <button className="text-white p-2" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Recomeçar: Tratamento de dependência química
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-md mb-8 text-pretty">
          Centro de acolhimento feminino em um Nova Santa Rita
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2" size="lg">
            <MessageCircle className="w-5 h-5" />
            Enviar Mensagem
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 gap-2 backdrop-blur-sm"
            size="lg"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  )
}
