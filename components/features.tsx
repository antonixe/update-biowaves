"use client"

import { ClipboardCheck, Headphones, Infinity, Wrench } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const items = [
  { icon: Infinity, title: "Unlimited data", text: "No daily caps." },
  { icon: ClipboardCheck, title: "Site survey", text: "Building and route checked first." },
  { icon: Wrench, title: "Clean install", text: "Cable, router, speed test." },
  { icon: Headphones, title: "Local support", text: "Phone and WhatsApp desk." },
]

export function Features() {
  return (
    <section id="features" className="section bg-[var(--paper)]" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="flex flex-col gap-4 border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">How it works</p>
              <h2 id="features-heading" className="section-title mt-3 max-w-2xl">Simple install path.</h2>
            </div>
            <p className="max-w-md text-lg font-semibold leading-7 text-[var(--ink-soft)]">
              Confirm coverage. Pick speed. Install. Get support nearby.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[color-mix(in_oklch,var(--ink)_10%,transparent)] md:grid-cols-4">
          {items.map((item, index) => (
            <ScrollAnimation key={item.title} delay={index * 50}>
              <article className="min-h-full bg-[var(--field)] p-5">
                <div className="flex items-center justify-between gap-4">
                  <item.icon className="h-6 w-6 text-[var(--signal)]" />
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold leading-none text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-base font-semibold leading-6 text-[var(--ink-soft)]">{item.text}</p>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
