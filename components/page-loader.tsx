"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const minDisplayTime = setTimeout(() => {
      setIsLoading(false)
    }, 420)

    const fadeTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 720)

    return () => {
      clearTimeout(minDisplayTime)
      clearTimeout(fadeTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--field)] transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-sm px-6">
        <div className="flex items-center gap-3">
          <div className="route-grid grid h-11 w-11 place-items-center rounded-md border border-[color-mix(in_oklch,var(--ink)_14%,transparent)] bg-[var(--paper)] text-[var(--ink)]">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 15.5c4.4-4 11.6-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7.6 18.4c2.5-2.1 6.3-2.1 8.8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-[var(--ink)]">Seacom Networks</p>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
              Starting signal
            </p>
          </div>
        </div>

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-[color-mix(in_oklch,var(--ink)_12%,transparent)]">
          <div className="h-full w-2/3 rounded-full bg-[var(--service)] animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}
