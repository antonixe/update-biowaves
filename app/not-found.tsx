"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, MessageCircle } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--field)] px-4 py-16 text-[var(--ink)]">
      <section className="route-grid w-full max-w-xl rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] p-6 sm:p-8">
        <p className="section-label">Route not found</p>
        <h1 className="mt-4 text-[clamp(4.5rem,18vw,8rem)] font-bold leading-none tracking-normal text-[color-mix(in_oklch,var(--ink)_18%,transparent)]">
          404
        </h1>
        <h2 className="mt-5 text-4xl font-bold leading-none tracking-normal sm:text-5xl">This page is outside coverage.</h2>
        <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
          The address may have moved. Go back, return home, or contact Seacom if you were trying to confirm a building.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="h-12 rounded-md border-[color-mix(in_oklch,var(--ink)_18%,transparent)] bg-[var(--paper)] font-bold text-[var(--ink)] hover:bg-[var(--route)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/"
            }}
            className="h-12 rounded-md bg-[var(--ink)] font-bold text-[var(--stone)] hover:bg-[color-mix(in_oklch,var(--ink)_88%,var(--signal))]"
          >
            <Home className="mr-2 h-4 w-4" />
            Back home
          </Button>
        </div>

        <a
          href="https://wa.me/254707019898"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm font-bold text-[var(--signal)] hover:text-[var(--ink)]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp coverage check
        </a>
      </section>
    </main>
  )
}
