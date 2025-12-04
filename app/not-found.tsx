"use client"

import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-neutral-200 dark:text-neutral-800">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
          Page not found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Contact Link */}
        <p className="mt-10 text-sm text-neutral-500">
          Need help?{" "}
          <a 
            href="/#contact" 
            className="text-neutral-900 dark:text-white hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </div>
  )
}
