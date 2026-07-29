import type { Plan, Product } from "./pricing"

export type Pricing = { home: Plan[]; business: Plan[]; security: Product[] }
export type CommandResult = { reply: string; data?: Pricing; commitMessage?: string }

const CATEGORIES = ["home", "business", "security"] as const
type Category = (typeof CATEGORIES)[number]

const HELP = [
  "Seacom price bot. Commands:",
  "",
  "list              show every price",
  "list home         show one category (home | business | security)",
  "set <cat> <name> <price>",
  "                  e.g. set home basic 1600",
  "                       set business enterprise 22000",
  "                       set security hikvision 16000",
].join("\n")

const fmt = (list: { name: string; price: string }[]) =>
  list.map((i) => `• ${i.name} — ${i.price}`).join("\n")

// Pure: parses a chat command and (for `set`) mutates+returns the pricing to write.
// No I/O here so it stays trivially testable — see pricing-command.test.ts.
export function applyCommand(data: Pricing, text: string): CommandResult {
  const parts = text.trim().split(/\s+/)
  const cmd = (parts[0] || "").toLowerCase().replace(/^\//, "")

  if (cmd === "" || cmd === "help" || cmd === "start") return { reply: HELP }

  if (cmd === "list") {
    const cat = parts[1]?.toLowerCase()
    if (cat && !CATEGORIES.includes(cat as Category))
      return { reply: `Unknown category "${cat}". Use: ${CATEGORIES.join(", ")}.` }
    const cats = cat ? [cat as Category] : CATEGORIES
    return { reply: cats.map((c) => `${c.toUpperCase()}\n${fmt(data[c])}`).join("\n\n") }
  }

  if (cmd === "set") {
    const category = parts[1]?.toLowerCase() as Category | undefined
    if (!category || !CATEGORIES.includes(category))
      return { reply: `Unknown category. Use: set <${CATEGORIES.join("|")}> <name> <price>.` }

    const rest = parts.slice(2)
    let priceIdx = -1
    for (let i = rest.length - 1; i >= 0; i--) {
      if (/\d/.test(rest[i])) {
        priceIdx = i
        break
      }
    }
    if (priceIdx === -1) return { reply: "No price found. e.g. set home basic 1600" }

    const num = Number(rest[priceIdx].replace(/[^\d]/g, ""))
    if (!num || num <= 0) return { reply: `"${rest[priceIdx]}" is not a valid price.` }

    const nameQuery = rest
      .slice(0, priceIdx)
      .filter((t) => t.toLowerCase() !== "kes")
      .join(" ")
      .toLowerCase()
      .trim()
    if (!nameQuery) return { reply: "Missing plan name. e.g. set home basic 1600" }

    const list = data[category]
    const matches = list.filter((i) => i.name.toLowerCase().includes(nameQuery))
    if (matches.length === 0)
      return { reply: `No ${category} plan matching "${nameQuery}".\nOptions: ${list.map((i) => i.name).join(", ")}` }
    if (matches.length > 1)
      return { reply: `"${nameQuery}" matches several: ${matches.map((i) => i.name).join(", ")}.\nBe more specific.` }

    const item = matches[0]
    const newPrice = `KES ${num.toLocaleString("en-US")}`
    if (item.price === newPrice) return { reply: `${item.name} is already ${newPrice}.` }
    const oldPrice = item.price
    item.price = newPrice
    return {
      reply: `✅ ${item.name}: ${oldPrice} → ${newPrice}\nLive in ~1 min after redeploy.`,
      data,
      commitMessage: `Set ${category} ${item.name} to ${newPrice}`,
    }
  }

  return { reply: `Unknown command "${cmd}". Send "help".` }
}
