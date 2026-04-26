"use client"

import { Building2, Clock3, Headphones, MapPinned, UsersRound } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const facts = [
  { icon: Building2, label: "Office", value: "Eden Plaza, 3rd Floor" },
  { icon: MapPinned, label: "Area", value: "Kapsabet and Nandi routes" },
  { icon: UsersRound, label: "Customers", value: "Homes, offices, shops" },
]

const notes = [
  { icon: Clock3, text: "Mon-Fri 8-5, Sat 9-2" },
  { icon: Headphones, text: "Phone and WhatsApp support" },
]

export function About() {
  return (
    <section id="about" className="section-sm bg-[var(--field)]" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="grid gap-8 rounded-lg border border-[color-mix(in_oklch,var(--ink)_12%,transparent)] bg-[var(--paper)] p-5 sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="section-label">Local proof</p>
              <h2 id="about-heading" className="mt-3 max-w-xl text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[0.94] tracking-normal text-[var(--ink)]">
                A visible Kapsabet team.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {notes.map((note) => (
                  <span
                    key={note.text}
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--service-soft)] px-3 py-2 text-sm font-bold text-[var(--service-soft-ink)]"
                  >
                    <note.icon className="h-4 w-4 text-[var(--signal)]" />
                    {note.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_12%,transparent)] bg-[color-mix(in_oklch,var(--ink)_8%,transparent)] md:grid-cols-3">
              {facts.map((item) => (
                <article key={item.label} className="bg-[var(--field)] p-5">
                  <item.icon className="h-6 w-6 text-[var(--signal)]" />
                  <p className="mt-7 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">{item.label}</p>
                  <p className="mt-2 text-xl font-bold leading-tight text-[var(--ink)]">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
