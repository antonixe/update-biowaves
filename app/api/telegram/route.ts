import { NextResponse } from "next/server"
import { applyCommand, type Pricing } from "@/lib/pricing-command"

export const runtime = "nodejs"

// The pricing file lives in this repo; the bot commits changes and Vercel redeploys.
const REPO = "antonixe/update-biowaves"
const BRANCH = "main"
const FILE = "lib/pricing.json"
const GH = "https://api.github.com"

const ghHeaders = () => ({
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "Content-Type": "application/json",
})

async function ghGet(): Promise<{ data: Pricing; sha: string }> {
  const res = await fetch(`${GH}/repos/${REPO}/contents/${FILE}?ref=${BRANCH}`, {
    headers: ghHeaders(),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`GitHub read failed (${res.status})`)
  const json = await res.json()
  return { data: JSON.parse(Buffer.from(json.content, "base64").toString("utf8")), sha: json.sha }
}

async function ghPut(data: Pricing, sha: string, message: string) {
  const content = Buffer.from(JSON.stringify(data, null, 2) + "\n").toString("base64")
  const res = await fetch(`${GH}/repos/${REPO}/contents/${FILE}`, {
    method: "PUT",
    headers: ghHeaders(),
    body: JSON.stringify({ message, content, sha, branch: BRANCH }),
  })
  if (!res.ok) throw new Error(`GitHub write failed (${res.status})`)
}

const tg = (method: string, body: unknown) =>
  fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

export function GET() {
  return NextResponse.json({ ok: true, bot: "seacom-price-bot" })
}

export async function POST(req: Request) {
  // Telegram echoes this secret header on every webhook call — reject anything else.
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET
  if (secret && req.headers.get("x-telegram-bot-api-secret-token") !== secret) {
    return new NextResponse("forbidden", { status: 401 })
  }

  let update: { message?: any; edited_message?: any }
  try {
    update = await req.json()
  } catch {
    return NextResponse.json({ ok: true })
  }

  const msg = update.message ?? update.edited_message
  const text: string | undefined = msg?.text
  const chatId = msg?.chat?.id
  if (!msg || !text || chatId === undefined) return NextResponse.json({ ok: true })

  // Owner-only: no one but the configured Telegram account can change prices.
  if (String(msg.from?.id) !== process.env.TELEGRAM_OWNER_ID) {
    await tg("sendMessage", { chat_id: chatId, text: "⛔ Not authorized." })
    return NextResponse.json({ ok: true })
  }

  try {
    const { data, sha } = await ghGet()
    const result = applyCommand(data, text)
    if (result.data && result.commitMessage) await ghPut(result.data, sha, result.commitMessage)
    await tg("sendMessage", { chat_id: chatId, text: result.reply })
  } catch (err) {
    await tg("sendMessage", { chat_id: chatId, text: `⚠️ ${err instanceof Error ? err.message : "Failed."}` })
  }
  // ponytail: GitHub GET+PUT run inline in the webhook (~1s). Fine for one owner;
  // move to a queue only if this ever fans out to many editors.
  return NextResponse.json({ ok: true })
}
