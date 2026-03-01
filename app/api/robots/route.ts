import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Sitemap
Sitemap: https://seacomnetworks.co.ke/sitemap.xml

# Crawl delay to prevent server overload
Crawl-delay: 1

# Specific rules for search engines
User-agent: Googlebot
Allow: /
Disallow: /api/
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Disallow: /api/
Crawl-delay: 2

# Block malicious bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  })
}
