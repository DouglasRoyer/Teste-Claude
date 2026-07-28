import type { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-brand relative overflow-hidden text-brand-foreground">
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <span className="text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
        <h1 className="font-heading mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}
