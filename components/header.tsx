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
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Plans", href: "#packages" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Coverage", href: "#coverage" },
  ]

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)]" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("#home")} 
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-lg"
            >
              <span className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                BioWaves
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-md px-1 ${
                      isActive 
                        ? "text-neutral-900 dark:text-white" 
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                onClick={scrollToContact}
                className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 h-10 px-5 text-sm font-medium rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Get Connected
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white rounded-lg"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Toggle menu</span>
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

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-neutral-900/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div
          className={`absolute top-20 left-4 right-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-colors ${
                    isActive 
                      ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white" 
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                </button>
              )
            })}
          </div>
          <div className="p-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <Button
              onClick={scrollToContact}
              className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-xl h-12"
            >
              Get Connected
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
