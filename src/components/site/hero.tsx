import { ArrowRight, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"

const STATS = [
  { value: "18+", label: "anos de atuação" },
  { value: "420+", label: "projetos entregues" },
  { value: "3.200t", label: "de aço fabricado" },
  { value: "98%", label: "de obras no prazo" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand text-brand-foreground"
    >
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <Spotlight className="-top-40 left-1/4" size={500} fill="#f97316" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-muted">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Engenharia certificada CREA &middot; NBR &amp; ISO 9001
          </div>

          <h1 className="font-heading mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Estruturas metálicas e projetos mecânicos de precisão
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
            Do cálculo estrutural ao comissionamento: projetamos, fabricamos e
            montamos estruturas metálicas e máquinas industriais sob medida
            para a sua operação, com engenharia própria e prazo garantido em
            contrato.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              <a href="#projetos">Ver projetos executados</a>
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-brand-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
