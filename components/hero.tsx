"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, MessageCircle, Phone, Wifi } from "lucide-react"
import { KapsabetMap } from "@/components/kapsabet-map"

const quickFacts = [
  ["Home", "5-50 Mbps"],
  ["Business", "30-100 Mbps"],
  ["Support", "Kapsabet desk"],
]

export function Hero() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages")
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 88
      window.scrollTo({ top: pos, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--field)] pt-24 lg:pt-32">
      <div className="absolute inset-x-0 top-0 h-2 bg-[var(--service)]" />
      <div className="mx-auto grid min-h-[82svh] max-w-7xl gap-8 px-4 pb-14 sm:px-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-20">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up">
            <span className="section-label rounded-sm bg-[var(--service-soft)] px-3 py-2 text-[var(--ink)]">Kapsabet ISP</span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
              <MapPin className="h-4 w-4 text-[var(--service)]" />
              Eden Plaza, 3rd Floor
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(3.1rem,9vw,6.9rem)] font-bold leading-[0.9] tracking-normal text-[var(--ink)] opacity-0 animate-fade-up delay-100">
            Fiber internet in Kapsabet.
          </h1>

          <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-[var(--ink-soft)] opacity-0 animate-fade-up delay-200">
            Local installation and support for homes, offices, apartments, schools, clinics, and shops.
          </p>

          <div className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-up delay-300 sm:flex-row">
            <Button
              onClick={scrollToPackages}
              size="lg"
              className="h-12 rounded-md bg-[var(--ink)] px-6 text-base font-bold text-[var(--stone)] hover:bg-[color-mix(in_oklch,var(--ink)_88%,var(--signal))]"
            >
              See plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="https://wa.me/254707019898"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--service)] px-6 text-base font-bold text-[var(--ink)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <aside className="opacity-0 animate-scale-in delay-300">
          <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_24px_70px_color-mix(in_oklch,var(--ink)_12%,transparent)]">
            <div className="bg-[color-mix(in_oklch,var(--ink)_94%,var(--signal))] p-5 text-[var(--stone)]">
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--signal-live)]">Call now</p>
              <a href="tel:+254707019898" className="mt-2 flex items-center gap-3 text-3xl font-bold leading-none sm:text-5xl">
                <Phone className="h-8 w-8 text-[var(--service)]" />
                0707 019 898
              </a>
            </div>

            <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_12%,transparent)] sm:grid-cols-3">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="bg-[var(--paper)] p-4">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{label}</p>
                  <p className="mt-1 text-xl font-bold text-[var(--ink)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <KapsabetMap compact />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[var(--paper)] px-3 py-2 font-bold text-[var(--ink)] shadow-sm">
                  <Wifi className="h-4 w-4 text-[var(--signal)]" />
                  18+ covered points
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
