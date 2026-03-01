"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

export function Coverage() {
  const locations = [
    "Grandview Plaza", "Elgon Plaza", "Shakahola New Soko Areas",
    "Sonoiya Plaza", "Tiryo Plaza", "Chebut Factory",
    "NXTON Sports Building", "Gorissa Mall", "EDEN PLAZA",
    "Barngetuny Plaza", "Naivas Building Kapsabet", "Kapsabet Hospital",
    "Sogam Plaza", "Sheraton Building", "Arwos",
    "Toiyoi Plaza", "KEBEN Building", "Baraton",
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  // Double the locations for seamless marquee loop
  const marqueeItems = [...locations, ...locations]

  return (
    <section id="coverage" className="relative py-24 lg:py-32 bg-teal-600 dark:bg-teal-950 overflow-hidden" aria-labelledby="coverage-heading">
      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Compact header */}
        <ScrollAnimation>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-200/60 dark:text-teal-400/60 mb-4">Coverage</p>
          <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight leading-[1.1] mb-2">
            18+ locations. Growing.
          </h2>
        </ScrollAnimation>
      </div>

      {/* Marquee — flowing location strip */}
      <ScrollAnimation delay={150}>
        <div className="relative my-12">
          <div className="flex animate-marquee whitespace-nowrap" role="list" aria-label="Coverage locations">
            {marqueeItems.map((location, index) => (
              <span key={index} className="inline-flex items-center" role="listitem">
                <span className="text-base sm:text-lg lg:text-xl font-serif italic text-white/80 px-3 sm:px-4 lg:px-6">
                  {location}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300/40 flex-shrink-0" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Minimal CTA */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollAnimation delay={250}>
          <button
            onClick={scrollToContact}
            className="text-sm text-white/70 hover:text-white transition-colors"
            aria-label="Check if your location has coverage"
          >
            Not listed? Check with us →
          </button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
