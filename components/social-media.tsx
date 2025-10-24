import { Button } from "@/components/ui/button"
import { Instagram, Facebook } from "lucide-react"

export function SocialMedia() {
  return (
    <section className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Siga nossas redes!</h2>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full gap-2 border-slate-300 hover:bg-slate-50 bg-transparent"
            size="lg"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2 border-slate-300 hover:bg-slate-50 bg-transparent"
            size="lg"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </Button>
        </div>
      </div>
    </section>
  )
}
