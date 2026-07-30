import Link from "next/link"
import { Cog, Mail, MapPin, Phone } from "lucide-react"

import { SERVICES } from "@/lib/services-data"

const COMPANY_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cog className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                VECTUM<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Engenharia mecânica e estruturas metálicas sob medida, com
              atendimento direto dos sócios-fundadores.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Serviços
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos#${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (51) 99697-4808
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (51) 9929-4319
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                Vectum.engenaharia@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Santa Cruz do Sul e região — RS
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Vectum Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
