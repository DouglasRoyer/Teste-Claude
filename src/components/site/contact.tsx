'use client'

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(51) 99697-4808 / (51) 9929-4319",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "Vectum.engenaharia@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Santa Cruz do Sul e região — RS",
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "Seg. a Sex., 8h às 18h",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="contato" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Contato
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Solicite um orçamento
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Conte um pouco sobre o seu projeto e nossa equipe de engenharia
            retorna com uma análise técnica em até 1 dia útil.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="rounded-lg border border-border bg-background p-6 sm:p-8 lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold text-foreground">
                  Mensagem enviada
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Obrigado pelo contato. Nossa equipe de engenharia vai
                  analisar seu projeto e retornar em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nome"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="empresa"
                    className="text-sm font-medium text-foreground"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="telefone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label
                    htmlFor="mensagem"
                    className="text-sm font-medium text-foreground"
                  >
                    Descreva seu projeto
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? "Enviando..." : "Enviar solicitação"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Fale diretamente com a engenharia
              </h3>
              <dl className="mt-6 flex flex-col gap-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
