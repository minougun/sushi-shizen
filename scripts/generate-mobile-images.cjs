#!/usr/bin/env node
/**
 * スマホ向けに幅を抑えた WebP / JPEG を images/opt/ に出力する。
 * 実行: npm run images:mobile
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "images", "opt");
fs.mkdirSync(outDir, { recursive: true });

async function outWebp(srcRel, destName, width, quality = 82) {
  const src = path.join(root, srcRel);
  const dest = path.join(outDir, destName);
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(dest);
  const st = fs.statSync(dest);
  console.log(`${destName}\t${Math.round(st.size / 1024)}KB`);
}

async function main() {
  console.log("output:", outDir);
  await outWebp("images/photo/sushi-photo-0.png", "hero-sushi-720w.webp", 720);
  await outWebp("images/slider/slide-1.png", "slide-1-900w.webp", 900);
  await outWebp("images/slider/slide-2.png", "slide-2-900w.webp", 900);
  await outWebp("images/slider/slide-3.png", "slide-3-900w.webp", 900);
  await outWebp("images/photo/sushi-photo-5.png", "sushi-photo-5-900w.webp", 900);
  await outWebp("images/photo/craft-hand.jpg", "craft-hand-800w.webp", 800);
  await outWebp("images/photo/concept-counter.jpg", "concept-counter-800w.webp", 800);
  await outWebp("images/photo/chef-somono.jpg", "chef-somono-800w.webp", 800);
  await outWebp("images/photo/course-omakase.jpg", "course-omakase-800w.webp", 800);
  await outWebp("images/bg/AdobeStock_54536706122.png", "parallax-arc-960w.webp", 960);
  await outWebp("images/bg/AdobeStock_401925665.jpeg", "parallax-base-1400w.webp", 1400);
  console.log("done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
