import Link from "next/link"
import { Cog, Mail, MapPin, Phone } from "lucide-react"

import { SERVICES } from "@/lib/services-data"

const COMPANY_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cog className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                METAL<span className="text-primary">PRO</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
              Engenharia mecânica, estruturas metálicas e fabricação
              industrial com equipe própria e projetos com ART.
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
                    className="text-sm text-brand-muted transition-colors hover:text-brand-foreground"
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
                    className="text-sm text-brand-muted transition-colors hover:text-brand-foreground"
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
            <ul className="mt-4 flex flex-col gap-3 text-sm text-brand-muted">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (11) 4002-8922
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                contato@metalpro.eng.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Rod. Anhanguera, km 32 — Osasco/SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MetalPro Engenharia. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00 &middot; CREA 000000000-0</p>
        </div>
      </div>
    </footer>
  )
}
