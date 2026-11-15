/**
 * Prepares web-ready logo assets from the original raster logo files.
 *
 * The supplied logos are white + emerald artwork on a pure black background.
 * We remove the black by "un-multiplying" each pixel (alpha = brightest channel),
 * which is lossless when composited back on black/near-black — so the artwork,
 * colours and geometry are unchanged. Nothing is redrawn or recoloured.
 *
 * Usage: node scripts/prepare-logos.mjs <path-to-kit-assets-folder>
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/prepare-logos.mjs <assets-folder>");
  process.exit(1);
}
const out = path.resolve("public/brand");
const appDir = path.resolve("src/app");
await mkdir(out, { recursive: true });

const NOISE = 14; // JPEG noise floor near black
const SOLID = 110; // pixels at least this bright are solid artwork (kept fully opaque, original colour)

async function unmultiply(file) {
  const { data, info } = await sharp(await readFile(file))
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const m = Math.max(r, g, b);
    let a = m < NOISE ? 0 : Math.min(255, Math.round((m * 255) / SOLID));
    if (a > 0) {
      // un-multiply against black so edges composite back to the original pixels
      const k = 255 / a;
      px[j] = Math.min(255, Math.round(r * k));
      px[j + 1] = Math.min(255, Math.round(g * k));
      px[j + 2] = Math.min(255, Math.round(b * k));
    }
    px[j + 3] = a;
  }
  return { px, width: info.width, height: info.height };
}

function bbox({ px, width, height }, y0 = 0, y1 = height) {
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = y0; y < y1; y++)
    for (let x = 0; x < width; x++)
      if (px[(y * width + x) * 4 + 3] > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

const toSharp = ({ px, width, height }) =>
  sharp(px, { raw: { width, height, channels: 4 } });

// ---- Icon mark -------------------------------------------------------------
const icon = await unmultiply(path.join(src, "logo_B_icon_original.jpeg"));
const iconBox = bbox(icon);
const iconPng = await toSharp(icon).extract(iconBox).png().toBuffer();
await sharp(iconPng).resize({ height: 512 }).png().toBuffer().then((b) => writeFile(path.join(out, "logo-icon.png"), b));

// Favicons keep the original black square so the white B is visible on light tabs.
const iconSquare = await sharp(await readFile(path.join(src, "logo_B_icon_original.jpeg")))
  .resize(512, 512)
  .png()
  .toBuffer();
await sharp(iconSquare).toBuffer().then((b) => writeFile(path.join(appDir, "icon.png"), b));
await sharp(iconSquare).resize(180, 180).toBuffer().then((b) => writeFile(path.join(appDir, "apple-icon.png"), b));

// ---- Full stacked lockup ---------------------------------------------------
const full = await unmultiply(path.join(src, "logo_full_original.png"));
const fullBox = bbox(full);
await toSharp(full).extract(fullBox).png().toBuffer().then((b) => writeFile(path.join(out, "logo-full.png"), b));

// ---- Split the lockup into mark + wordmark (find the empty row band) -------
const rowHasInk = (y) => {
  for (let x = 0; x < full.width; x++) if (full.px[(y * full.width + x) * 4 + 3] > 40) return true;
  return false;
};
let gapStart = -1;
for (let y = fullBox.top + Math.floor(fullBox.height * 0.3); y < fullBox.top + fullBox.height; y++) {
  if (!rowHasInk(y)) { gapStart = y; break; }
}
if (gapStart < 0) throw new Error("Could not separate mark and wordmark");
let gapEnd = gapStart;
while (!rowHasInk(gapEnd)) gapEnd++;

const markBox = bbox(full, fullBox.top, gapStart);
const wordBox = bbox(full, gapEnd, fullBox.top + fullBox.height);
const markBuf = await toSharp(full).extract(markBox).png().toBuffer();
const wordBuf = await toSharp(full).extract(wordBox).png().toBuffer();
await sharp(wordBuf).png().toBuffer().then((b) => writeFile(path.join(out, "logo-wordmark.png"), b));

// Horizontal header lockup: original mark + original wordmark, side by side,
// same artwork and proportions as the approved homepage reference.
const H = 240;
const mark = await sharp(markBuf).resize({ height: H }).png().toBuffer();
const markMeta = await sharp(mark).metadata();
const wordH = Math.round(H * 0.78);
const word = await sharp(wordBuf).resize({ height: wordH }).png().toBuffer();
const wordMeta = await sharp(word).metadata();
const gap = Math.round(H * 0.16);
const width = markMeta.width + gap + wordMeta.width;
await sharp({ create: { width, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([
    { input: mark, left: 0, top: 0 },
    { input: word, left: markMeta.width + gap, top: Math.round((H - wordH) / 2) },
  ])
  .png()
  .toBuffer().then((b) => writeFile(path.join(out, "logo-horizontal.png"), b));

console.log("Logo assets written:", { icon: iconBox, full: fullBox, mark: markBox, word: wordBox, horizontal: { width, height: H } });
