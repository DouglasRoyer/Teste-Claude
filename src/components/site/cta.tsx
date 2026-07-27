import { ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-brand-foreground">
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_100%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Tem um projeto de estrutura metálica ou máquina industrial?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-muted">
          Fale com nossa equipe de engenharia e receba uma análise técnica
          preliminar sem compromisso.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contato">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-brand-foreground hover:bg-white/10 hover:text-brand-foreground"
          >
            <a href="tel:+551140028922">
              <Phone className="h-4 w-4" />
              (11) 4002-8922
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
