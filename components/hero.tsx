"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Wifi } from "lucide-react"
import { KapsabetMap } from "@/components/kapsabet-map"

const plans = [
  { label: "Home", value: "5-50 Mbps", price: "KES 1,500+" },
  { label: "Business", value: "30-100 Mbps", price: "KES 5,000+" },
  { label: "Security", value: "CCTV + intercom", price: "Quote" },
]

const proof = ["18+ covered points", "Eden Plaza office", "Local install team"]

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

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-5 lg:pb-18">
        <div className="grid min-h-[78svh] gap-7 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up">
              <span className="section-label rounded-sm bg-[var(--service-soft)] px-3 py-2 text-[var(--service-soft-ink)]">
                Seacom Networks
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                <MapPin className="h-4 w-4 text-[var(--service)]" />
                Eden Plaza, Kapsabet
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.02] tracking-normal text-[var(--ink)]">
              <span className="hero-line" style={{ animationDelay: "90ms" }}>
                Reliable internet
              </span>
              <span className="hero-line" style={{ animationDelay: "190ms" }}>
                for Kapsabet homes
              </span>
              <span className="hero-line" style={{ animationDelay: "290ms" }}>
                and businesses.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[var(--ink-soft)] opacity-0 animate-fade-up delay-200">
              Fiber plans, CCTV, and intercom installation from a local team you can call.
            </p>

            <div className="mt-7 grid max-w-2xl gap-2 opacity-0 animate-fade-up delay-300 sm:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.label}
                  className="rounded-md border border-[color-mix(in_oklch,var(--ink)_12%,transparent)] bg-[var(--paper)] p-4"
                >
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{plan.label}</p>
                  <p className="mt-2 text-lg font-bold leading-tight text-[var(--ink)]">{plan.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--signal)]">{plan.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 opacity-0 animate-fade-up delay-400 sm:flex-row">
              <Button
                onClick={scrollToPackages}
                size="lg"
                className="h-12 rounded-md bg-[var(--solid)] px-6 text-base font-bold text-[var(--solid-ink)] hover:bg-[var(--solid-hover)]"
              >
                Compare plans
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
              <a
                href="tel:+254707019898"
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] px-6 text-base font-bold text-[var(--ink)]"
              >
                <Phone className="h-4 w-4 text-[var(--signal)]" />
                Call
              </a>
            </div>
          </div>

          <aside className="opacity-0 animate-scale-in delay-300">
            <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_20px_64px_color-mix(in_oklch,var(--ink)_10%,transparent)]">
              <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] sm:grid-cols-[1fr_15rem]">
                <div className="relative min-h-[350px]">
                  <KapsabetMap />
                  <div className="absolute bottom-4 left-4 rounded-md bg-[var(--paper)] px-3 py-2 text-sm font-bold text-[var(--ink)] shadow-sm">
                    <span className="inline-flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-[var(--signal)]" />
                      Coverage map
                    </span>
                  </div>
                </div>

                <div className="grid bg-[var(--paper)]">
                  <div className="p-5">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Best first message</p>
                    <p className="mt-2 text-xl font-bold leading-tight text-[var(--ink)]">Building name + floor</p>
                  </div>
                  <div className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] p-5">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Desk number</p>
                    <a href="tel:+254707019898" className="mt-2 block text-2xl font-bold leading-tight text-[var(--ink)]">
                      0707 019 898
                    </a>
                  </div>
                  <div className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[var(--service-soft)] p-5 text-[var(--service-soft-ink)]">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em]">Route check</p>
                    <p className="mt-2 text-lg font-bold leading-tight">Survey before install</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] p-4">
                {proof.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-md bg-[var(--route)] px-3 py-2 text-sm font-bold text-[var(--ink)]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--signal)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
