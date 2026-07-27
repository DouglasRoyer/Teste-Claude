import { Factory, Layers, Boxes, Gauge, Construction, Cog } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  {
    icon: Factory,
    category: "Galpão industrial",
    title: "Galpão logístico de 4.200 m²",
    spec: "180 toneladas de aço",
  },
  {
    icon: Layers,
    category: "Cobertura metálica",
    title: "Cobertura em arco para pátio industrial",
    spec: "60m de vão livre",
  },
  {
    icon: Cog,
    category: "Máquina industrial",
    title: "Transportador de correia para mineração",
    spec: "120m de extensão",
  },
  {
    icon: Boxes,
    category: "Silo metálico",
    title: "Silo de armazenagem de grãos",
    spec: "2.500 m³ de capacidade",
  },
  {
    icon: Gauge,
    category: "Linha de produção",
    title: "Esteira de linha de envase automatizada",
    spec: "3 turnos contínuos",
  },
  {
    icon: Construction,
    category: "Plataforma industrial",
    title: "Plataforma de elevação e passarelas",
    spec: "Laudo ART incluso",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Projetos executados
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Obras e máquinas entregues por nossa equipe
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="bg-blueprint-grid relative flex h-44 items-center justify-center overflow-hidden bg-brand">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />
                <project.icon
                  className="relative h-16 w-16 text-primary/90 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <Badge variant="outline" className="text-primary">
                  {project.category}
                </Badge>
                <h3 className="font-heading mt-3 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.spec}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
