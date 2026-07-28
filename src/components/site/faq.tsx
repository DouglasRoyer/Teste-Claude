'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const FAQS = [
  {
    question: "Quais documentos de engenharia vocês entregam?",
    answer:
      "Entregamos ART de projeto e execução, memorial de cálculo estrutural, desenhos de fabricação e montagem, e o as built ao final da obra.",
  },
  {
    question: "Vocês atendem fora do estado de São Paulo?",
    answer:
      "Sim. Já executamos projetos em todas as regiões do Brasil. O deslocamento de equipe e logística de transporte são incluídos no orçamento.",
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
      "Estruturas e máquinas fabricadas pela MetalPro têm garantia contratual contra defeitos de fabricação e montagem, com prazo definido em contrato conforme o tipo de projeto.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Perguntas frequentes
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Dúvidas comuns antes de fechar um projeto
          </h2>
        </div>

        <dl className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-lg border border-border bg-background"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                        isOpen && "rotate-180",
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
                    <p className="px-6 pb-5 text-base leading-relaxed text-muted-foreground">
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
