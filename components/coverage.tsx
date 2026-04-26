"use client"

import { ArrowRight, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { KapsabetMap } from "@/components/kapsabet-map"

const locations = [
  "Grandview Plaza",
  "Elgon Plaza",
  "Shakahola New Soko Areas",
  "Sonoiya Plaza",
  "Tiryo Plaza",
  "Chebut Factory",
  "NXTON Sports Building",
  "Gorissa Mall",
  "Eden Plaza",
  "Barngetuny Plaza",
  "Naivas Building",
  "Kapsabet Hospital",
  "Sogam Plaza",
  "Sheraton Building",
  "Arwos",
  "Toiyoi Plaza",
  "KEBEN Building",
  "Baraton",
]

export function Coverage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="coverage" className="section bg-[var(--route)]" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="grid gap-6 border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] pb-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-label">Coverage</p>
              <h2 id="coverage-heading" className="section-title mt-3 max-w-2xl">
                Kapsabet coverage check.
              </h2>
            </div>
            <button
              onClick={scrollToContact}
              className="focus-ring inline-flex h-12 w-fit items-center gap-2 rounded-md bg-[var(--service)] px-5 font-bold text-[var(--service-ink)]"
            >
              Confirm building
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollAnimation>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollAnimation delay={80}>
            <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)]">
              <KapsabetMap />
              <div className="flex flex-col gap-2 border-t border-[color-mix(in_oklch,var(--ink)_12%,transparent)] p-4 text-sm font-semibold text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between">
                <span>Kapsabet center: 0.20387, 35.105</span>
                <a
                  href="https://www.openstreetmap.org/?mlat=0.20387&mlon=35.105#map=15/0.20387/35.105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--signal)] hover:text-[var(--ink)]"
                >
                  View on OpenStreetMap
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid gap-2 sm:grid-cols-2">
            {locations.map((location, index) => (
              <ScrollAnimation key={location} delay={index * 16}>
                <div className="flex min-h-12 items-center gap-3 rounded-md border border-[color-mix(in_oklch,var(--ink)_12%,transparent)] bg-[var(--paper)] px-4 py-3 text-sm font-bold text-[var(--ink)]">
                  <MapPin className="h-4 w-4 shrink-0 text-[var(--service)]" />
                  {location}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
