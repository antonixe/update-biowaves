"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Packages() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home")

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const homePackages = [
    {
      name: "Basic",
      speed: "5 Mbps",
      price: 1500,
      description: "Light browsing & social media",
      features: ["Unlimited Data", "Free Installation", "24/7 Support"],
      popular: false,
    },
    {
      name: "Standard",
      speed: "10 Mbps",
      price: 2000,
      description: "Small families & remote work",
      features: ["Unlimited Data", "Free Installation", "24/7 Support", "HD Streaming"],
      popular: false,
    },
    {
      name: "Premium",
      speed: "20 Mbps",
      price: 2500,
      description: "Multiple devices & streaming",
      features: ["Unlimited Data", "Priority Installation", "24/7 Support", "HD Streaming"],
      popular: false,
    },
    {
      name: "Advanced",
      speed: "30 Mbps",
      price: 3000,
      description: "Power users & large families",
      features: ["Unlimited Data", "Priority Installation", "Priority Support", "4K Streaming"],
      popular: true,
    },
    {
      name: "Ultimate",
      speed: "50 Mbps",
      price: 3500,
      description: "Maximum speed & performance",
      features: ["Unlimited Data", "Priority Installation", "Priority Support", "Static IP Option"],
      popular: false,
    },
  ]

  const businessPackages = [
    {
      name: "Starter",
      speed: "30 Mbps",
      price: 5000,
      description: "Small businesses & startups",
      features: ["Unlimited Data", "99.9% Uptime SLA", "Priority Support", "Static IP"],
      popular: false,
    },
    {
      name: "Professional",
      speed: "50 Mbps",
      price: 8000,
      description: "Growing teams & offices",
      features: ["Unlimited Data", "99.9% Uptime SLA", "24/7 Priority Support", "Multiple Static IPs"],
      popular: true,
    },
    {
      name: "Enterprise",
      speed: "100 Mbps",
      price: 20000,
      description: "Large organizations",
      features: ["Unlimited Data", "99.99% Uptime SLA", "Dedicated Support", "Account Manager"],
      popular: false,
    },
  ]

  const packages = activeTab === "home" ? homePackages : businessPackages

  return (
    <section id="packages" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-neutral-500 mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              All plans include unlimited data and free installation. No hidden fees.
            </p>
          </div>
        </ScrollAnimation>

        {/* Tab Switcher */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 ${
                activeTab === "home"
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 ${
                activeTab === "business"
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              Business
            </button>
          </div>
        </ScrollAnimation>

        {/* Packages Grid */}
        <div className={`grid gap-4 ${
          activeTab === "home" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" 
            : "grid-cols-1 md:grid-cols-3 max-w-4xl"
        }`}>
          {packages.map((pkg, index) => (
            <ScrollAnimation key={pkg.name} animation="fade-up" delay={150 + index * 75}>
              <div
                className={`relative bg-white dark:bg-neutral-800 rounded-2xl p-6 transition-all hover:shadow-lg h-full ${
                  pkg.popular 
                    ? "ring-2 ring-neutral-900 dark:ring-white" 
                    : "border border-neutral-200 dark:border-neutral-700"
                }`}
              >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className={pkg.popular ? "pt-2" : ""}>
                {/* Speed Badge */}
                <div className="inline-block px-2.5 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  {pkg.speed}
                </div>

                {/* Name & Description */}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">{pkg.name}</h3>
                <p className="text-sm text-neutral-500 mb-4">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-semibold text-neutral-900 dark:text-white">
                    {pkg.price.toLocaleString()}
                  </span>
                  <span className="text-neutral-500 ml-1">KES/mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                      <Check className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  variant={pkg.popular ? "default" : "outline"}
                  className={`w-full rounded-full h-10 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    pkg.popular
                      ? "bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                      : "border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 dark:text-neutral-300 focus-visible:ring-neutral-500"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Footer Note */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="mt-10 text-center text-sm text-neutral-500">
            All prices in Kenyan Shillings, VAT inclusive.{" "}
            <button 
              onClick={scrollToContact}
              className="text-neutral-900 dark:text-white hover:underline focus:outline-none focus-visible:underline"
            >
              Contact us for custom plans
            </button>
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
