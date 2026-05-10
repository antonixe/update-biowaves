"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Landmark } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const homePackages = [
  ["Basic", "5 Mbps", "KES 1,500"],
  ["Standard", "10 Mbps", "KES 2,000"],
  ["Premium", "20 Mbps", "KES 2,500"],
  ["Advanced", "30 Mbps", "KES 3,000"],
  ["Ultimate", "50 Mbps", "KES 3,500"],
]

const businessPackages = [
  ["Starter", "30 Mbps", "KES 5,000"],
  ["Professional", "50 Mbps", "KES 8,000"],
  ["Enterprise", "100 Mbps", "KES 20,000"],
]

export function Packages() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home")
  const packages = activeTab === "home" ? homePackages : businessPackages

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="packages" className="section bg-[var(--route)]" aria-labelledby="packages-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-label">Monthly plans</p>
              <h2 id="packages-heading" className="section-title mt-3">Pick a speed.</h2>
            </div>
            <div className="inline-grid w-fit grid-cols-2 rounded-md border border-[color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--paper)] p-1">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "business", label: "Business", icon: Landmark },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "home" | "business")}
                  className={`focus-ring inline-flex h-10 items-center justify-center gap-2 rounded px-4 text-sm font-bold ${
                    activeTab === tab.id ? "bg-[var(--solid)] text-[var(--solid-ink)]" : "text-[var(--ink)] hover:bg-[var(--route)]"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={80}>
          <div className="mt-8 overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)]">
            {packages.map(([name, speed, price], index) => (
              <button
                key={name}
                onClick={scrollToContact}
                className={`focus-ring grid w-full gap-3 border-b border-[color-mix(in_oklch,var(--ink)_12%,transparent)] p-5 text-left last:border-b-0 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center ${
                  index === 3 || (activeTab === "business" && index === 1) ? "bg-[var(--service-soft)]" : "bg-[var(--paper)]"
                }`}
              >
                <span className="text-2xl font-bold text-[var(--ink)]">{name}</span>
                <span className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--signal)]">{speed}</span>
                <span className="text-xl font-bold text-[var(--ink)]">{price}</span>
                <span className="inline-flex items-center gap-2 font-bold text-[var(--ink)]">
                  Connect
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={140}>
          <div className="mt-6 flex flex-col gap-4 rounded-lg bg-[var(--solid)] p-5 text-[var(--solid-ink)] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-bold">Unlimited data. Local support. Site survey available.</p>
            <Button onClick={scrollToContact} className="h-11 rounded-md bg-[var(--service)] font-bold text-[var(--service-ink)] hover:brightness-105">
              Request install
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
