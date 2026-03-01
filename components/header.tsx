"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const sections = ["contact", "coverage", "about", "products", "packages", "home"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) { setActiveSection(section); break }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMenuOpen])

  const navigation = [
    { name: "Plans", href: "#packages", num: "01" },
    { name: "Products", href: "#products", num: "02" },
    { name: "About", href: "#about", num: "03" },
    { name: "Coverage", href: "#coverage", num: "04" },
  ]

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.replace("#", ""))
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: pos, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/40 dark:border-neutral-800/40" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo — typographic mark */}
            <button 
              onClick={() => scrollToSection("#home")} 
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-7 h-7 bg-teal-600 dark:bg-teal-400 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white dark:text-neutral-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <circle cx="12" cy="20" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
                Seacom
              </span>
            </button>

            {/* Desktop Nav — numbered items */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                      isActive 
                        ? "text-neutral-900 dark:text-white" 
                        : "text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-teal-500 dark:text-teal-400">{item.num}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={scrollToContact}
                className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 h-10 px-6 text-base font-medium rounded-none transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Connected
              </Button>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center -mr-2 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                ) : (
                  <Menu className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav — editorial, full-screen feel */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`relative pt-24 px-8 transition-all duration-500 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}>
          <div className="space-y-1">
            {[{ name: "Home", href: "#home", num: "00" }, ...navigation].map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-baseline gap-4 py-5 text-left border-b border-neutral-100 dark:border-neutral-800 transition-colors active:scale-[0.99] ${
                    isActive 
                      ? "text-neutral-900 dark:text-white" 
                      : "text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  <span className="font-mono text-sm text-teal-500">{item.num}</span>
                  <span className="text-3xl font-serif italic">{item.name}</span>
                </button>
              )
            })}
          </div>
          <div className="mt-10">
            <Button
              onClick={scrollToContact}
              className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-none h-14 text-lg font-medium active:scale-[0.98] transition-transform"
            >
              Get Connected
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
