'use client'

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects-data"

const FILTERS = ["Todos", ...PROJECT_CATEGORIES] as const

export function ProjectsFilterGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos")

  const visibleProjects =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
        {FILTERS.map((option) => {
          const isActive = option === filter
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={isActive}
              className={cn(
                "cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {option}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
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

      {visibleProjects.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          Nenhum projeto encontrado nessa categoria.
        </p>
      )}
    </div>
  )
}
