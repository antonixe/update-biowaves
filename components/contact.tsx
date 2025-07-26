"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0707-01-9898", "0702-018-277", "0783-257-905"],
      gradient: "from-green-400 to-emerald-500",
      action: () => (window.location.href = "tel:+254707019898"),
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["biowavestechnology", "services@gmail.com"],
      gradient: "from-blue-400 to-cyan-500",
      action: () => (window.location.href = "mailto:biowavestechnologyservices@gmail.com"),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kapsabet, Eden Plaza, 3rd Floor"],
      gradient: "from-purple-400 to-pink-500",
      action: () => window.open("https://maps.google.com/?q=Kapsabet,Eden Plaza", "_blank"),
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8 a.m - 5 p.m", "Saturday: 9 a.m - 2 p.m"],
      gradient: "from-orange-400 to-red-500",
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <span className="text-sm font-medium text-blue-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Ready to Get
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Connected?
            </span>
          </h2>
          <p className="text-lg leading-8 text-gray-600 font-light">
            Our team is here to help you find the perfect internet solution for your needs
          </p>
        </div>

        {/* Contact Information - Centered Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 ${
                  info.action ? "cursor-pointer" : ""
                }`}
                onClick={info.action || undefined}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h4>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
