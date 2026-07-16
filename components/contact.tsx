"use client"

import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const details = [
  [Phone, "0707 019 898"],
  [MessageCircle, "WhatsApp 0707 019 898"],
  [Mail, "info@seacomnetworks.co.ke"],
  [MapPin, "Eden Plaza, 3rd Floor"],
  [Clock3, "Mon-Fri 8-5, Sat 9-2"],
] as const

export function Contact() {
  return (
    <section id="contact" className="section bg-[var(--field)]" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] shadow-[0_24px_70px_color-mix(in_oklch,var(--ink)_12%,transparent)]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="section-label">Contact</p>
                <h2 id="contact-heading" className="mt-3 text-[clamp(2.7rem,7vw,5.8rem)] font-bold leading-[0.9] tracking-normal text-[var(--ink)]">
                  Ready to connect?
                </h2>
                <p className="mt-6 max-w-md text-xl font-semibold leading-8 text-[var(--ink-soft)]">
                  Send your building name and usage.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a href="tel:+254707019898" className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--solid)] px-5 font-bold text-[var(--solid-ink)]">
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/254707019898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--service)] px-5 font-bold text-[var(--service-ink)]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-[var(--solid)] p-6 text-[var(--solid-ink)] sm:p-8 lg:p-10">
                <p className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--signal-live)]">Details</p>
                <div className="mt-6 divide-y divide-[color-mix(in_oklch,var(--solid-ink)_16%,transparent)]">
                  {details.map(([Icon, value]) => (
                    <div key={value} className="flex items-center gap-4 py-4">
                      <Icon className="h-5 w-5 text-[var(--service)]" />
                      <p className="text-lg font-bold leading-6">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
