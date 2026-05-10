"use client"

import { ArrowRight, Camera, PhoneCall, Radio } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const products = [
  ["Hikvision CCTV", "8CH, HD, night vision", "KES 15,000", Camera],
  ["IP Intercom", "Video, audio, mobile", "KES 11,099", PhoneCall],
  ["Wireless Intercom", "1 km, weatherproof", "KES 20,044", Radio],
]

export function Products() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="section bg-[var(--paper)]" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="flex flex-col gap-4 border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Security</p>
              <h2 id="products-heading" className="section-title mt-3">Add-ons we install.</h2>
            </div>
            <p className="max-w-md text-lg font-semibold leading-7 text-[var(--ink-soft)]">
              Quote security with the internet survey.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] lg:grid-cols-3">
          {products.map(([name, spec, price, Icon], index) => (
            <ScrollAnimation key={name as string} delay={index * 70}>
              <article className="min-h-full bg-[var(--field)] p-5">
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-[var(--signal)]" />
                  <span className="rounded bg-[var(--service)] px-2 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--service-ink)]">
                    From
                  </span>
                </div>
                <h3 className="mt-8 text-3xl font-bold leading-none text-[var(--ink)]">{name}</h3>
                <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--ink-soft)]">{spec}</p>
                <button
                  onClick={scrollToContact}
                  className="focus-ring mt-8 flex w-full items-center justify-between rounded-md bg-[var(--solid)] px-4 py-3 text-left font-bold text-[var(--solid-ink)]"
                >
                  <span>{price}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
