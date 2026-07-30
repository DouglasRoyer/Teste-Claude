import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const HIGHLIGHTS = [
  { label: "Engenharia própria, do projeto à montagem" },
  { label: "Atendimento direto com os sócios" },
  { label: "Santa Cruz do Sul e região" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--primary) 12%, transparent), transparent)",
        }}
      />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-20 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="font-semibold text-foreground">Novo</span>
          <span className="text-border">|</span>
          Vectum Engenharia está no ar
        </div>

        <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
          Estruturas metálicas e máquinas industriais, sob medida.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Projeto, fabricação e montagem com engenharia mecânica própria — da
          primeira ideia ao aço pronto, atendendo Santa Cruz do Sul e região.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#contato">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/servicos">Ver serviços</Link>
          </Button>
        </div>

        <dl className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <dd className="text-sm text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
