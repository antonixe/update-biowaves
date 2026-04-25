import type React from "react"
import type { Metadata } from "next"
import { Barlow, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

const brandSans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const brandMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://seacomnetworks.co.ke"),
  title: "Seacom Networks - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
  description:
    "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
  keywords: [
    "fiber internet Kapsabet",
    "high-speed internet Kenya",
    "business internet Nandi County",
    "CCTV installation Kapsabet",
    "IP intercom systems",
    "wireless internet Kenya",
    "Seacom Networks internet",
    "fiber to home Kenya",
    "business connectivity solutions",
    "internet service provider Kapsabet",
    "best ISP Kapsabet",
    "affordable internet Nandi County",
    "fiber optic internet Kenya",
    "unlimited internet Kapsabet",
    "CCTV cameras Nandi County",
    "Hikvision CCTV Kapsabet",
    "office internet solutions Kenya",
    "home internet packages Kapsabet",
    "broadband Kapsabet Kenya",
    "enterprise internet Kenya",
    "fast internet Kapsabet",
    "wifi installation Kapsabet",
  ],
  authors: [{ name: "Seacom Networks" }],
  creator: "Seacom Networks",
  publisher: "Seacom Networks",
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
    url: "https://seacomnetworks.co.ke",
    siteName: "Seacom Networks",
    title: "Seacom Networks - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
    description:
      "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seacom Networks - High-Speed Fiber Internet & Business Solutions in Kapsabet, Kenya",
    description:
      "Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.",
    creator: "@seacomnetworks_ke",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://seacomnetworks.co.ke",
  },
  category: "Technology",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-KE" suppressHydrationWarning>
      <head>
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

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
        <meta name="business:contact_data:email" content="info@seacomnetworks.co.ke" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* WebSite Structured Data — for Google sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Seacom Networks",
              url: "https://seacomnetworks.co.ke",
              description: "High-speed fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County, Kenya.",
              publisher: {
                "@type": "Organization",
                name: "Seacom Networks",
                url: "https://seacomnetworks.co.ke",
              },
              inLanguage: "en-KE",
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Seacom Networks",
              url: "https://seacomnetworks.co.ke",
              logo: "https://seacomnetworks.co.ke/icon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254707019898",
                contactType: "customer service",
                areaServed: "KE",
                availableLanguage: ["English", "Swahili"],
              },
              sameAs: [
                "https://facebook.com/seacomnetworks.ke",
                "https://twitter.com/seacomnetworks_ke",
                "https://instagram.com/seacomnetworks_ke",
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://seacomnetworks.co.ke/#organization",
              name: "Seacom Networks",
              alternateName: "Seacom Networks",
              description:
                "High-speed fiber internet, CCTV security systems, and IP intercom solutions provider in Kapsabet, Nandi County, Kenya.",
              url: "https://seacomnetworks.co.ke",
              telephone: "+254707019898",
              email: "info@seacomnetworks.co.ke",
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
                "https://facebook.com/seacomnetworks.ke",
                "https://twitter.com/seacomnetworks_ke",
                "https://instagram.com/seacomnetworks_ke",
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
                  item: "https://seacomnetworks.co.ke",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Internet Packages",
                  item: "https://seacomnetworks.co.ke#packages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Products",
                  item: "https://seacomnetworks.co.ke#products",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://seacomnetworks.co.ke#contact",
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
                name: "Seacom Networks",
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
                  name: "What internet speeds does Seacom Networks offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Seacom Networks offers fiber internet speeds ranging from 5 Mbps to 100 Mbps, suitable for both home and business use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas does Seacom Networks cover in Kapsabet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Seacom Networks covers 18+ locations in Kapsabet including Eden Plaza, Naivas Building, Kapsabet Hospital, and many other commercial and residential areas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the uptime guarantee?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Seacom Networks provides a 99.9% uptime guarantee for all internet packages with 24/7 technical support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer business internet solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Seacom Networks offers dedicated business internet packages with static IPs, priority support, and enterprise-grade connectivity.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${brandSans.variable} ${brandMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        {/* Noscript fallback for SEO crawlers */}
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Seacom Networks — High-Speed Fiber Internet in Kapsabet, Kenya</h1>
            <p>Get lightning-fast fiber internet, CCTV security systems, and IP intercom solutions in Kapsabet, Nandi County. Reliable connectivity for homes and businesses with 99.9% uptime guarantee.</p>
            <h2>Internet Packages</h2>
            <ul>
              <li>Basic 5 Mbps — KES 1,500/mo</li>
              <li>Standard 10 Mbps — KES 2,000/mo</li>
              <li>Premium 20 Mbps — KES 2,500/mo</li>
              <li>Advanced 30 Mbps — KES 3,000/mo</li>
              <li>Ultimate 50 Mbps — KES 3,500/mo</li>
            </ul>
            <h2>Business Packages</h2>
            <ul>
              <li>Starter 30 Mbps — KES 5,000/mo</li>
              <li>Professional 50 Mbps — KES 8,000/mo</li>
              <li>Enterprise 100 Mbps — KES 20,000/mo</li>
            </ul>
            <h2>Products</h2>
            <ul>
              <li>Hikvision CCTV — 8CH HD Night Vision — KES 15,000</li>
              <li>IP Intercom — Video, Audio, Mobile — KES 11,099</li>
              <li>Wireless Intercom — 1km Range, Weatherproof — KES 20,044</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:+254707019898">0707 019 898</a> | WhatsApp: <a href="https://wa.me/254707019898">0707 019 898</a></p>
            <p>Eden Plaza, 3rd Floor, Kapsabet, Nandi County 30300, Kenya</p>
            <p>Mon–Fri 8AM–5PM | Sat 9AM–2PM</p>
          </div>
        </noscript>
      </body>
    </html>
  )
}
