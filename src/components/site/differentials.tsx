import { ShieldCheck, Gauge, Award, Users } from "lucide-react"

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Engenharia própria e ART",
    description:
      "Equipe de engenheiros mecânicos e civis registrados no CREA, com ART emitida em todos os projetos estruturais.",
  },
  {
    icon: Award,
    title: "Conformidade normativa",
    description:
      "Projetos e fabricação seguindo NBR 8800, NBR 14762, NR-12 e requisitos de qualidade ISO 9001.",
  },
  {
    icon: Gauge,
    title: "Prazo em contrato",
    description:
      "Cronograma físico-financeiro definido desde o orçamento, com acompanhamento semanal de obra e fabricação.",
  },
  {
    icon: Users,
    title: "Suporte pós-entrega",
    description:
      "Manutenção preventiva, peças de reposição e atendimento técnico após a instalação e comissionamento.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Por que a MetalPro
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Precisão de engenharia, do papel ao aço
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Unimos cálculo estrutural, modelagem 3D e fabricação própria
              para reduzir retrabalho, cumprir prazos e entregar equipamentos
              que operam com segurança por décadas.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["NBR 8800", "NBR 14762", "NR-12", "ISO 9001", "CREA/ART"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {DIFFERENTIALS.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
