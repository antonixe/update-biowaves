"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
  }

  const nav = [
    { name: "Plans", href: "#packages" },
    { name: "Products", href: "#products" },
    { name: "Coverage", href: "#coverage" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="text-[12vw] sm:text-[10vw] font-serif italic text-neutral-900/30 whitespace-nowrap leading-none">
          Seacom
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="pt-20 pb-8 flex flex-col items-center text-center gap-8">
          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {nav.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Phone */}
          <a href="tel:+254707019898" className="text-base text-neutral-600 hover:text-teal-400 transition-colors">
            +254 707 019 898
          </a>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-neutral-800/30 flex items-center justify-between">
          <p className="text-xs font-mono text-neutral-700">
            © 2026 Seacom
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
