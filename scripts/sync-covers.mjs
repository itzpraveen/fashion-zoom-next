#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'tmp');
const DST = path.join(process.cwd(), 'public', 'magazine-covers');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function isImg(f) {
  return /\.(jpe?g|png|webp|avif)$/i.test(f);
}

function main() {
  ensureDir(DST);
  if (!fs.existsSync(SRC)) {
    console.log(`No tmp/ directory found at ${SRC}`);
    return;
  }
  const entries = fs.readdirSync(SRC, { withFileTypes: true });
  let copied = 0;
  for (const e of entries) {
    if (e.isFile() && isImg(e.name)) {
      const src = path.join(SRC, e.name);
      const dst = path.join(DST, e.name);
      fs.copyFileSync(src, dst);
      copied++;
      console.log(`Copied ${e.name}`);
    }
  }
  console.log(copied ? `Done. ${copied} file(s) copied.` : 'No image files found in tmp/.');
}

main();

