import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services-data"

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              O que fazemos
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Serviços de engenharia mecânica e metalurgia
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Atendemos indústrias, construtoras e operações fabris com uma
              equipe própria de engenheiros mecânicos, do projeto conceitual à
              entrega em obra.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/servicos">
              Ver todos os serviços
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <Card
              key={service.slug}
              className="group border-border/80 transition-colors hover:border-primary/40"
            >
              <CardHeader>
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
