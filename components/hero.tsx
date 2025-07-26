"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Shield } from "lucide-react"

export function Hero() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-8 animate-fade-in-down">
            <Zap className="h-4 w-4 text-yellow-500 mr-2 animate-spin-slow" />
            <span className="text-sm font-medium text-gray-700">Lightning Fast Internet</span>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900 mb-2 animate-slide-up opacity-0 animation-delay-300">
              Experience the
            </span>
            <span className="block animate-slide-up opacity-0 animation-delay-600">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient-shift bg-300% relative">
                <span className="inline-block animate-bounce-gentle mr-2 text-4xl sm:text-5xl lg:text-6xl">⚡</span>
                <span className="animate-type-text overflow-hidden whitespace-nowrap border-r-2 border-cyan-500">
                  Future of Internet
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 font-light animate-fade-in opacity-0 animation-delay-1200">
            Unleash unlimited possibilities with BioWaves' cutting-edge fiber internet. Fast, reliable, and designed for
            the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex items-center justify-center animate-fade-in opacity-0 animation-delay-1500">
            <Button
              onClick={scrollToPackages}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-gentle"
            >
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: "Coverage Areas", value: "18+" },
              { icon: Zap, label: "Max Speed", value: "100 Mbps" },
              { icon: Shield, label: "Uptime", value: "99.9%" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group animate-slide-up opacity-0`}
                style={{ animationDelay: `${1800 + index * 200}ms` }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
