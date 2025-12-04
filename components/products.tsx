"use client"

import { Button } from "@/components/ui/button"
import { Camera, Phone, Radio, ArrowUpRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Products() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const products = [
    {
      name: "Hikvision CCTV Package",
      description: "Complete 8-channel HD surveillance system with night vision, mobile app access, and 24/7 recording capabilities.",
      price: 15000.95,
      icon: Camera,
    },
    {
      name: "IP Intercom System",
      description: "Modern IP-based intercom with HD audio/video, remote access, and seamless mobile integration.",
      price: 11099.95,
      icon: Phone,
    },
    {
      name: "Long Range Wireless Intercom",
      description: "Reliable wireless communication with crystal clear audio, weather resistance, and up to 1km range.",
      price: 20044.95,
      icon: Radio,
    },
  ]

  return (
    <section id="products" className="section bg-white dark:bg-neutral-950" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-neutral-500 mb-3">Products</p>
            <h2 id="products-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
              Security & communication
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Professional hardware solutions to complement your connectivity needs.
            </p>
          </div>
        </ScrollAnimation>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" role="list">
          {products.map((product, index) => (
            <ScrollAnimation key={product.name} delay={index * 150}>
              <article
                className="group bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors h-full"
                role="listitem"
              >
                {/* Icon */}
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-6 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-colors"
                  aria-hidden="true"
                >
                  <product.icon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">Starting at</p>
                    <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                      <span className="sr-only">Price: </span>KES {product.price.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-transparent p-0 h-auto font-medium group/btn focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:ring-offset-2 rounded"
                    aria-label={`Get quote for ${product.name}`}
                  >
                    Get Quote
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
