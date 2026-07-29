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

// Cheapest price in a tier, formatted for the hero cards, e.g. "KES 1,500+"
export function startingPrice(plans: Plan[]): string {
  const min = Math.min(...plans.map((p) => Number(p.price.replace(/\D/g, ""))))
  return `KES ${min.toLocaleString("en-US")}+`
}
