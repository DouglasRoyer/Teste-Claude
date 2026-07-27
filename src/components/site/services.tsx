import {
  Factory,
  PencilRuler,
  Cpu,
  Ruler,
  Wrench,
  Truck,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SERVICES = [
  {
    icon: Factory,
    title: "Estruturas metálicas industriais",
    description:
      "Projeto, corte, dobra e solda de galpões, mezaninos, coberturas e plataformas em aço carbono e inox, dimensionados conforme NBR 8800.",
  },
  {
    icon: Cpu,
    title: "Projetos mecânicos de máquinas",
    description:
      "Desenvolvimento de máquinas e equipamentos sob medida: transportadores, esteiras, silos, dispositivos e linhas de produção.",
  },
  {
    icon: PencilRuler,
    title: "Modelagem 3D e detalhamento",
    description:
      "Modelagem em SolidWorks, Inventor e AutoCAD, com desenhos de fabricação, isométricos e listas de materiais prontos para produção.",
  },
  {
    icon: Ruler,
    title: "Cálculo e dimensionamento estrutural",
    description:
      "Análise estrutural e de elementos finitos (CAE) para validar resistência, fadiga e deformação antes da fabricação.",
  },
  {
    icon: Wrench,
    title: "Manutenção e retrofit",
    description:
      "Modernização de máquinas, troca de componentes e adequação de equipamentos a normas de segurança (NR-12) e novos processos.",
  },
  {
    icon: Truck,
    title: "Fabricação e montagem industrial",
    description:
      "Produção em planta própria e montagem em campo com equipe técnica e supervisão de engenharia até a entrega final.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
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
