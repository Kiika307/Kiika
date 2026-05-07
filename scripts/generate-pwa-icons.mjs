// Generates the PNG icons referenced by manifest.webmanifest +
// Apple touch icons. Run once after the SVG logo changes.
//
// Output (in public/icons/):
//   icon-192.png         Android home screen
//   icon-512.png         Android splash + manifest
//   icon-maskable-512.png  Android maskable (with safe-area padding)
//   apple-touch-icon.png   iOS home screen (180x180)

import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "public", "kiika-logo.svg");
const OUT = join(__dirname, "..", "public", "icons");

mkdirSync(OUT, { recursive: true });

const svg = readFileSync(SRC);

const variants = [
  { name: "icon-192.png", size: 192, padding: 0 },
  { name: "icon-512.png", size: 512, padding: 0 },
  // Maskable: the platform may crop up to 10% on each edge, so we leave
  // a comfortable safe-area by rendering the glyph at 70% on a navy bg.
  { name: "icon-maskable-512.png", size: 512, padding: 0.15, bg: { r: 42, g: 31, b: 22 } },
  { name: "apple-touch-icon.png", size: 180, padding: 0.05, bg: { r: 42, g: 31, b: 22 } },
];

for (const v of variants) {
  const inner = Math.round(v.size * (1 - v.padding * 2));
  const offset = Math.round((v.size - inner) / 2);
  let pipeline = sharp({
    create: {
      width: v.size,
      height: v.size,
      channels: 4,
      background: v.bg
        ? { r: v.bg.r, g: v.bg.g, b: v.bg.b, alpha: 1 }
        : { r: 0, g: 0, b: 0, alpha: 0 },
    },
  }).composite([
    {
      input: await sharp(svg, { density: 600 })
        .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer(),
      top: offset,
      left: offset,
    },
  ]);
  await pipeline.png({ compressionLevel: 9 }).toFile(join(OUT, v.name));
  console.log("  ", v.name, `${v.size}x${v.size}`);
}
console.log("\nDone — icons in /public/icons/");
