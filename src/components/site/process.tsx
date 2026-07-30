'use client'

import { motion } from "framer-motion"

const STEPS = [
  {
    number: "01",
    title: "Briefing e visita técnica",
    description:
      "Levantamento de requisitos, visita ao local da obra ou operação e definição do escopo técnico do projeto.",
  },
  {
    number: "02",
    title: "Projeto e modelagem 3D",
    description:
      "Modelagem em CAD, cálculo estrutural e detalhamento de fabricação, com aprovação do cliente antes de iniciar a produção.",
  },
  {
    number: "03",
    title: "Orçamento e contrato",
    description:
      "Proposta técnica e comercial detalhada, com cronograma físico-financeiro e prazo de entrega definidos em contrato.",
  },
  {
    number: "04",
    title: "Fabricação",
    description:
      "Corte, dobra, usinagem e solda em planta própria, com controle de qualidade e inspeção dimensional em cada etapa.",
  },
  {
    number: "05",
    title: "Montagem em campo",
    description:
      "Transporte, içamento e montagem por equipe própria, com acompanhamento de engenharia e segurança do trabalho.",
  },
  {
    number: "06",
    title: "Entrega e suporte",
    description:
      "Comissionamento, treinamento da equipe operacional e suporte técnico contínuo após a entrega.",
  },
]

export function Process() {
  return (
    <section id="processo" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Como trabalhamos
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Um processo de engenharia, do briefing à entrega
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative pl-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <span className="font-heading absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted/40 text-lg font-bold text-primary">
                {step.number}
              </span>
              <h3 className="font-heading pt-1.5 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
