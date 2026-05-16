"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight, Camera, PhoneCall, Radio } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

type SecurityProduct = {
  name: string
  spec: string
  price: string
  image: string
  imageAlt: string
  Icon: LucideIcon
}

const products: SecurityProduct[] = [
  {
    name: "Hikvision CCTV",
    spec: "8CH, HD, night vision",
    price: "KES 15,000",
    image: "/security-cctv.jpg",
    imageAlt: "Wall-mounted outdoor CCTV camera installed above an entry point.",
    Icon: Camera,
  },
  {
    name: "IP Intercom",
    spec: "Video, audio, mobile",
    price: "KES 11,099",
    image: "/security-ip-intercom.jpg",
    imageAlt: "Outdoor video intercom keypad mounted in a protective metal housing.",
    Icon: PhoneCall,
  },
  {
    name: "Wireless Intercom",
    spec: "1 km, weatherproof",
    price: "KES 20,044",
    image: "/security-wireless-intercom.jpg",
    imageAlt: "Rooftop wireless antenna equipment for long-range building communication.",
    Icon: Radio,
  },
]

export function Products() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="section bg-[var(--paper)]" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollAnimation>
          <div className="flex flex-col gap-4 border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Security</p>
              <h2 id="products-heading" className="section-title mt-3">Add-ons we install.</h2>
            </div>
            <p className="max-w-md text-lg font-semibold leading-7 text-[var(--ink-soft)]">
              Quote security with the internet survey.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {products.map(({ name, spec, price, image, imageAlt, Icon }, index) => (
            <ScrollAnimation key={name} delay={index * 70}>
              <article className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--field)]">
                <figure className="aspect-[4/3] overflow-hidden border-b border-[color-mix(in_oklch,var(--ink)_12%,transparent)] bg-[var(--route)]">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  />
                </figure>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[var(--signal)]" />
                    <span className="rounded bg-[var(--service)] px-2 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--service-ink)]">
                      From
                    </span>
                  </div>
                  <h3 className="mt-7 text-3xl font-bold leading-none text-[var(--ink)]">{name}</h3>
                  <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--ink-soft)]">{spec}</p>
                  <button
                    onClick={scrollToContact}
                    className="focus-ring mt-8 flex w-full items-center justify-between rounded-md bg-[var(--solid)] px-4 py-3 text-left font-bold text-[var(--solid-ink)] transition-colors duration-200 hover:bg-[var(--solid-hover)]"
                  >
                    <span>{price}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
