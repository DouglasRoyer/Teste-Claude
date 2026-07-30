import Link from "next/link"
import { ArrowRight, Lock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

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

        <div className="relative mt-16 w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex h-10 items-center border-b border-border bg-muted/40 px-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" aria-hidden="true" />
              vectum.eng.br
            </div>
          </div>

          <div className="relative h-[380px] overflow-hidden bg-[#05070c] sm:h-[480px]">
            <Spotlight
              className="-top-20 left-1/3"
              size={500}
              fill="#f97316"
            />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
