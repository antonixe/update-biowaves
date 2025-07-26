"use client"

import { Wifi, Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const quickLinks = [
    { name: "Internet Packages", href: "#packages" },
    { name: "Our Products", href: "#products" },
    { name: "Coverage Areas", href: "#coverage" },
    { name: "About Us", href: "#about" },
  ]

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

  const handleCall = () => {
    window.location.href = "tel:+254707019898"
  }

  const handleEmail = () => {
    window.location.href = "mailto:biowavestechnologyservices@gmail.com"
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <button onClick={scrollToTop} className="flex items-center mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                  <Wifi className="h-8 w-8 text-white" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold">BioWaves</span>
            </button>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Providing reliable, high-speed internet solutions since 2019. Your trusted partner for connectivity in
              Kapsabet and surrounding areas.
            </p>

            {/* Back to top button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 bg-transparent"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="flex items-center group w-full text-left hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">0707-01-9898</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center group w-full text-left hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="ml-3 text-gray-300 text-sm group-hover:text-white transition-colors">
                  biowavestechnologyservices@gmail.com
                </span>
              </button>
              <div className="flex items-center group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="ml-3 text-gray-300">Kapsabet, Eden Plaza</span>
              </div>
              <div className="flex items-center group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Clock className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="ml-3 text-gray-300">Mon - Fri: 8 a.m - 5 p.m</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 BioWaves Telecom Network. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
