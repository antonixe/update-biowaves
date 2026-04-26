"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, MessageCircle, Phone, Router, Wifi } from "lucide-react"
import { KapsabetMap } from "@/components/kapsabet-map"

const quickFacts = [
  ["Home", "5-50 Mbps"],
  ["Business", "30-100 Mbps"],
  ["Desk", "Eden Plaza"],
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
    <section id="home" className="relative overflow-hidden bg-[var(--field)] pt-24 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-2 bg-[var(--service)]" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-5 lg:min-h-[82svh] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-20">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_24px_70px_color-mix(in_oklch,var(--ink)_10%,transparent)]">
            <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] sm:grid-cols-3">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="bg-[var(--paper)] p-4">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{label}</p>
                  <p className="mt-1 text-xl font-bold text-[var(--ink)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <KapsabetMap compact />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[var(--paper)] px-3 py-2 font-bold text-[var(--ink)] shadow-sm">
                  <Wifi className="h-4 w-4 text-[var(--signal)]" />
                  18+ covered points
                </span>
                <a
                  href="tel:+254707019898"
                  className="inline-flex w-fit items-center gap-2 rounded-md bg-[color-mix(in_oklch,var(--ink)_94%,var(--signal))] px-3 py-2 font-bold text-[var(--stone)] shadow-sm"
                >
                  <Phone className="h-4 w-4 text-[var(--service)]" />
                  0707 019 898
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-6 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up">
            <span className="section-label rounded-sm bg-[var(--service-soft)] px-3 py-2 text-[var(--service-ink)]">Seacom route desk</span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
              <MapPin className="h-4 w-4 text-[var(--service)]" />
              Kapsabet, Nandi County
            </span>
          </div>

          <h1 className="max-w-3xl text-[clamp(2.8rem,7.4vw,6.1rem)] font-bold leading-[0.92] tracking-normal text-[var(--ink)] opacity-0 animate-fade-up delay-100">
            Local fiber, priced plainly.
          </h1>

          <div className="mt-7 max-w-2xl border-y border-[color-mix(in_oklch,var(--ink)_14%,transparent)] py-5 opacity-0 animate-fade-up delay-200">
            <p className="text-xl font-semibold leading-8 text-[var(--ink-soft)]">
              Internet, CCTV, and intercom installs from Eden Plaza. Check your building, pick a speed, call the desk.
            </p>
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
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-lg bg-[var(--paper)] p-4 text-[var(--ink)] opacity-0 animate-fade-up delay-400">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--route)] text-[var(--signal)]">
              <Router className="h-5 w-5" />
            </span>
            <p className="text-sm font-bold leading-6">
              Home plans start at KES 1,500. Business plans start at KES 5,000.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
