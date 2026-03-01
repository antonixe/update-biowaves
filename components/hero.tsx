"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages")
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: pos, behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-50 dark:bg-neutral-950" />

      {/* Floating gradient orb — signature visual */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-200/40 via-cyan-100/30 to-transparent dark:from-teal-900/20 dark:via-cyan-900/10 dark:to-transparent blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-teal-100/30 to-transparent dark:from-teal-950/20 dark:to-transparent blur-3xl animate-pulse-soft pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-32 lg:py-40 w-full">
          {/* Eyebrow */}
          <div className="opacity-0 animate-fade-up mb-8">
            <p className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
              Kapsabet &mdash; Nandi County &mdash; Kenya
            </p>
          </div>

          {/* Headline — serif, massive, editorial */}
          <h1 className="opacity-0 animate-fade-up delay-100 mb-8">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-neutral-900 dark:text-white leading-[0.95] tracking-tight">
              Internet that
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic leading-[0.95] tracking-tight mt-1">
              <span className="text-gradient bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">just works.</span>
            </span>
          </h1>

          {/* Subline — intentionally short */}
          <div className="opacity-0 animate-fade-up delay-200 max-w-md mb-12">
            <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Fiber-optic speeds up to 100 Mbps.<br className="hidden sm:block" />
              Unlimited data. No fine print.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 opacity-0 animate-fade-up delay-300 mb-16 sm:mb-24 lg:mb-32">
            <Button
              onClick={scrollToPackages}
              size="lg"
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] group rounded-none"
            >
              View plans
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white h-12 sm:h-14 px-6 text-base sm:text-lg font-medium rounded-none"
            >
              Talk to us
            </Button>
          </div>

          {/* Stats — editorial, stacked with oversized numbers */}
          <div className="opacity-0 animate-fade-up delay-400">
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-10">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16">
                {[
                  { value: "100", unit: "Mbps", label: "Top speed" },
                  { value: "18+", unit: "", label: "Covered buildings" },
                  { value: "99.9", unit: "%", label: "Guaranteed uptime" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif italic text-neutral-900 dark:text-white leading-none">{stat.value}</span>
                      <span className="text-base sm:text-lg font-serif italic text-teal-600 dark:text-teal-400">{stat.unit}</span>
                    </div>
                    <div className="text-sm font-mono uppercase tracking-[0.15em] text-neutral-400 mt-2 sm:mt-3">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
