import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/lib/projects-data"

export function Projects() {
  return (
    <section id="projetos" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Projetos executados
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Obras e máquinas entregues por nossa equipe
            </h2>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/projetos">
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project) => (
            <article
              key={project.slug}
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
                  {project.tag}
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
