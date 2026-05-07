// One-time setup for Web Push.
// Generates a VAPID keypair and prints the values to add as Vercel
// environment variables. Save the output securely — the private key
// is the proof-of-ownership the browser uses to verify push messages.
//
// Run: node scripts/generate-vapid-keys.mjs
//
// Then on Vercel (Settings → Environment Variables, scope: Prod + Preview):
//   NEXT_PUBLIC_VAPID_PUBLIC_KEY = (the public key — safe to expose)
//   VAPID_PRIVATE_KEY            = (the private key — Sensitive)
//   VAPID_SUBJECT                = mailto:contact@intio.fr (or your contact)
//
// Never rotate these unless absolutely necessary — every existing
// browser subscription becomes invalid when keys change.

import webpush from "web-push";

const keys = webpush.generateVAPIDKeys();

console.log("\n──────────────────────────────────────────────────────────");
console.log("VAPID keys — add these to Vercel:");
console.log("──────────────────────────────────────────────────────────");
console.log("");
console.log("NEXT_PUBLIC_VAPID_PUBLIC_KEY =");
console.log("  " + keys.publicKey);
console.log("");
console.log("VAPID_PRIVATE_KEY =");
console.log("  " + keys.privateKey);
console.log("");
console.log("VAPID_SUBJECT =");
console.log("  mailto:contact@intio.fr");
console.log("");
console.log("──────────────────────────────────────────────────────────");
console.log("Keep the private key secret. Anyone with it can send push");
console.log("notifications signed as KIIKA.");
console.log("──────────────────────────────────────────────────────────\n");
