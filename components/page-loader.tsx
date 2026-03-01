"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Minimum display time for smooth UX
    const minDisplayTime = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    // Start fade out after loading
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 1200)

    return () => {
      clearTimeout(minDisplayTime)
      clearTimeout(fadeTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-neutral-200 dark:border-neutral-800 animate-ping opacity-20" />
            </div>
            <div className="relative w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white dark:text-neutral-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Seacom Networks
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-neutral-900 dark:bg-white rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}
