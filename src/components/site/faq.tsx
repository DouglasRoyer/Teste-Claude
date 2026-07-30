'use client'

import { useState } from "react"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const FAQS = [
  {
    question: "Quais documentos de engenharia vocês entregam?",
    answer:
      "Entregamos ART de projeto e execução, memorial de cálculo estrutural, desenhos de fabricação e montagem, e o as built ao final da obra.",
  },
  {
    question: "Vocês atendem fora de Santa Cruz do Sul?",
    answer:
      "Sim. Atendemos Santa Cruz do Sul e toda a região. Para cidades mais distantes, consulte disponibilidade e custo de deslocamento no orçamento.",
  },
  {
    question: "Qual o prazo médio de um projeto de estrutura metálica?",
    answer:
      "Depende do porte, mas em geral de 45 a 120 dias entre o fechamento do contrato e a entrega, incluindo projeto, fabricação e montagem. O cronograma é detalhado ainda na proposta.",
  },
  {
    question: "É possível contratar só o projeto, sem a fabricação?",
    answer:
      "Sim. Oferecemos projeto e cálculo estrutural como serviço independente, para clientes que já têm fabricante próprio ou preferem cotar a fabricação separadamente.",
  },
  {
    question: "Como funciona a garantia dos serviços?",
    answer:
      "Estruturas e máquinas fabricadas pela Vectum têm garantia contratual contra defeitos de fabricação e montagem, com prazo definido em contrato conforme o tipo de projeto.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Perguntas frequentes
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Dúvidas comuns antes de fechar um projeto
          </h2>
        </div>

        <dl className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-lg bg-white/5 px-2"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left"
                  >
                    <span className="font-heading text-lg font-medium text-foreground">
                      {faq.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-4 pb-5 text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
