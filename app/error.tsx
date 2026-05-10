"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, Phone, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--field)] px-4 py-16 text-[var(--ink)]">
      <section className="w-full max-w-xl rounded-lg border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] p-6 sm:p-8">
        <p className="section-label">Service interruption</p>
        <h1 className="mt-4 text-4xl font-bold leading-none tracking-normal sm:text-5xl">Something went wrong.</h1>
        <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
          The page failed to load. Try again, return home, or call the Seacom desk if you were checking plans or coverage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={reset}
            variant="outline"
            className="h-12 rounded-md border-[color-mix(in_oklch,var(--ink)_18%,transparent)] bg-[var(--paper)] font-bold text-[var(--ink)] hover:bg-[var(--route)]"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/"
            }}
            className="h-12 rounded-md bg-[var(--solid)] font-bold text-[var(--solid-ink)] hover:bg-[var(--solid-hover)]"
          >
            <Home className="mr-2 h-4 w-4" />
            Back home
          </Button>
        </div>

        <a href="tel:+254707019898" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm font-bold text-[var(--signal)] hover:text-[var(--ink)]">
          <Phone className="h-4 w-4" />
          Call 0707 019 898
        </a>
      </section>
    </main>
  )
}
