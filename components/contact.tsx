"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 707 019 898",
      action: () => window.open("tel:+254707019898", "_self"),
      bgColor: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      hoverColor: "hover:from-green-500/30 hover:to-emerald-500/30",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "biowavestechnologyservices@gmail.com",
      action: () => window.open("mailto:biowavestechnologyservices@gmail.com", "_self"),
      bgColor: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      hoverColor: "hover:from-blue-500/30 hover:to-cyan-500/30",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Eden Plaza, 3rd Floor, Kapsabet",
      action: () => window.open("https://maps.google.com/?q=Eden+Plaza+Kapsabet", "_blank"),
      bgColor: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8 AM - 5 PM",
      action: null,
      bgColor: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-400",
      hoverColor: "hover:from-orange-500/30 hover:to-yellow-500/30",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience lightning-fast internet? Contact us today to learn more about our packages and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 bg-gradient-to-br ${info.bgColor} ${info.hoverColor} backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${
                  info.action ? "cursor-pointer" : ""
                }`}
                onClick={info.action || undefined}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                        <IconComponent className={`h-8 w-8 ${info.iconColor}`} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{info.content}</p>
                  {info.action && (
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-gray-600">Click to {info.title.toLowerCase()}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Need immediate assistance? Call us during business hours for instant support!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
