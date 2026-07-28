import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Serviços | MetalPro Engenharia",
  description:
    "Estruturas metálicas, projetos mecânicos, modelagem 3D, cálculo estrutural, manutenção e montagem industrial. Conheça os serviços de engenharia da MetalPro.",
}

export default function ServicosPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="O que fazemos"
          title="Serviços de engenharia mecânica e metalurgia"
          description="Do cálculo estrutural à montagem em obra, atuamos em todas as etapas de um projeto de estrutura metálica ou máquina industrial, com engenharia própria em cada uma delas."
        />

        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-16">
              {SERVICES.map((service, index) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-10 border-b border-border pb-16 last:border-b-0 last:pb-0 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="mt-4 block text-sm font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading mt-1 text-3xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="rounded-lg border border-border bg-muted/30 p-6 sm:p-8">
                      <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
                        O que está incluso
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span className="text-base text-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-brand-foreground py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Não sabe qual serviço se aplica ao seu projeto?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-muted">
              Conte para nossa equipe o que você precisa e nós indicamos o
              melhor caminho técnico e comercial.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/#contato">
                Falar com a engenharia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
