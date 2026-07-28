import {
  Factory,
  PencilRuler,
  Cpu,
  Ruler,
  Wrench,
  Truck,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  includes: string[]
}

export const SERVICES: Service[] = [
  {
    slug: "estruturas-metalicas",
    icon: Factory,
    title: "Estruturas metálicas industriais",
    description:
      "Projeto, corte, dobra e solda de galpões, mezaninos, coberturas e plataformas em aço carbono e inox, dimensionados conforme NBR 8800.",
    includes: [
      "Levantamento de cargas e cálculo estrutural",
      "Fabricação em planta própria com corte a laser e dobra CNC",
      "Montagem em campo com equipe própria",
      "ART de projeto e execução",
    ],
  },
  {
    slug: "projetos-mecanicos",
    icon: Cpu,
    title: "Projetos mecânicos de máquinas",
    description:
      "Desenvolvimento de máquinas e equipamentos sob medida: transportadores, esteiras, silos, dispositivos e linhas de produção.",
    includes: [
      "Especificação técnica e conceito da máquina",
      "Dimensionamento mecânico de componentes",
      "Fabricação de peças e conjuntos soldados",
      "Testes e comissionamento em planta",
    ],
  },
  {
    slug: "modelagem-3d",
    icon: PencilRuler,
    title: "Modelagem 3D e detalhamento",
    description:
      "Modelagem em SolidWorks, Inventor e AutoCAD, com desenhos de fabricação, isométricos e listas de materiais prontos para produção.",
    includes: [
      "Modelo 3D paramétrico revisável com o cliente",
      "Desenhos de fabricação e detalhamento de solda",
      "Lista de materiais (BOM) para compras",
      "Isométricos para montagem em campo",
    ],
  },
  {
    slug: "calculo-estrutural",
    icon: Ruler,
    title: "Cálculo e dimensionamento estrutural",
    description:
      "Análise estrutural e de elementos finitos (CAE) para validar resistência, fadiga e deformação antes da fabricação.",
    includes: [
      "Análise por elementos finitos (CAE)",
      "Verificação de fadiga e vida útil de componentes",
      "Memorial de cálculo assinado por engenheiro CREA",
      "Relatório técnico para aprovação em obra",
    ],
  },
  {
    slug: "manutencao-retrofit",
    icon: Wrench,
    title: "Manutenção e retrofit",
    description:
      "Modernização de máquinas, troca de componentes e adequação de equipamentos a normas de segurança (NR-12) e novos processos.",
    includes: [
      "Diagnóstico técnico do equipamento existente",
      "Adequação a NR-12 e normas de segurança",
      "Substituição de componentes críticos",
      "Plano de manutenção preventiva",
    ],
  },
  {
    slug: "fabricacao-montagem",
    icon: Truck,
    title: "Fabricação e montagem industrial",
    description:
      "Produção em planta própria e montagem em campo com equipe técnica e supervisão de engenharia até a entrega final.",
    includes: [
      "Produção em planta própria com controle de qualidade",
      "Transporte e içamento de estruturas e equipamentos",
      "Montagem por equipe própria certificada",
      "Supervisão de engenharia até o comissionamento",
    ],
  },
]
