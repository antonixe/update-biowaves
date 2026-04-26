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
  title: {
    default: "Seacom Networks | Fiber Internet in Kapsabet",
    template: "%s | Seacom Networks",
  },
  description:
    "Local Kapsabet ISP for home and business fiber internet, CCTV, and intercom installation. Plans from KES 1,500 with support from Eden Plaza.",
  keywords: [
    "fiber internet Kapsabet",
    "internet provider Kapsabet",
    "home internet Kapsabet",
    "business internet Kapsabet",
    "ISP Kapsabet",
    "CCTV installation Kapsabet",
    "intercom installation Kapsabet",
    "Seacom Networks",
    "Nandi County internet",
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
    title: "Seacom Networks | Fiber Internet in Kapsabet",
    description:
      "Local Kapsabet fiber internet, CCTV, and intercom installation for homes, offices, shops, and buildings.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Seacom Networks fiber internet in Kapsabet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seacom Networks | Fiber Internet in Kapsabet",
    description:
      "Fiber plans, CCTV, and intercom installation from a local Kapsabet team.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.json",
  category: "Technology",
  generator: "Next.js",
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://seacomnetworks.co.ke/#website",
      name: "Seacom Networks",
      url: "https://seacomnetworks.co.ke",
      inLanguage: "en-KE",
      publisher: { "@id": "https://seacomnetworks.co.ke/#business" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://seacomnetworks.co.ke/#business",
      name: "Seacom Networks",
      url: "https://seacomnetworks.co.ke",
      telephone: "+254707019898",
      email: "info@seacomnetworks.co.ke",
      priceRange: "KES 1,500+",
      description:
        "Local Kapsabet provider for fiber internet plans, CCTV installation, and intercom installation.",
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
        latitude: 0.20387,
        longitude: 35.105,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Kapsabet" },
        { "@type": "AdministrativeArea", name: "Nandi County" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Seacom Networks services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Home fiber internet",
            price: "1500",
            priceCurrency: "KES",
            itemOffered: {
              "@type": "Service",
              name: "Home fiber internet in Kapsabet",
              serviceType: "Internet service",
            },
          },
          {
            "@type": "Offer",
            name: "Business internet",
            price: "5000",
            priceCurrency: "KES",
            itemOffered: {
              "@type": "Service",
              name: "Business internet in Kapsabet",
              serviceType: "Internet service",
            },
          },
          {
            "@type": "Offer",
            name: "CCTV and intercom installation",
            itemOffered: {
              "@type": "Service",
              name: "CCTV and intercom installation",
              serviceType: "Security system installation",
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-KE" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Kapsabet, Nandi County, Kenya" />
        <meta name="geo.position" content="0.20387;35.105" />
        <meta name="ICBM" content="0.20387, 35.105" />
        <meta name="business:contact_data:street_address" content="Eden Plaza, 3rd Floor" />
        <meta name="business:contact_data:locality" content="Kapsabet" />
        <meta name="business:contact_data:region" content="Nandi County" />
        <meta name="business:contact_data:postal_code" content="30300" />
        <meta name="business:contact_data:country_name" content="Kenya" />
        <meta name="business:contact_data:phone_number" content="+254707019898" />
        <meta name="business:contact_data:email" content="info@seacomnetworks.co.ke" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
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
      </body>
    </html>
  )
}
