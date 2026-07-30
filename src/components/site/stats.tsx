'use client'

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const STATS = [
  { value: 48, suffix: "h", label: "Retorno de orçamento" },
  { value: 100, suffix: "%", label: "Engenharia própria" },
  { value: 2, suffix: "", label: "Sócios à frente de cada projeto" },
  { value: 1, suffix: "", label: "Ponto de contato, do início ao fim" },
]

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 900
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-primary sm:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-4 py-8 text-center"
          >
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
