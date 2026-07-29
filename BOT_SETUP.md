# Price bot (Telegram)

Edit plan and product prices by texting a Telegram bot. Each change commits
`lib/pricing.json` to `main`, which triggers a Vercel redeploy (~1 min to go live).

Prices shown on the site all read from `lib/pricing.json`:
- Home + Business plans (`components/packages.tsx`)
- Security add-ons (`components/products.tsx`)
- Hero "from" cards (`components/hero.tsx`, derived — cheapest plan in each tier)

## One-time setup

1. **Create the bot** — message [@BotFather](https://t.me/BotFather), send `/newbot`,
   pick a name + username. Copy the **token** it gives you.

2. **Get your Telegram user ID** — message [@userinfobot](https://t.me/userinfobot).
   It replies with your numeric **id**. This is the only account allowed to change prices.

3. **Pick a webhook secret** — any random string (e.g. `openssl rand -hex 16`).

4. **Create a GitHub token** — <https://github.com/settings/tokens?type=beta> →
   *Repository access* = only `antonixe/update-biowaves` →
   *Permissions* → *Contents* = **Read and write** → generate, copy.

5. **Add env vars in Vercel** (Project → Settings → Environment Variables, Production):

   | Name | Value |
   |------|-------|
   | `TELEGRAM_BOT_TOKEN` | token from step 1 |
   | `TELEGRAM_OWNER_ID` | your id from step 2 |
   | `TELEGRAM_WEBHOOK_SECRET` | secret from step 3 |
   | `GITHUB_TOKEN` | token from step 4 |

6. **Deploy** these code changes (push to `main`).

7. **Register the webhook** (one-time), substituting your values:

   ```
   curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<your-domain>/api/telegram&secret_token=<SECRET>"
   ```

   Check it: `curl "https://api.telegram.org/bot<TOKEN>/getWebhookInfo"`

## Commands

Text these to the bot:

```
help                              show commands
list                              show every price
list home                         one category (home | business | security)
set home basic 1600               set a plan price
set business enterprise 22000
set security hikvision 16000      name is matched by substring
```

- Price accepts `1600`, `1,600`, or `KES 1,600` — all become `KES 1,600`.
- Ambiguous or unknown names are rejected with the list of valid options; nothing is written.

SEO markup in `app/layout.tsx` (meta description, `priceRange`, JSON-LD `Offer`
prices) also reads from `lib/pricing.json`, quoting the cheapest plan in each
tier — so a bot edit updates the structured data too.
