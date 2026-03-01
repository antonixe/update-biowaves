"use client"

import { Zap, Infinity, Headphones, Shield, Clock, Wrench } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Features() {
  const features = [
    {
      name: "Blazing Fast",
      description: "100Mbps fiber. Zero lag.",
      icon: Zap,
      size: "large",
    },
    {
      name: "Truly Unlimited",
      description: "No caps. No throttle.",
      icon: Infinity,
      size: "normal",
    },
    {
      name: "24/7 Support",
      description: "Local team. We pick up.",
      icon: Headphones,
      size: "normal",
    },
    {
      name: "Enterprise Security",
      description: "Your data stays yours.",
      icon: Shield,
      size: "normal",
    },
    {
      name: "99.9% Uptime",
      description: "Built to stay online.",
      icon: Clock,
      size: "normal",
    },
    {
      name: "Free Setup",
      description: "Pro install. Zero cost.",
      icon: Wrench,
      size: "large",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-neutral-950" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header — left-aligned, editorial */}
        <ScrollAnimation>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4">Why Seacom</p>
              <h2 id="features-heading" className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
                Built different.
              </h2>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 max-w-xs">
              Six things that set us apart from every other provider.
            </p>
          </div>
        </ScrollAnimation>

        {/* Bento Grid — varied sizes */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-200 dark:bg-neutral-800" role="list">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.name} delay={index * 80}>
              <div 
                className={`group relative bg-white dark:bg-neutral-950 p-5 sm:p-8 lg:p-10 transition-all h-full overflow-hidden hover:bg-stone-50 dark:hover:bg-neutral-900/50 ${
                  feature.size === "large" ? "lg:col-span-1" : ""
                }`} 
                role="listitem"
              >
                {/* Oversized number — decorative */}
                <span className="absolute -top-4 -right-2 text-[80px] sm:text-[100px] lg:text-[120px] font-serif italic leading-none text-neutral-100 dark:text-neutral-900/40 select-none pointer-events-none" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative">
                  <div 
                    className="flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 mb-6 group-hover:border-teal-300 dark:group-hover:border-teal-700 transition-colors"
                    aria-hidden="true"
                  >
                    <feature.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 dark:text-white mb-1 sm:mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
