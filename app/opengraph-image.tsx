import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "BioWaves - Fast Fiber Internet in Kapsabet"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        {/* Top - Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#171717",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            BioWaves
          </span>
        </div>

        {/* Middle - Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "600",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Fast, reliable fiber internet
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#737373",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Connecting homes and businesses in Kapsabet, Nandi County
          </p>
        </div>

        {/* Bottom - Stats */}
        <div
          style={{
            display: "flex",
            gap: "60px",
          }}
        >
          {[
            { value: "100 Mbps", label: "Speed" },
            { value: "99.9%", label: "Uptime" },
            { value: "1,000+", label: "Customers" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "#525252",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
