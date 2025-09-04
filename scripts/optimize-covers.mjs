#!/usr/bin/env node
// Optimize magazine covers from /tmp/magazine_covers to public/magazine-covers as WebP (and optional AVIF).
// Usage: pnpm optimize:covers

import fs from 'fs';
import path from 'path';

const SRC = process.env.SRC || '/tmp/magazine_covers';
const DST = process.env.DST || path.join(process.cwd(), 'public', 'magazine-covers');
const MAX_W = parseInt(process.env.WIDTH || '1400', 10);   // reasonable desktop width
const MAX_H = parseInt(process.env.HEIGHT || '1867', 10);  // 3:4 ratio
const QUALITY = parseInt(process.env.QUALITY || '82', 10);
const MAKE_AVIF = /^true$/i.test(process.env.AVIF || 'false');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function isImg(f) { return /\.(jpe?g|png|webp|avif)$/i.test(f); }
function slugify(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function loadSharp() {
  try {
    const mod = await import('sharp');
    return mod.default || mod;
  } catch (err) {
    console.error('\nThis script requires the "sharp" package.');
    console.error('Install it with: pnpm install');
    console.error('Error:', err?.message || err);
    process.exit(1);
  }
}

async function main() {
  ensureDir(DST);
  if (!fs.existsSync(SRC)) {
    console.log(`Source directory not found: ${SRC}`);
    process.exit(0);
  }
  const sharp = await loadSharp();
  const entries = fs.readdirSync(SRC, { withFileTypes: true });
  let count = 0;
  for (const e of entries) {
    if (!e.isFile() || !isImg(e.name)) continue;
    const src = path.join(SRC, e.name);
    const base = slugify(e.name);
    const outWebp = path.join(DST, `${base}.webp`);
    const outAvif = path.join(DST, `${base}.avif`);
    const img = sharp(src).rotate();
    try {
      await img
        .resize({ width: MAX_W, height: MAX_H, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outWebp);
      if (MAKE_AVIF) {
        await sharp(src)
          .resize({ width: MAX_W, height: MAX_H, fit: 'inside', withoutEnlargement: true })
          .avif({ quality: Math.min(QUALITY, 75) })
          .toFile(outAvif);
      }
      count++;
      console.log(`Optimized: ${e.name} -> ${path.basename(outWebp)}${MAKE_AVIF ? ' (+avif)' : ''}`);
    } catch (err) {
      console.error(`Failed: ${e.name}`, err?.message || err);
    }
  }
  console.log(count ? `\nDone. ${count} file(s) optimized → ${DST}` : 'No images to optimize.');
}

main();

