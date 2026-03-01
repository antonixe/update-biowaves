"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Packages() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home")

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const homePackages = [
    { name: "Basic", speed: "5", price: 1500, desc: "Browsing & social", popular: false },
    { name: "Standard", speed: "10", price: 2000, desc: "Small households", popular: false },
    { name: "Premium", speed: "20", price: 2500, desc: "Multi-device", popular: false },
    { name: "Advanced", speed: "30", price: 3000, desc: "Power users", popular: true },
    { name: "Ultimate", speed: "50", price: 3500, desc: "Max performance", popular: false },
  ]

  const businessPackages = [
    { name: "Starter", speed: "30", price: 5000, desc: "Small teams", popular: false },
    { name: "Professional", speed: "50", price: 8000, desc: "Growing offices", popular: true },
    { name: "Enterprise", speed: "100", price: 20000, desc: "Large orgs", popular: false },
  ]

  const packages = activeTab === "home" ? homePackages : businessPackages

  return (
    <section id="packages" className="py-24 lg:py-32 bg-stone-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4">Pricing</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
                Honest pricing.
              </h2>

              {/* Tab Switcher */}
              <div className="flex gap-4">
                {(["home", "business"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-base font-medium pb-1 border-b-2 transition-all capitalize ${
                      activeTab === tab
                        ? "border-neutral-900 dark:border-white text-neutral-900 dark:text-white"
                        : "border-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Plans — horizontal row layout */}
        <div className="space-y-0 border-t border-neutral-200 dark:border-neutral-800">
          {packages.map((pkg, index) => (
            <ScrollAnimation key={pkg.name} animation="fade-up" delay={index * 60}>
              <div
                className={`group grid grid-cols-3 sm:grid-cols-4 items-center gap-3 sm:gap-4 py-5 sm:py-6 lg:py-8 border-b transition-colors cursor-pointer ${
                  pkg.popular 
                    ? "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/50 -mx-4 sm:-mx-6 px-4 sm:px-6" 
                    : "border-neutral-200/60 dark:border-neutral-800 hover:bg-white/60 dark:hover:bg-neutral-800/30"
                }`}
                onClick={scrollToContact}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && scrollToContact()}
              >
                {/* Speed */}
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-neutral-900 dark:text-white leading-none">
                      {pkg.speed}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-teal-600 dark:text-teal-400">Mbps</span>
                  </div>
                </div>

                {/* Name + Desc */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 dark:text-white truncate">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono uppercase tracking-wider bg-teal-600 text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 truncate">{pkg.desc}</p>
                </div>

                {/* Price */}
                <div className="text-right sm:text-left">
                  <span className="text-base sm:text-xl lg:text-3xl font-semibold text-neutral-900 dark:text-white">
                    {pkg.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] sm:text-sm text-neutral-400 ml-0.5 sm:ml-1">KES</span>
                </div>

                {/* Arrow — visible on hover (desktop only) */}
                <div className="hidden sm:flex justify-end">
                  <ArrowRight className="h-4 w-4 text-neutral-300 dark:text-neutral-600 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Single unified CTA */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-base text-neutral-400">
              All plans: unlimited data, free installation, 24/7 support.
            </p>
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto h-12 px-8 text-base font-medium rounded-none bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 transition-all"
            >
              Get connected
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
