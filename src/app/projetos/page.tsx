import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { ProjectsFilterGrid } from "@/components/site/projects-filter-grid"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projetos | MetalPro Engenharia",
  description:
    "Galpões, coberturas, plataformas, silos, transportadores e máquinas industriais projetados e entregues pela MetalPro Engenharia.",
}

export default function ProjetosPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Projetos executados"
          title="Obras e máquinas entregues por nossa equipe"
          description="Uma amostra de estruturas metálicas e máquinas industriais que projetamos, fabricamos e montamos para clientes em diferentes setores."
        />

        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ProjectsFilterGrid />
          </div>
        </section>

        <section className="bg-brand text-brand-foreground py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Seu projeto pode ser o próximo
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-muted">
              Conte para nossa equipe de engenharia o que você precisa
              construir ou fabricar.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/#contato">
                Solicitar orçamento
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
