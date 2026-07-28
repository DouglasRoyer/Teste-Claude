import { Cog, Factory, Users } from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Factory,
    title: "Planta própria",
    description:
      "Galpão fabril equipado com corte a laser, dobradeiras CNC e cabines de solda robotizada.",
  },
  {
    icon: Cog,
    title: "Engenharia integrada",
    description:
      "Mesma equipe do projeto acompanha a fabricação e a montagem, reduzindo divergências em obra.",
  },
  {
    icon: Users,
    title: "Equipe própria",
    description:
      "Soldadores certificados, montadores e engenheiros de segurança do trabalho no quadro fixo.",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Sobre a MetalPro
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Quase duas décadas transformando aço em soluções de engenharia
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                A MetalPro nasceu dentro de uma oficina de manutenção
                industrial e, ao longo de mais de 18 anos, cresceu para se
                tornar uma empresa completa de engenharia mecânica: projeto,
                cálculo estrutural, fabricação e montagem sob o mesmo teto.
              </p>
              <p>
                Hoje atendemos indústrias de alimentos, mineração, logística e
                construção civil, sempre com engenheiros responsáveis
                registrados no CREA e processos alinhados às normas técnicas
                brasileiras.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-lg border border-border bg-muted/30 p-6 sm:col-span-1"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
