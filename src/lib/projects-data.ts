import {
  Factory,
  Layers,
  Boxes,
  Gauge,
  Construction,
  Cog,
  Warehouse,
  Anchor,
  type LucideIcon,
} from "lucide-react"

export type ProjectCategory = "Estruturas" | "Máquinas"

export interface Project {
  slug: string
  icon: LucideIcon
  category: ProjectCategory
  tag: string
  title: string
  spec: string
}

export const PROJECT_CATEGORIES: ProjectCategory[] = ["Estruturas", "Máquinas"]

export const PROJECTS: Project[] = [
  {
    slug: "galpao-logistico",
    icon: Factory,
    category: "Estruturas",
    tag: "Galpão industrial",
    title: "Galpão logístico de 4.200 m²",
    spec: "180 toneladas de aço",
  },
  {
    slug: "cobertura-arco",
    icon: Layers,
    category: "Estruturas",
    tag: "Cobertura metálica",
    title: "Cobertura em arco para pátio industrial",
    spec: "60m de vão livre",
  },
  {
    slug: "plataforma-elevacao",
    icon: Construction,
    category: "Estruturas",
    tag: "Plataforma industrial",
    title: "Plataforma de elevação e passarelas",
    spec: "Laudo ART incluso",
  },
  {
    slug: "silo-armazenagem",
    icon: Boxes,
    category: "Estruturas",
    tag: "Silo metálico",
    title: "Silo de armazenagem de grãos",
    spec: "2.500 m³ de capacidade",
  },
  {
    slug: "mezanino-industrial",
    icon: Warehouse,
    category: "Estruturas",
    tag: "Mezanino industrial",
    title: "Mezanino para expansão de centro de distribuição",
    spec: "1.100 m² de área útil",
  },
  {
    slug: "transportador-mineracao",
    icon: Cog,
    category: "Máquinas",
    tag: "Máquina industrial",
    title: "Transportador de correia para mineração",
    spec: "120m de extensão",
  },
  {
    slug: "esteira-envase",
    icon: Gauge,
    category: "Máquinas",
    tag: "Linha de produção",
    title: "Esteira de linha de envase automatizada",
    spec: "3 turnos contínuos",
  },
  {
    slug: "guindaste-portico",
    icon: Anchor,
    category: "Máquinas",
    tag: "Equipamento de içamento",
    title: "Guindaste tipo pórtico para pátio de cargas",
    spec: "12 toneladas de capacidade",
  },
  {
    slug: "skid-bombeio",
    icon: Cog,
    category: "Máquinas",
    tag: "Skid industrial",
    title: "Skid de bombeio para planta química",
    spec: "Projeto conforme NR-13",
  },
]
