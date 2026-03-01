"use client"

import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Plans", href: "#packages" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Coverage", href: "#coverage" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <span className="text-xl font-semibold text-white mb-4 block">Seacom Networks</span>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Fast, reliable fiber internet for homes and businesses in Kapsabet, Nandi County.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+254707019898" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                +254 707 019 898
              </a>
              <a href="mailto:info@seacomnetworks.co.ke" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline">
                <Mail className="h-4 w-4" aria-hidden="true" />
                info@seacomnetworks.co.ke
              </a>
              <div className="flex items-center gap-2 text-neutral-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Eden Plaza, 3rd Floor, Kapsabet
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-neutral-500 hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>Fiber to the Home</li>
              <li>Fiber to the Business</li>
              <li>CCTV Installation</li>
              <li>IP Intercom Systems</li>
              <li>Network Solutions</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium text-white mb-4">Hours</h4>
            <div className="text-sm text-neutral-500 space-y-1">
              <p>Monday – Friday</p>
              <p className="text-neutral-400">8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © 2026 Seacom Networks
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
            aria-label="Scroll back to top of page"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
