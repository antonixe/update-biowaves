import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BioWaves - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
  description:
    "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
  keywords: [
    "fiber internet Kapsabet",
    "high-speed internet Kenya",
    "business internet Nandi County",
    "CCTV installation Kapsabet",
    "IP intercom systems",
    "wireless internet Kenya",
    "BioWaves internet",
    "fiber to home Kenya",
    "business connectivity solutions",
    "internet service provider Kapsabet",
  ],
  authors: [{ name: "BioWaves Telecom Network" }],
  creator: "BioWaves Telecom Network",
  publisher: "BioWaves Telecom Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://biowaves.co.ke",
    siteName: "BioWaves Telecom Network",
    title: "BioWaves - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
    description:
      "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BioWaves - High-Speed Fiber Internet in Kapsabet, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioWaves - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
    description:
      "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
    images: ["/og-image.jpg"],
    creator: "@biowaves_ke",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://biowaves.co.ke",
  },
  category: "Technology",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-KE">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Kapsabet, Nandi County, Kenya" />
        <meta name="geo.position" content="0.2017;35.1042" />
        <meta name="ICBM" content="0.2017, 35.1042" />

        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="Eden Plaza, 3rd Floor" />
        <meta name="business:contact_data:locality" content="Kapsabet" />
        <meta name="business:contact_data:region" content="Nandi County" />
        <meta name="business:contact_data:postal_code" content="30300" />
        <meta name="business:contact_data:country_name" content="Kenya" />
        <meta name="business:contact_data:phone_number" content="+254707019898" />
        <meta name="business:contact_data:email" content="biowavestechnologyservices@gmail.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://biowaves.co.ke/#organization",
              name: "BioWaves Telecom Network",
              alternateName: "BioWaves",
              description:
                "High-speed fiber internet, CCTV security systems, and IP intercom solutions provider in Kapsabet, Nandi County, Kenya.",
              url: "https://biowaves.co.ke",
              telephone: "+254707019898",
              email: "biowavestechnologyservices@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Eden Plaza, 3rd Floor",
                addressLocality: "Kapsabet",
                addressRegion: "Nandi County",
                postalCode: "30300",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 0.2017,
                longitude: 35.1042,
              },
              openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-14:00"],
              priceRange: "KSh 1,500 - KSh 20,000",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 0.2017,
                  longitude: 35.1042,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Internet and Security Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fiber Internet - Home",
                      description: "High-speed fiber internet for residential customers",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Internet Solutions",
                      description: "Enterprise-grade internet connectivity for businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CCTV Security Systems",
                      description: "Professional CCTV installation and monitoring services",
                    },
                  },
                ],
              },
              sameAs: [
                "https://facebook.com/biowaves.ke",
                "https://twitter.com/biowaves_ke",
                "https://instagram.com/biowaves_ke",
              ],
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://biowaves.co.ke",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Internet Packages",
                  item: "https://biowaves.co.ke#packages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Products",
                  item: "https://biowaves.co.ke#products",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://biowaves.co.ke#contact",
                },
              ],
            }),
          }}
        />

        {/* Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "High-Speed Fiber Internet Services",
              description:
                "Professional fiber internet installation and maintenance services in Kapsabet, Nandi County, Kenya.",
              provider: {
                "@type": "LocalBusiness",
                name: "BioWaves Telecom Network",
              },
              areaServed: {
                "@type": "City",
                name: "Kapsabet",
                containedInPlace: {
                  "@type": "State",
                  name: "Nandi County",
                  containedInPlace: {
                    "@type": "Country",
                    name: "Kenya",
                  },
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Internet Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Basic Home Internet",
                    price: "1500",
                    priceCurrency: "KES",
                    description: "5 Mbps fiber internet for home use",
                  },
                  {
                    "@type": "Offer",
                    name: "Business Pro Internet",
                    price: "8000",
                    priceCurrency: "KES",
                    description: "50 Mbps fiber internet for business use",
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What internet speeds does BioWaves offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BioWaves offers fiber internet speeds ranging from 5 Mbps to 100 Mbps, suitable for both home and business use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas does BioWaves cover in Kapsabet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BioWaves covers 18+ locations in Kapsabet including Eden Plaza, Naivas Building, Kapsabet Hospital, and many other commercial and residential areas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the uptime guarantee?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BioWaves provides a 99.9% uptime guarantee for all internet packages with 24/7 technical support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer business internet solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, BioWaves offers dedicated business internet packages with static IPs, priority support, and enterprise-grade connectivity.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
