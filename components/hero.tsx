"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages")
    if (packagesSection) {
      const offset = 80
      const elementPosition = packagesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950" />
      
      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-sm font-medium text-neutral-500 mb-6 opacity-0 animate-fade-up">
              Internet Service Provider — Kapsabet, Kenya
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-8 opacity-0 animate-fade-up delay-100">
              Fast, reliable internet
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">for everyone.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up delay-200">
              Experience fiber-optic speeds up to 100 Mbps with unlimited data. 
              We're connecting Nandi County to what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 opacity-0 animate-fade-up delay-300">
              <Button
                onClick={scrollToPackages}
                size="lg"
                className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-full h-12 sm:h-12 px-8 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] group focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              >
                View Plans
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:hover:bg-transparent rounded-full h-12 px-6 text-base font-medium focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
              >
                Contact Sales
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-neutral-200 dark:border-neutral-800 opacity-0 animate-fade-up delay-400">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16">
                {[
                  { value: "100", unit: "Mbps", label: "Top Speed" },
                  { value: "18+", unit: "", label: "Locations" },
                  { value: "99.9", unit: "%", label: "Uptime" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                      {stat.value}
                      <span className="text-neutral-400 dark:text-neutral-500">{stat.unit}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
        <button
          onClick={scrollToPackages}
          className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-lg p-2"
          aria-label="Scroll to packages section"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
