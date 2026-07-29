import data from "./pricing.json"

export type Plan = { name: string; speed: string; price: string }
export type Product = {
  name: string
  spec: string
  price: string
  image: string
  imageAlt: string
  icon: string
}

export const home: Plan[] = data.home
export const business: Plan[] = data.business
export const security: Product[] = data.security

// Cheapest price in a tier as a plain number, e.g. 1500 — used by SEO markup.
export const minPrice = (plans: Plan[]): number =>
  Math.min(...plans.map((p) => Number(p.price.replace(/\D/g, ""))))

// Cheapest price in a tier, formatted for the hero cards, e.g. "KES 1,500+"
export function startingPrice(plans: Plan[]): string {
  return `KES ${minPrice(plans).toLocaleString("en-US")}+`
}
