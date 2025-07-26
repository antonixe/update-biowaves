"use client"

import { MapPin } from "lucide-react"

export function Coverage() {
  const locations = [
    "Grandview Plaza",
    "Elgon Plaza",
    "Shakahola New Soko Areas",
    "Sonoiya Plaza",
    "Tiryo Plaza",
    "Chebut Factory",
    "NXTON Sports Building (next to RUBIS)",
    "Gorissa Mall",
    "EDEN PLAZA",
    "Barngetuny Plaza",
    "Naivas Building Kapsabet",
    "Kapsabet Hospital",
    "Sogam Plaza",
    "Sheraton Building",
    "Arwos",
    "Toiyoi Plaza",
    "KEBEN Building",
    "Baraton",
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="coverage" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Coverage Areas</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Fiber Ready/WiFi Coverage Buildings within Kapsabet, Nandi County
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{location}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see your location? We're expanding our coverage area.</p>
            <button
              onClick={scrollToContact}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
            >
              Contact us to check availability in your area →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
