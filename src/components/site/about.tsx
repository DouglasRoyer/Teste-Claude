import { Cog, MapPin, Users } from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Atendimento direto dos sócios",
    description:
      "Você fala com quem projeta e executa, sem intermediários, do orçamento à entrega.",
  },
  {
    icon: Cog,
    title: "Engenharia própria",
    description:
      "Projeto mecânico, cálculo estrutural e detalhamento feitos internamente pela nossa equipe.",
  },
  {
    icon: MapPin,
    title: "Foco regional",
    description:
      "Atendimento dedicado a Santa Cruz do Sul e região, com visitas técnicas e prazos ágeis.",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Sobre a Vectum
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Uma empresa nova, com engenharia séria desde o primeiro projeto
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                A Vectum Engenharia nasce da parceria entre{" "}
                <span className="font-semibold text-foreground">
                  Douglas Royer
                </span>{" "}
                e{" "}
                <span className="font-semibold text-foreground">
                  Rodrigo Luiz
                </span>
                , unindo projeto mecânico, cálculo estrutural e fabricação de
                estruturas metálicas em um só lugar.
              </p>
              <p>
                Por sermos uma empresa nova, cada projeto recebe atenção
                direta dos sócios-fundadores — da primeira conversa até a
                entrega em obra, atendendo Santa Cruz do Sul e região.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-lg border border-border bg-muted/30 p-6 sm:col-span-1"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
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
