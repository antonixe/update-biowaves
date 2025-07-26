"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Phone, Radio } from "lucide-react"

export function Products() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const products = [
    {
      name: "Hikvision CCTV Package",
      description: "Complete 8-channel HD surveillance system for comprehensive security coverage",
      price: 15000.95,
      icon: Camera,
      iconGradient: "from-red-500 to-pink-500",
      features: ["8-Channel HD Recording", "24/7 Monitoring", "Mobile App Access", "Night Vision"],
    },
    {
      name: "IP Intercom System",
      description: "Advanced IP-based intercom solution for modern buildings",
      price: 11099.95,
      icon: Phone,
      iconGradient: "from-blue-500 to-cyan-500",
      features: ["HD Audio/Video", "Remote Access", "Mobile Integration", "Easy Installation"],
    },
    {
      name: "Long Range Wireless Intercom",
      description: "Reliable wireless communication with up to 1km range",
      price: 20044.95,
      icon: Radio,
      iconGradient: "from-green-500 to-emerald-500",
      features: ["1km Range", "Crystal Clear Audio", "Weather Resistant", "Long Battery Life"],
    },
  ]

  return (
    <section id="products" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Quality hardware solutions for your security and communication needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Section */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-r ${product.iconGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <product.icon className="h-12 w-12 text-white" />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-full blur-lg"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Ksh {product.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="text-xs bg-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
