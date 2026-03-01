"use client"

import { MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function About() {
  const stats = [
    { value: "5+", label: "Years" },
    { value: "1K+", label: "Customers" },
    { value: "18+", label: "Locations" },
    { value: "99.9%", label: "Uptime" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-stone-50 dark:bg-neutral-900" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow */}
        <ScrollAnimation>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-6">About</p>
        </ScrollAnimation>

        {/* Short punchy heading */}
        <ScrollAnimation delay={100}>
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight leading-[1.1] mb-4 max-w-lg">
            Local fiber. Real people.
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={150}>
          <p className="text-base text-neutral-500 dark:text-neutral-400 mb-16 max-w-md">
            Kapsabet-based. 5 years connecting Nandi County.
          </p>
        </ScrollAnimation>

        {/* Stats row — the main content */}
        <ScrollAnimation delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-10 border-y border-neutral-200 dark:border-neutral-800 mb-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-neutral-900 dark:text-white leading-none">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Location — simple one-liner */}
        <ScrollAnimation delay={300}>
          <address className="not-italic flex items-center gap-3">
            <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Eden Plaza, 3rd Floor, Kapsabet</span>
          </address>
        </ScrollAnimation>
      </div>
    </section>
  )
}
