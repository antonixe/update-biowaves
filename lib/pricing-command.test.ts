// Run: npx tsx lib/pricing-command.test.ts   (node --experimental-strip-types on Node >= 22.6)
import assert from "node:assert"
import { applyCommand, type Pricing } from "./pricing-command.ts"

const fresh = (): Pricing => ({
  home: [
    { name: "Basic", speed: "5 Mbps", price: "KES 1,500" },
    { name: "Ultimate", speed: "50 Mbps", price: "KES 3,500" },
  ],
  business: [{ name: "Enterprise", speed: "100 Mbps", price: "KES 20,000" }],
  security: [
    { name: "Hikvision CCTV", spec: "8CH", price: "KES 15,000", image: "", imageAlt: "", icon: "Camera" },
    { name: "IP Intercom", spec: "video", price: "KES 11,099", image: "", imageAlt: "", icon: "PhoneCall" },
    { name: "Wireless Intercom", spec: "1km", price: "KES 20,044", image: "", imageAlt: "", icon: "Radio" },
  ],
})

// happy path: plain number
let r = applyCommand(fresh(), "set home basic 1600")
assert.equal(r.data?.home[0].price, "KES 1,600", "basic updated + comma-formatted")
assert.ok(r.commitMessage?.includes("KES 1,600"))

// forgiving input: "KES" token + comma in the number
r = applyCommand(fresh(), "set home basic KES 1,600")
assert.equal(r.data?.home[0].price, "KES 1,600", "strips KES token and comma")

// multi-word name via substring match
r = applyCommand(fresh(), "set security hikvision 16000")
assert.equal(r.data?.security[0].price, "KES 16,000", "matches Hikvision CCTV by substring")

// ambiguous / no match / bad category / no-op => no write
assert.equal(applyCommand(fresh(), "set security intercom 5000").data, undefined, "ambiguous: no write")
assert.equal(applyCommand(fresh(), "set home nonesuch 9").data, undefined, "no match: no write")
assert.equal(applyCommand(fresh(), "set nope basic 9").data, undefined, "bad category: no write")
assert.equal(applyCommand(fresh(), "set home basic 1500").data, undefined, "same price: no write")
assert.equal(applyCommand(fresh(), "set home basic abc").data, undefined, "no digits: no write")

// read-only commands never write
assert.equal(applyCommand(fresh(), "list").data, undefined)
assert.ok(applyCommand(fresh(), "help").reply.startsWith("Seacom"))

console.log("pricing-command: all assertions passed")
