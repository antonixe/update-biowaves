"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, MapPin, MessageCircle, Phone, Router, ShieldCheck, Wifi } from "lucide-react"
import { KapsabetMap } from "@/components/kapsabet-map"

const services = [
  { label: "Home fiber", value: "5-50 Mbps" },
  { label: "Business fiber", value: "30-100 Mbps" },
  { label: "Security", value: "CCTV + intercom" },
]

const installSteps = ["Building check", "Site survey", "Clean install"]

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
        <div className="grid min-h-[82svh] gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <aside className="order-2 grid gap-px overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] lg:order-1">
            <div className="bg-[color-mix(in_oklch,var(--ink)_94%,var(--signal))] p-5 text-[var(--stone)]">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--signal-live)]">Direct desk</p>
              <a href="tel:+254707019898" className="mt-3 flex items-center gap-3 text-3xl font-bold leading-none">
                <Phone className="h-7 w-7 text-[var(--service)]" />
                0707 019 898
              </a>
            </div>

            {services.map((item) => (
              <div key={item.label} className="bg-[var(--paper)] p-5">
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{item.label}</p>
                <p className="mt-2 text-2xl font-bold leading-none text-[var(--ink)]">{item.value}</p>
              </div>
            ))}

            <div className="bg-[var(--service-soft)] p-5 text-[var(--service-soft-ink)]">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em]">Office</p>
              <p className="mt-2 text-xl font-bold leading-tight">Eden Plaza, 3rd Floor</p>
            </div>
          </aside>

          <div className="order-1 overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_24px_70px_color-mix(in_oklch,var(--ink)_10%,transparent)] lg:order-2">
            <div className="grid min-h-full lg:grid-rows-[auto_1fr_auto]">
              <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] sm:grid-cols-[1fr_auto]">
                <div className="bg-[var(--paper)] p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-up">
                    <span className="section-label rounded-sm bg-[var(--service-soft)] px-3 py-2 text-[var(--service-soft-ink)]">
                      Kapsabet route desk
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                      <MapPin className="h-4 w-4 text-[var(--service)]" />
                      Nandi County
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-4xl text-[clamp(2.7rem,7vw,6.25rem)] font-bold leading-[0.9] tracking-normal text-[var(--ink)] opacity-0 animate-fade-up delay-100">
                    Can your building get Seacom?
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] sm:w-64 sm:grid-cols-1">
                  <div className="bg-[var(--paper)] p-5">
                    <Building2 className="h-5 w-5 text-[var(--signal)]" />
                    <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Coverage</p>
                    <p className="mt-1 text-xl font-bold text-[var(--ink)]">18+ points</p>
                  </div>
                  <div className="bg-[var(--paper)] p-5">
                    <ShieldCheck className="h-5 w-5 text-[var(--signal)]" />
                    <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Add-ons</p>
                    <p className="mt-1 text-xl font-bold text-[var(--ink)]">Security installs</p>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px]">
                <KapsabetMap />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[var(--paper)] px-3 py-2 font-bold text-[var(--ink)] shadow-sm">
                    <Wifi className="h-4 w-4 text-[var(--signal)]" />
                    Send building name
                  </span>
                  <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[color-mix(in_oklch,var(--ink)_94%,var(--signal))] px-3 py-2 font-bold text-[var(--stone)] shadow-sm">
                    <Router className="h-4 w-4 text-[var(--service)]" />
                    Survey before install
                  </span>
                </div>
              </div>

              <div className="grid gap-px bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] lg:grid-cols-[1fr_auto]">
                <div className="bg-[var(--paper)] p-5 sm:p-7">
                  <p className="max-w-2xl text-lg font-semibold leading-7 text-[var(--ink-soft)]">
                    Fiber plans, CCTV, and intercom installation from a local Kapsabet team.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                </div>

                <div className="grid bg-[var(--paper)] sm:grid-cols-3 lg:w-[28rem]">
                  {installSteps.map((step, index) => (
                    <div key={step} className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] p-4 sm:border-l sm:border-t-0">
                      <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-bold leading-5 text-[var(--ink)]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
