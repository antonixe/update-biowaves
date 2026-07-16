---
name: Seacom Networks
description: Local Kapsabet ISP site with fiber plans, coverage proof, and security product quoting.
colors:
  field-cream: "#f7f1e4"
  paper-cream: "#fbf7ee"
  route-tan: "#f1eadc"
  deep-emerald: "#092e29"
  night-emerald: "#0b1715"
  panel-emerald: "#10211e"
  signal-teal: "#0f766e"
  live-teal: "#5eead4"
  service-amber: "#f59e0b"
  amber-soft: "#fef3c7"
  stone-text: "#f5f5f4"
typography:
  display:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "normal"
  headline:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "normal"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.deep-emerald}"
    textColor: "{colors.stone-text}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "48px"
  button-accent:
    backgroundColor: "{colors.service-amber}"
    textColor: "{colors.deep-emerald}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  operational-panel:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.deep-emerald}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Seacom Networks

## 1. Overview

**Creative North Star: "The Local Network Desk"**

The interface should feel like a field operations board for a serious local ISP: grounded, mapped, useful, and close to the customer. It is a marketing site, but the design should communicate service capability more than lifestyle aspiration.

The system rejects generic AI polish: no floating gradient orbs, no purple SaaS sheen, no nested-card wallpaper, and no vague hero claims. Every section should help a Kapsabet visitor answer one of four questions: can I get service, what plan fits, what else can Seacom install, and how do I contact the team?

**Key Characteristics:**
- Warm field neutrals instead of pure white or gray.
- Deep emerald and teal for network credibility.
- Amber for service urgency, calls, and route highlights.
- Table-like pricing and operational panels over decorative cards.
- Strong phone and WhatsApp affordances.

## 2. Colors

The palette is restrained but not sterile: cream field surfaces, deep emerald structure, teal signal states, and amber service actions.

### Primary
- **Deep Emerald** (#092e29): Primary text, dark buttons, headers, and high-confidence structural areas.
- **Signal Teal** (#0f766e): Link accents, status indicators, route nodes, and support signals.

### Secondary
- **Service Amber** (#f59e0b): Calls to action, coverage highlights, and important operational emphasis. Use sparingly so it keeps urgency.

### Neutral
- **Field Cream** (#f7f1e4): Page background for light mode.
- **Paper Cream** (#fbf7ee): Panels and table rows.
- **Route Tan** (#f1eadc): Alternating bands and section backgrounds.
- **Night Emerald** (#0b1715): Dark mode background. It is tinted, never pure black.
- **Panel Emerald** (#10211e): Dark mode panels and inset surfaces.
- **Stone Text** (#f5f5f4): Light text on deep surfaces. Avoid weak gray on color.

### Named Rules

**The Local Proof Rule.** Use color to make coverage, pricing, and contact clearer. Never use color only as decoration.

**The Amber Rarity Rule.** Amber is for actions and route emphasis. It should not flood the whole page.

## 3. Typography

**Display Font:** Barlow with system fallback  
**Body Font:** Barlow with system fallback  
**Label/Mono Font:** Roboto Mono with monospace fallback

**Character:** The typography is technical and approachable. It should feel like service documentation made public-facing, not a fashion editorial or a generic SaaS template.

### Hierarchy
- **Display** (600, clamp 2.25rem to 4.5rem, 1.02 line-height): Site name and first-screen headline moments.
- **Headline** (600, clamp 1.875rem to 3rem, 1.12 line-height): Section headings.
- **Title** (700, 1.125rem to 1.5rem): Plan names, product names, and proof points.
- **Body** (400, 1rem, 1.75 line-height): Explanatory text, capped around 65-75 characters where possible.
- **Label** (Roboto Mono, uppercase, tracked): Status labels, table headings, coverage markers, and small operational metadata.

### Named Rules

**No Editorial Italics Rule.** Do not use serif italics or magazine-style drama for ISP service messaging.

**No Viewport Font Scaling Rule.** Do not scale type directly with viewport width outside controlled clamp values.

## 4. Elevation

The system is mostly flat and layered through tone, borders, and spacing. Shadows are allowed only for the hero route panel or high-level overlays, where they should feel like physical depth rather than glassmorphism.

Use 1px borders with low-opacity emerald or stone tints. Avoid thick glows, neon shadows, and blurred glass panels.

## 5. Components

**Header:** Fixed, compact, and operational. It should expose navigation, brand, theme toggle, and the primary phone number without becoming a marketing banner.

**Hero Route Panel:** A signature component. Use mapped lines, building nodes, status chips, and service cards to show local infrastructure. It replaces abstract background decoration.

**Pricing Table:** Plans should scan row by row with name, speed, price, fit, and action. Recommended plans may use amber tint but should remain readable.

**Product Panels:** Use for CCTV and intercom products only when each panel contains a real product, spec, price, and quote path.

**Coverage List:** Prefer named locations in a dense grid over a decorative marquee. A map-like panel can accompany the list, but the list is the source of truth.

**Contact Block:** Must include phone, WhatsApp, email, office location, and hours. Contact is a primary outcome, not a footer afterthought.

## 6. Do's and Don'ts

**Do** keep coverage, phone numbers, pricing, and office location visible and direct.  
**Do** use warm tinted neutrals, deep emerald, teal, and restrained amber.  
**Do** make plan comparison table-like and easy to scan on mobile.  
**Do** use icons only when they clarify an action or service.  
**Do** preserve strong focus states and readable contrast in both themes.

**Don't** use purple gradients, floating orbs, glassmorphism, or generic AI SaaS hero styling.  
**Don't** put every paragraph in a card or nest cards inside cards.  
**Don't** use gray text on saturated backgrounds.  
**Don't** hide contact details behind vague conversion copy.  
**Don't** make the site feel like an expensive luxury editorial brand.
