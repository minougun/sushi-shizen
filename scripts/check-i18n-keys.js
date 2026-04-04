#!/usr/bin/env node
/**
 * Ensures index.html data-i18n / data-i18n-html / data-i18n-attrs keys exist in js/main.js.
 * Run: npm run check:i18n
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const mainJsPath = path.join(root, "js", "main.js");

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function collectHtmlKeys(html) {
  const keys = new Set();

  const addFromAttr = (attr) => {
    const re = new RegExp(`${attr}="([^"]+)"`, "g");
    let m;
    while ((m = re.exec(html))) {
      keys.add(m[1]);
    }
  };

  addFromAttr("data-i18n");
  addFromAttr("data-i18n-html");

  const attrsRe = /data-i18n-attrs="([^"]+)"/g;
  let m;
  while ((m = attrsRe.exec(html))) {
    m[1].split(";").forEach((part) => {
      const idx = part.indexOf(":");
      if (idx === -1) return;
      const k = part.slice(idx + 1).trim();
      if (k) keys.add(k);
    });
  }

  return keys;
}

function localeKeySets(js) {
  const locales = ["ja", "en", "ko", "zh"];
  const sets = {};
  for (const loc of locales) {
    const re = new RegExp(
      `\\b${loc}\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\},\\s*\\n\\s*(?:en|ko|zh|}\\s*;)`,
      "m"
    );
    const alt = new RegExp(`\\b${loc}\\s*:\\s*\\{([\\s\\S]*?)\\n  \\},`, "m");
    const match = js.match(alt);
    const block = match ? match[1] : "";
    const s = new Set();
    const lineRe = /^\s{4}([a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm;
    let lm;
    while ((lm = lineRe.exec(block))) {
      s.add(lm[1]);
    }
    sets[loc] = s;
  }
  return sets;
}

function main() {
  const html = fs.readFileSync(htmlPath, "utf8");
  const js = fs.readFileSync(mainJsPath, "utf8");
  const htmlKeys = collectHtmlKeys(html);

  const missingInJs = [];
  for (const key of htmlKeys) {
    if (!new RegExp(`\\b${escapeRe(key)}\\s*:`).test(js)) {
      missingInJs.push(key);
    }
  }

  if (missingInJs.length) {
    console.error("i18n keys used in index.html but missing from main.js:", missingInJs.sort().join(", "));
    process.exit(1);
  }

  const sets = localeKeySets(js);
  const ja = sets.ja;
  if (ja.size === 0) {
    console.error("Could not parse ja: { ... } keys in main.js (regex may need update).");
    process.exit(1);
  }

  const parityIssues = [];
  for (const loc of ["en", "ko", "zh"]) {
    const other = sets[loc];
    for (const k of ja) {
      if (!other.has(k)) {
        parityIssues.push(`${loc} missing: ${k}`);
      }
    }
  }

  if (parityIssues.length) {
    console.error("Locale key parity issues:\n", parityIssues.slice(0, 40).join("\n"));
    if (parityIssues.length > 40) {
      console.error(`... and ${parityIssues.length - 40} more`);
    }
    process.exit(1);
  }

  console.log(`i18n OK: ${htmlKeys.size} HTML keys, ja/en/ko/zh parity matched (${ja.size} keys each).`);
}

main();
