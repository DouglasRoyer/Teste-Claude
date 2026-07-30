import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="px-6 py-20">
      <div className="bg-blueprint-grid relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-white/[0.03] px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_100%_at_50%_50%,black,transparent)]" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tem um projeto de estrutura metálica ou máquina industrial?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Fale com nossa equipe de engenharia e receba uma análise técnica
            preliminar sem compromisso.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#contato">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+5551996974808">
                <Phone className="h-4 w-4" />
                (51) 99697-4808
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
