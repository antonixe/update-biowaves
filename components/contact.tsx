"use client"

import { Phone } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-950 overflow-hidden" aria-labelledby="contact-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Top — centered signal + number */}
        <div className="pt-24 sm:pt-32 lg:pt-44 pb-16 sm:pb-20 flex flex-col items-center text-center px-2">
          <ScrollAnimation>
            {/* Pulsing signal dot */}
            <div className="relative mb-10">
              <span className="absolute inset-0 w-3 h-3 bg-teal-500 rounded-full animate-ping opacity-40" aria-hidden="true" />
              <span className="relative block w-3 h-3 bg-teal-500 rounded-full" aria-hidden="true" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 mb-6">We&apos;re online</p>
          </ScrollAnimation>

          <h2 id="contact-heading" className="sr-only">Contact Seacom Networks</h2>

          <ScrollAnimation delay={150}>
            <a
              href="tel:+254707019898"
              className="group block"
            >
              <p className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-serif italic text-white leading-none tracking-tight group-hover:text-teal-400 transition-colors duration-500">
                0707 019 898
              </p>
            </a>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="mt-4 text-sm text-neutral-600">Alt: 0702 018 277</p>
          </ScrollAnimation>

          {/* Action row */}
          <ScrollAnimation delay={250}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto">
              <a
                href="tel:+254707019898"
                className="flex items-center justify-center gap-2 h-12 px-6 sm:px-8 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href="https://wa.me/254707019898"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 px-6 sm:px-8 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white text-sm font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom bar — info strip */}
        <ScrollAnimation delay={300}>
          <div className="py-8 border-t border-neutral-800/40 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[11px] text-neutral-600">
            <span>Mon–Fri 8–5</span>
            <span className="hidden sm:inline text-neutral-800">·</span>
            <span>Sat 9–2</span>
            <span className="hidden sm:inline text-neutral-800">·</span>
            <span>Eden Plaza, Kapsabet</span>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  )
}
