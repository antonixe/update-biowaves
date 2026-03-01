"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const minDisplayTime = setTimeout(() => {
      setIsLoading(false)
    }, 800)

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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-stone-50 dark:bg-neutral-950 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-10">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
            Seacom
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-px bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div className="h-full bg-teal-600 animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}
