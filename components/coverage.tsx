"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Coverage() {
  const locations = [
    "Grandview Plaza",
    "Elgon Plaza",
    "Shakahola New Soko Areas",
    "Sonoiya Plaza",
    "Tiryo Plaza",
    "Chebut Factory",
    "NXTON Sports Building",
    "Gorissa Mall",
    "EDEN PLAZA",
    "Barngetuny Plaza",
    "Naivas Building Kapsabet",
    "Kapsabet Hospital",
    "Sogam Plaza",
    "Sheraton Building",
    "Arwos",
    "Toiyoi Plaza",
    "KEBEN Building",
    "Baraton",
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="coverage" className="section bg-white dark:bg-neutral-950" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-neutral-500 mb-3">Coverage</p>
            <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
              18+ locations in Kapsabet
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Fiber-ready buildings throughout Nandi County. We're constantly expanding.
            </p>
          </div>
        </ScrollAnimation>

        {/* Locations Grid */}
        <ScrollAnimation delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mb-12" role="list" aria-label="Coverage locations">
            {locations.map((location, index) => (
              <div
                key={index}
                role="listitem"
                className="px-3 sm:px-4 py-3 sm:py-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-center"
              >
                {location}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={200}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-white mb-1">Don't see your location?</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">We're expanding. Contact us to check availability.</p>
            </div>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="w-full sm:w-auto border-neutral-300 dark:border-neutral-700 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 hover:border-neutral-900 dark:hover:border-white transition-all focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:ring-offset-2"
              aria-label="Check if your location has coverage"
            >
              Check Availability
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
