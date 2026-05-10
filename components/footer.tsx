"use client"

import { ArrowUp, Phone } from "lucide-react"

const nav = [
  { name: "Plans", href: "#packages" },
  { name: "Security", href: "#products" },
  { name: "Coverage", href: "#coverage" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollToSection = (href: string) => document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="bg-[var(--solid)] text-[var(--solid-ink)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <div className="flex flex-col gap-5 border-y border-[color-mix(in_oklch,var(--solid-ink)_14%,transparent)] py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-bold">Seacom Networks</p>
            <p className="mt-2 font-semibold text-[var(--solid-soft-ink)]">Eden Plaza, Kapsabet</p>
          </div>
          <a href="tel:+254707019898" className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--service)] px-5 font-bold text-[var(--service-ink)]">
            <Phone className="h-4 w-4" />
            0707 019 898
          </a>
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-3">
            {nav.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="focus-ring rounded-sm font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--solid-soft-ink)] hover:text-[var(--solid-ink)]"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-5">
            <p className="font-mono text-[0.7rem] text-[color-mix(in_oklch,var(--solid-ink)_58%,transparent)]">(c) 2026</p>
            <button
              onClick={scrollToTop}
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-[color-mix(in_oklch,var(--solid-ink)_16%,transparent)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
