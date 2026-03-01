// Security utilities for the Seacom Networks website

export class RateLimiter {
  private attempts: Map<string, number[]> = new Map()
  private readonly maxAttempts: number
  private readonly windowMs: number

  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
  }

  canAttempt(key: string): boolean {
    const now = Date.now()
    const userAttempts = this.attempts.get(key) || []

    // Remove old attempts outside the window
    const recentAttempts = userAttempts.filter((time) => now - time < this.windowMs)

    if (recentAttempts.length >= this.maxAttempts) {
      return false
    }

    recentAttempts.push(now)
    this.attempts.set(key, recentAttempts)
    return true
  }

  getRemainingAttempts(key: string): number {
    const now = Date.now()
    const userAttempts = this.attempts.get(key) || []
    const recentAttempts = userAttempts.filter((time) => now - time < this.windowMs)
    return Math.max(0, this.maxAttempts - recentAttempts.length)
  }

  getResetTime(key: string): number {
    const userAttempts = this.attempts.get(key) || []
    if (userAttempts.length === 0) return 0

    const oldestAttempt = Math.min(...userAttempts)
    return oldestAttempt + this.windowMs
  }
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .replace(/data:/gi, "") // Remove data: protocol
    .trim()
}

// HTML escaping
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Phone number validation
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-$$$$]{10,15}$/
  return phoneRegex.test(phone)
}

// URL sanitization
export const sanitizeUrl = (url: string): string => {
  try {
    const parsedUrl = new URL(url)
    // Only allow http and https protocols
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return "#"
    }
    return parsedUrl.toString()
  } catch {
    return "#"
  }
}

// Content Security Policy nonce generator
export const generateNonce = (): string => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// CSRF token generator
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Password strength validator
export const validatePasswordStrength = (
  password: string,
): {
  isValid: boolean
  score: number
  feedback: string[]
} => {
  const feedback: string[] = []
  let score = 0

  if (password.length >= 8) score += 1
  else feedback.push("Password must be at least 8 characters long")

  if (/[a-z]/.test(password)) score += 1
  else feedback.push("Password must contain lowercase letters")

  if (/[A-Z]/.test(password)) score += 1
  else feedback.push("Password must contain uppercase letters")

  if (/\d/.test(password)) score += 1
  else feedback.push("Password must contain numbers")

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1
  else feedback.push("Password must contain special characters")

  return {
    isValid: score >= 4,
    score,
    feedback,
  }
}

// Secure random string generator
export const generateSecureRandomString = (length = 32): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const array = new Uint8Array(length)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => chars[byte % chars.length]).join("")
}
