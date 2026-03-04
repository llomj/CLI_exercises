#!/usr/bin/env node
/**
 * Fix corrupted short explanation lines where the value was duplicated
 * (merge regex stopped at an inner quote). Fix 2050 and any similar.
 */
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const shortPath = path.join(root, 'src/data/shortExplanationsTranslations.ts');
const frPath = path.join(root, 'scripts/fr_short.json');

let content = fs.readFileSync(shortPath, 'utf8');
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

function escapeForTs(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

// Fix any line with duplicate pattern: ..." then "word (corrupted merge)
content = content.split('\n').map((line) => {
  const m = line.match(/^\s+(\d+):\s*"/);
  if (!m) return line;
  const id = m[1];
  const correct = fr[id];
  if (!correct) return line;
  // Corrupted: duplicate text after closing quote (e.g. ..." then "word or ..." then letter)
  if (line.match(/\."[a-zA-Zéèêëàâä]/) || line.match(/\.[^"]*"[A-Za-z]/)) {
    return `  ${id}: "${escapeForTs(correct)}",`;
  }
  return line;
}).join('\n');

fs.writeFileSync(shortPath, content);
console.log('Fixed corrupted short explanation lines');
