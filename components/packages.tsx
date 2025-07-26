"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Home, Building2 } from "lucide-react"

export function Packages() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const homePackages = [
    {
      name: "Basic",
      speed: "5 Mbps",
      price: 1500,
      features: ["Unlimited Data", "Free Installation", "24/7 Support", "Basic Streaming"],
      popular: false,
    },
    {
      name: "Standard",
      speed: "10 Mbps",
      price: 2000,
      features: ["Unlimited Data", "Free Installation", "24/7 Support", "Enhanced Stability"],
      popular: false,
    },
    {
      name: "Premium",
      speed: "20 Mbps",
      price: 2500,
      features: ["Unlimited Data", "Priority Installation", "24/7 Support", "Enhanced Stability", "HD Streaming"],
      popular: false,
    },
    {
      name: "Advanced",
      speed: "30 Mbps",
      price: 3000,
      popular: true,
      features: [
        "Unlimited Data",
        "Priority Installation",
        "24/7 Priority Support",
        "Enhanced Stability",
        "4K Streaming Ready",
      ],
    },
    {
      name: "Ultimate",
      speed: "50 Mbps",
      price: 3500,
      features: [
        "Unlimited Data",
        "Priority Installation",
        "24/7 Priority Support",
        "Maximum Stability",
        "Static IP Option",
      ],
      popular: false,
    },
  ]

  const businessPackages = [
    {
      name: "Business Starter",
      speed: "30 Mbps",
      price: 5000,
      features: ["Unlimited Data", "99.9% Uptime", "Priority Support", "Static IP"],
    },
    {
      name: "Business Pro",
      speed: "50 Mbps",
      price: 8000,
      popular: true,
      features: [
        "Unlimited Data",
        "99.9% Uptime",
        "24/7 Priority Support",
        "Multiple Static IPs",
        "Business Analytics",
      ],
    },
    {
      name: "Enterprise",
      speed: "100 Mbps",
      price: 20000,
      features: [
        "Unlimited Data",
        "99.99% Uptime SLA",
        "24/7 Priority Support",
        "Multiple Static IPs",
        "Dedicated Account Manager",
      ],
    },
  ]

  return (
    <section id="packages" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="text-sm font-medium text-cyan-700">Flexible Plans</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Internet Plan
            </span>
          </h2>
          <p className="text-lg leading-8 text-gray-600 font-light">
            From basic browsing to enterprise solutions, we have the right plan for every need
          </p>
        </div>

        {/* Home Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fiber To the Home</h3>
                <p className="text-sm text-gray-600">Perfect for families and individuals</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {homePackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.popular
                    ? "ring-2 ring-blue-500 bg-gradient-to-b from-blue-50 to-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${pkg.popular ? "pt-12" : "pt-6"}`}>
                  <CardTitle className="text-lg font-semibold">{pkg.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{pkg.speed}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">Ksh {pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Packages */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mr-4">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fiber To the Business</h3>
                <p className="text-sm text-gray-600">Designed for professional environments</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {businessPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.popular
                    ? "ring-2 ring-purple-500 bg-gradient-to-b from-purple-50 to-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Recommended
                  </div>
                )}
                <CardHeader className={`text-center ${pkg.popular ? "pt-12" : "pt-6"}`}>
                  <CardTitle className="text-xl font-semibold">{pkg.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">{pkg.speed}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">Ksh {pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
