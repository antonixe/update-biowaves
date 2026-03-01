"use client"

import { Camera, Phone, Radio } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Products() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const products = [
    {
      name: "Hikvision CCTV",
      spec: "8CH · HD · Night Vision",
      price: "15,000",
      icon: Camera,
    },
    {
      name: "IP Intercom",
      spec: "Video · Audio · Mobile",
      price: "11,099",
      icon: Phone,
    },
    {
      name: "Wireless Intercom",
      spec: "1km Range · Weatherproof",
      price: "20,044",
      icon: Radio,
    },
  ]

  return (
    <section id="products" className="py-24 lg:py-32 bg-white dark:bg-neutral-950" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4">Products</p>
          <h2 id="products-heading" className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight mb-16">
            Beyond connectivity.
          </h2>
        </ScrollAnimation>

        {/* Product cards — horizontal on desktop, stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-neutral-200 dark:bg-neutral-800" role="list">
          {products.map((product, index) => (
            <ScrollAnimation key={product.name} delay={index * 100}>
              <article
                className="group relative bg-white dark:bg-neutral-950 p-8 lg:p-10 h-full cursor-pointer hover:bg-stone-50 dark:hover:bg-neutral-900/50 transition-colors"
                onClick={scrollToContact}
                role="listitem"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 mb-8 group-hover:border-teal-300 dark:group-hover:border-teal-800 transition-colors" aria-hidden="true">
                  <product.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {product.name}
                </h3>

                {/* Spec line */}
                <p className="text-sm font-mono text-neutral-400 dark:text-neutral-500 tracking-wide mb-8">
                  {product.spec}
                </p>

                {/* Price */}
                <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800/60 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-serif italic text-neutral-900 dark:text-white">{product.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">KES</span>
                  </div>
                  <span className="text-sm text-neutral-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Get quote →
                  </span>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
