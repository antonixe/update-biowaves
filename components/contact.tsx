"use client"

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+254 707 019 898",
      subValue: "Alt: +254 702 018 277",
      href: "tel:+254707019898",
    },
    {
      icon: Mail,
      label: "Email",
      value: "biowavestechnologyservices@gmail.com",
      subValue: "We respond within 24 hours",
      href: "mailto:biowavestechnologyservices@gmail.com",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Eden Plaza, 3rd Floor",
      subValue: "Kapsabet, Nandi County",
      href: "https://maps.google.com/?q=Eden+Plaza+Kapsabet",
    },
  ]

  return (
    <section id="contact" className="section bg-neutral-900" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <ScrollAnimation>
            <div>
              <p className="text-sm font-medium text-neutral-500 mb-3">Contact</p>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
                Get in touch
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                Ready to upgrade your internet? Reach out to discuss your needs. 
                Our team is here to help you find the perfect plan.
              </p>

              {/* Business Hours */}
              <div className="inline-block">
                <p className="text-sm text-neutral-500 mb-1">Business Hours</p>
                <p className="text-white font-medium">
                  <time>Monday – Friday, 8:00 AM – 5:00 PM</time>
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content - Contact Methods */}
          <ScrollAnimation delay={200}>
            <div className="space-y-4" role="list" aria-label="Contact methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
                  role="listitem"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center group-hover:bg-neutral-600 transition-colors" aria-hidden="true">
                    <method.icon className="h-5 w-5 text-neutral-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-neutral-500">{method.label}</p>
                      <ArrowUpRight className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" aria-hidden="true" />
                    </div>
                    <p className="text-white font-medium truncate">{method.value}</p>
                    <p className="text-sm text-neutral-500">{method.subValue}</p>
                  </div>
                </a>
              ))}

              {/* Quick Call CTA */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <a
                  href="tel:+254707019898"
                  className="group inline-flex items-center gap-3 text-white hover:text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-full"
                  aria-label="Call BioWaves now at +254 707 019 898"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 group-hover:bg-neutral-200 transition-colors" aria-hidden="true">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-medium">Call us now</span>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
