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
    title: "Galpões logísticos e industriais",
    spec: "Estrutura dimensionada conforme NBR 8800",
  },
  {
    slug: "cobertura-arco",
    icon: Layers,
    category: "Estruturas",
    tag: "Cobertura metálica",
    title: "Coberturas metálicas em arco ou treliça",
    spec: "Vãos livres sob medida",
  },
  {
    slug: "plataforma-elevacao",
    icon: Construction,
    category: "Estruturas",
    tag: "Plataforma industrial",
    title: "Plataformas de elevação e passarelas",
    spec: "Projeto com laudo e ART",
  },
  {
    slug: "silo-armazenagem",
    icon: Boxes,
    category: "Estruturas",
    tag: "Silo metálico",
    title: "Silos metálicos de armazenagem",
    spec: "Capacidade dimensionada por demanda",
  },
  {
    slug: "mezanino-industrial",
    icon: Warehouse,
    category: "Estruturas",
    tag: "Mezanino industrial",
    title: "Mezaninos para expansão de área útil",
    spec: "Reforço estrutural sob medida",
  },
  {
    slug: "transportador-mineracao",
    icon: Cog,
    category: "Máquinas",
    tag: "Máquina industrial",
    title: "Transportadores de correia",
    spec: "Para granéis e mineração",
  },
  {
    slug: "esteira-envase",
    icon: Gauge,
    category: "Máquinas",
    tag: "Linha de produção",
    title: "Esteiras e linhas de produção",
    spec: "Automação de envase e embalagem",
  },
  {
    slug: "guindaste-portico",
    icon: Anchor,
    category: "Máquinas",
    tag: "Equipamento de içamento",
    title: "Guindastes tipo pórtico",
    spec: "Para pátios de carga e descarga",
  },
  {
    slug: "skid-bombeio",
    icon: Cog,
    category: "Máquinas",
    tag: "Skid industrial",
    title: "Skids industriais de bombeio",
    spec: "Projeto conforme NR-13",
  },
]
