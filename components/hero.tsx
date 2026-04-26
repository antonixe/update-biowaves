"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, MessageCircle, Phone, Wifi } from "lucide-react"
import { KapsabetMap } from "@/components/kapsabet-map"

const serviceRows = [
  { label: "Home fiber", value: "5-50 Mbps", note: "from KES 1,500" },
  { label: "Business", value: "30-100 Mbps", note: "from KES 5,000" },
  { label: "Security", value: "CCTV + intercom", note: "quoted on site" },
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
    <section id="home" className="relative overflow-hidden bg-[var(--field)] pt-20 lg:pt-24">
      <div className="absolute inset-x-0 top-0 h-2 bg-[var(--service)]" />

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-5 lg:pb-20">
        <div className="grid min-h-[82svh] gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up">
              <span className="section-label rounded-sm bg-[var(--service-soft)] px-3 py-2 text-[var(--service-soft-ink)]">
                Kapsabet fiber desk
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                <MapPin className="h-4 w-4 text-[var(--service)]" />
                Eden Plaza, 3rd Floor
              </span>
            </div>

            <h1 className="max-w-4xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.88] tracking-normal text-[var(--ink)] opacity-0 animate-fade-up delay-100">
              Internet for buildings Seacom can actually reach.
            </h1>

            <div className="mt-8 grid max-w-3xl gap-px overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_13%,transparent)] bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] opacity-0 animate-fade-up delay-200 sm:grid-cols-3">
              {serviceRows.map((item) => (
                <div key={item.label} className="bg-[var(--paper)] p-4">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{item.label}</p>
                  <p className="mt-2 text-xl font-bold leading-tight text-[var(--ink)]">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink-soft)]">{item.note}</p>
                </div>
              ))}
            </div>

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
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--service)] px-6 text-base font-bold text-[var(--service-ink)]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp coverage
              </a>
              <a
                href="tel:+254707019898"
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] px-6 text-base font-bold text-[var(--ink)]"
              >
                <Phone className="h-4 w-4 text-[var(--signal)]" />
                0707 019 898
              </a>
            </div>
          </div>

          <aside className="opacity-0 animate-scale-in delay-300">
            <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_24px_70px_color-mix(in_oklch,var(--ink)_10%,transparent)]">
              <div className="relative">
                <KapsabetMap />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-md bg-[var(--paper)] px-3 py-2 text-sm font-bold text-[var(--ink)] shadow-sm">
                    <Wifi className="h-4 w-4 text-[var(--signal)]" />
                    18+ covered points
                  </span>
                  <span className="hidden rounded-md bg-[color-mix(in_oklch,var(--ink)_94%,var(--signal))] px-3 py-2 text-sm font-bold text-[var(--stone)] shadow-sm sm:inline-flex">
                    Map: Kapsabet
                  </span>
                </div>
              </div>
              <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] sm:grid-cols-2">
                <div className="bg-[var(--paper)] p-4">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">First message</p>
                  <p className="mt-2 text-base font-bold text-[var(--ink)]">Building name + floor</p>
                </div>
                <div className="bg-[var(--paper)] p-4">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Next step</p>
                  <p className="mt-2 text-base font-bold text-[var(--ink)]">Quick route check</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
