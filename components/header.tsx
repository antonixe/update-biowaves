"use client"

import { useEffect, useState } from "react"
import { Menu, MessageCircle, Phone, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Plans", href: "#packages" },
  { name: "Install", href: "#features" },
  { name: "Security", href: "#products" },
  { name: "Coverage", href: "#coverage" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.replace("#", ""))
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 88
      window.scrollTo({ top: pos, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] transition-colors ${
          isScrolled ? "bg-[var(--field)]" : "bg-[color-mix(in_oklch,var(--field)_88%,transparent)] backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5" aria-label="Main navigation">
          <button onClick={() => scrollToSection("#home")} className="focus-ring flex items-center gap-3 text-left" aria-label="Go to home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--solid)] text-[var(--solid-ink)]">
              <Phone className="h-5 w-5 text-[var(--service)]" />
            </span>
            <span>
              <span className="block text-base font-bold leading-none text-[var(--ink)]">Seacom Networks</span>
              <span className="mt-1 hidden font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)] sm:block">
                0707 019 898
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-[var(--ink)] hover:bg-[var(--route)]"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <a
              href="https://wa.me/254707019898"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-[var(--service)] px-4 text-sm font-bold text-[var(--service-ink)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-[color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--paper)] text-[var(--ink)]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[var(--field)] px-4 pt-24 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-lg border border-[color-mix(in_oklch,var(--ink)_16%,transparent)] bg-[var(--paper)]">
          {[{ name: "Home", href: "#home" }, ...navigation].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="focus-ring flex w-full items-center justify-between border-b border-[color-mix(in_oklch,var(--ink)_14%,transparent)] px-5 py-5 text-left text-2xl font-bold text-[var(--ink)] last:border-b-0"
            >
              {item.name}
              <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--signal)]">
                {item.href.replace("#", "")}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
