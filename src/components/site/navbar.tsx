'use client'

import { useState } from "react"
import { Menu, X, Cog } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/95 backdrop-blur supports-[backdrop-filter]:bg-brand/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-brand-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Cog className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight">
            METAL<span className="text-primary">PRO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="default">
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-brand-foreground lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-brand transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="default" className="mt-2 w-full">
              <a href="#contato" onClick={() => setOpen(false)}>
                Solicitar Orçamento
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
