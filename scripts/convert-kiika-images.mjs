// Convert all PNG images under public/images/kiika/ to WebP, slugify
// filenames, and remove the original PNGs to keep the repo light.
//
// Run: node scripts/convert-kiika-images.mjs

import { readdir, rename, rm, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "public", "images", "kiika");

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const entries = await readdir(DIR);
const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));

if (!pngs.length) {
  console.log("No PNG files to convert in", DIR);
  process.exit(0);
}

console.log(`Converting ${pngs.length} PNG → WebP in ${DIR}`);

let totalIn = 0;
let totalOut = 0;
const manifest = [];

for (const file of pngs) {
  const src = join(DIR, file);
  const slug = slugify(basename(file, extname(file)));
  const dst = join(DIR, `${slug}.webp`);
  const inSize = (await stat(src)).size;
  totalIn += inSize;

  // Resize down to max 1600px on the long edge (more than enough for any web use),
  // quality 78 — visually indistinguishable from the source for photographic content.
  await sharp(src)
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(dst);

  const outSize = (await stat(dst)).size;
  totalOut += outSize;

  manifest.push({ slug, original: file, kb: Math.round(outSize / 1024) });
  console.log(
    `  ${slug}.webp  ${(outSize / 1024).toFixed(0)} KB  (was ${(inSize / 1024).toFixed(0)} KB, -${Math.round((1 - outSize / inSize) * 100)}%)`,
  );

  // Delete the original PNG once the WebP exists.
  await rm(src);
}

console.log(
  `\nTotal: ${(totalIn / 1024 / 1024).toFixed(1)} MB → ${(totalOut / 1024 / 1024).toFixed(1)} MB (-${Math.round((1 - totalOut / totalIn) * 100)}%)`,
);
console.log("\nSlugs:");
for (const m of manifest.sort((a, b) => a.slug.localeCompare(b.slug))) {
  console.log(`  ${m.slug}`);
}
