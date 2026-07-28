import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="bg-brand text-brand-foreground relative flex flex-1 items-center overflow-hidden">
        <div className="bg-blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Compass className="h-7 w-7" aria-hidden="true" />
          </span>
          <span className="font-heading mt-6 text-7xl font-bold text-primary">
            404
          </span>
          <h1 className="font-heading mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-4 max-w-md text-lg text-brand-muted">
            O endereço acessado não existe ou foi movido. Volte para a página
            inicial ou fale com nossa equipe de engenharia.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                Voltar ao início
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-brand-foreground hover:bg-white/10 hover:text-brand-foreground"
            >
              <Link href="/#contato">Falar com a engenharia</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
