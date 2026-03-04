#!/usr/bin/env node
/**
 * Merge fr_short.json and fr_detailed.json into the TypeScript translation files.
 * Run after: python3 scripts/translate_to_french.py
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const shortPath = join(root, 'src/data/shortExplanationsTranslations.ts');
const detailPath = join(root, 'src/data/detailedExplanationsTranslations.ts');
const frShortPath = join(root, 'scripts/fr_short.json');
const frDetailPath = join(root, 'scripts/fr_detailed.json');

function escapeForTs(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function mergeShort(shortFr) {
  let content = readFileSync(shortPath, 'utf-8');
  for (const [id, text] of Object.entries(shortFr)) {
    const escaped = escapeForTs(text);
    // Match string value allowing \" inside (so we replace the whole value)
    const re = new RegExp(`(\\s+${id}:\\s*)"((?:[^"\\\\]|\\\\.)*)"`, 'g');
    content = content.replace(re, `$1"${escaped}"`);
  }
  writeFileSync(shortPath, content);
  console.log(`Updated short: ${Object.keys(shortFr).length} entries`);
}

function mergeDetail(detailFr) {
  let content = readFileSync(detailPath, 'utf-8');
  // Single-pass replace to avoid "Invalid string length" on the 34MB file
  const re = /(\s+)(\d+)(:\s*`)([\s\S]*?)(`,\s*\n)/g;
  content = content.replace(re, (match, p1, id, p3, _old, p5) => {
    const text = detailFr[id];
    if (text == null) return match;
    return p1 + id + ': "' + escapeForTs(text) + '",\n';
  });
  writeFileSync(detailPath, content);
  console.log(`Updated detailed: ${Object.keys(detailFr).length} entries`);
}

try {
  const shortFr = JSON.parse(readFileSync(frShortPath, 'utf-8'));
  const detailFr = JSON.parse(readFileSync(frDetailPath, 'utf-8'));
  mergeShort(shortFr);
  mergeDetail(detailFr);
  console.log('Done.');
} catch (e) {
  console.error(e.message);
  console.error('Run: python3 scripts/translate_to_french.py first');
  process.exit(1);
}
