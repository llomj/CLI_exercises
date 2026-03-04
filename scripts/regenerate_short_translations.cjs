#!/usr/bin/env node
/**
 * Regenerate src/data/shortExplanationsTranslations.ts from scripts/fr_short.json
 * without using fragile in-place regex replaces.
 *
 * Logic:
 * - Read existing TS file to keep header and helper function.
 * - Read fr_short.json (ID -> French text).
 * - For each id 1..3000, use fr_short.json[id] when available,
 *   otherwise fall back to the existing TS value.
 * - Emit a clean single object (1..3000) + one helper function.
 */
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const root = process.cwd();
const tsPath = join(root, 'src/data/shortExplanationsTranslations.ts');
const jsonPath = join(root, 'scripts/fr_short.json');

function escapeForTs(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

function main() {
  const ts = readFileSync(tsPath, 'utf8');
  const fr = JSON.parse(readFileSync(jsonPath, 'utf8'));

  // Capture header (up to the line before the first numeric entry)
  const headerMatch = ts.match(/^[\s\S]*?export const SHORT_EXPLANATIONS_FR[\s\S]*?\{\s*\n/);
  if (!headerMatch) {
    console.error('Could not find SHORT_EXPLANATIONS_FR header');
    process.exit(1);
  }
  const header = headerMatch[0];

  // Capture the helper function from the current file
  const funcMatch = ts.match(/\n\};\s*\n\n\/\*\*[\s\S]*$/);
  if (!funcMatch) {
    console.error('Could not find helper function block');
    process.exit(1);
  }
  const helper = funcMatch[0];

  // Parse existing TS map into an object id -> text
  const body = ts.slice(header.length, ts.length - helper.length);
  const existing = {};
  const entryRe = /^(\s+)(\d+):\s*"((?:[^"\\]|\\.)*)",\s*$/gm;
  let m;
  while ((m = entryRe.exec(body)) !== null) {
    const id = m[2];
    const raw = m[3]
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\');
    existing[id] = raw;
  }

  const lines = [];
  for (let id = 1; id <= 3000; id++) {
    const key = String(id);
    const text = fr[key] != null ? fr[key] : existing[key];
    if (text == null) {
      console.error(`Missing text for id ${id}`);
      process.exit(1);
    }
    lines.push(`  ${id}: "${escapeForTs(String(text))}",`);
  }

  const out = header + lines.join('\n') + '\n' + helper.trimStart();
  writeFileSync(tsPath, out);
  console.log('Regenerated shortExplanationsTranslations.ts with 3000 entries.');
}

main();
