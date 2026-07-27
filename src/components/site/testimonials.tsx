import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "A MetalPro assumiu o projeto e a fabricação do nosso galpão logístico com um cronograma apertado e entregou dentro do prazo, sem surpresas no orçamento.",
    name: "Marcos Ferreira",
    role: "Diretor de Operações, Grupo Logivix",
  },
  {
    quote:
      "O retrofit da nossa linha de envase foi conduzido com muita seriedade técnica. A equipe de engenharia acompanhou cada etapa até o comissionamento.",
    name: "Carla Menezes",
    role: "Gerente Industrial, Alfa Alimentos",
  },
  {
    quote:
      "Contratamos o cálculo estrutural e a fabricação de uma cobertura metálica complexa. O nível de detalhamento do projeto 3D evitou retrabalho em obra.",
    name: "Rodrigo Almeida",
    role: "Engenheiro Responsável, Construtora Vetor",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Depoimentos
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Quem já construiu com a gente
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-lg border border-border bg-muted/30 p-8"
            >
              <Quote className="h-8 w-8 text-primary/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                  aria-hidden="true"
                >
                  {initials(testimonial.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
