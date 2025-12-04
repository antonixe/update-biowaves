"use client"

import { Zap, Infinity, Headphones, Shield, Clock, Wrench } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Features() {
  const features = [
    {
      name: "Lightning Fast",
      description: "Fiber-optic speeds up to 100Mbps for seamless streaming, gaming, and work.",
      icon: Zap,
    },
    {
      name: "Unlimited Data",
      description: "No caps, no throttling. Use as much as you need without worrying about limits.",
      icon: Infinity,
    },
    {
      name: "24/7 Support",
      description: "Our local support team is always available when you need assistance.",
      icon: Headphones,
    },
    {
      name: "Secure Network",
      description: "Enterprise-grade security to keep your data and privacy protected.",
      icon: Shield,
    },
    {
      name: "99.9% Uptime",
      description: "Redundant infrastructure ensures your connection stays reliable.",
      icon: Clock,
    },
    {
      name: "Free Installation",
      description: "Professional setup by our expert technicians at no extra cost.",
      icon: Wrench,
    },
  ]

  return (
    <section className="section bg-white dark:bg-neutral-950" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-neutral-500 mb-3">Why BioWaves</p>
            <h2 id="features-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
              Built for reliability
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We've designed our network from the ground up to deliver consistent, 
              dependable internet you can count on.
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12" role="list">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.name} delay={index * 100}>
              <div className="group" role="listitem">
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 mb-4 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors"
                  aria-hidden="true"
                >
                  <feature.icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
