import { resolve } from "node:path";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const projectRoot = resolve(new URL("..", import.meta.url).pathname);
const inputPath = resolve(projectRoot, "public/assets/logo.png");
const outputPath = resolve(projectRoot, "src/app/favicon.ico");
const sizes = [256, 128, 64, 32, 16];

const images = [];
const directoryEntrySize = 16;
const iconDirBytes = 6;

const header = Buffer.alloc(iconDirBytes);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);

const directory = Buffer.alloc(sizes.length * directoryEntrySize);
let offset = iconDirBytes + directory.length;

for (const [index, size] of sizes.entries()) {
  /* Fit logo into a square canvas while keeping aspect ratio */
  const pngBuffer = await sharp(inputPath)
    .resize(size, size, {
      fit: "contain",
      /* Transparent background to avoid unwanted borders on dark mode */
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  images.push(pngBuffer);

  const entryOffset = index * directoryEntrySize;
  directory.writeUInt8(size === 256 ? 0 : size, entryOffset + 0);
  directory.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
  directory.writeUInt8(0, entryOffset + 2);
  directory.writeUInt8(0, entryOffset + 3);
  directory.writeUInt16LE(1, entryOffset + 4);
  directory.writeUInt16LE(32, entryOffset + 6);
  directory.writeUInt32LE(pngBuffer.length, entryOffset + 8);
  directory.writeUInt32LE(offset, entryOffset + 12);

  offset += pngBuffer.length;
}

const icoBuffer = Buffer.concat([header, directory, ...images]);
await writeFile(outputPath, icoBuffer);

console.log(`Generated favicon with ${sizes.length} sizes at ${outputPath}`);
