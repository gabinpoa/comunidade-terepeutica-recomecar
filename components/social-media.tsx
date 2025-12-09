import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function SocialMedia() {
  return (
    <section className="py-12 md:py-16 px-6 bg-light-wisteria-300">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-light-wisteria-950">
          Siga nossas redes!
        </h2>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            asChild
            className="w-full gap-2 bg-white border-slate-300 hover:bg-slate-50 text-light-wisteria-950"
            size="lg"
          >
            <Link
              href="https://www.instagram.com/ctrecomecar.nsr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-light-wisteria-950" />
              Instagram
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full gap-2 bg-white border-slate-300 hover:bg-slate-50 text-light-wisteria-950"
            size="lg"
          >
            <Link
              href="https://www.facebook.com/p/Comunidade-Terap%C3%AAutica-Recome%C3%A7ar-100083517383164/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 text-light-wisteria-950" />
              Facebook
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
