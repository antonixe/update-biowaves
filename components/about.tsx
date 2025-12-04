"use client"

import { MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function About() {
  const stats = [
    { label: "Years", value: "5+" },
    { label: "Customers", value: "1,000+" },
    { label: "Locations", value: "18+" },
    { label: "Uptime", value: "99.9%" },
  ]

  return (
    <section id="about" className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <ScrollAnimation>
            <div>
              <p className="text-sm font-medium text-neutral-500 mb-3">About</p>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-6">
                Connecting Nandi County to the future
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  BioWaves Technology Services is a leading internet connectivity provider 
                  serving businesses and homes in Kapsabet and surrounding areas. We specialize 
                  in delivering fast, affordable, and reliable fiber internet solutions.
                </p>
                <p>
                  Founded with a mission to bridge the digital divide, we've grown to serve 
                  over 1,000 customers across 18+ locations. Our expert team ensures top-notch 
                  service and support to keep you connected.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mt-10 pt-10 border-t border-neutral-200 dark:border-neutral-700" role="list" aria-label="Company statistics">
                {stats.map((stat, index) => (
                  <div key={index} role="listitem">
                    <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content */}
          <ScrollAnimation delay={200}>
            <div className="lg:pt-8">
              {/* Values */}
              <div className="space-y-6 mb-10" role="list" aria-label="Our values">
                {[
                  { title: "Reliability", desc: "99.9% uptime with 24/7 monitoring and support" },
                  { title: "Speed", desc: "High-speed fiber connections up to 100Mbps" },
                  { title: "Local", desc: "Proudly serving Kapsabet and Nandi County" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4" role="listitem">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center text-sm font-medium" aria-hidden="true">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <address className="bg-white dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 not-italic">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Our Office</p>
                    <p className="font-medium text-neutral-900 dark:text-white">Eden Plaza, 3rd Floor, Kapsabet</p>
                  </div>
                </div>
              </address>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
