#!/usr/bin/env node
/*
 * Normalize mixed-language French detailed explanations.
 * - Replaces English-leading FR entries with available generated FR artifacts when present
 * - Applies deterministic EN->FR normalization to remaining English-leading entries
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FR_DETAILED_PATH = path.join(ROOT, 'src/data/detailedExplanationsTranslations.ts');
const EXPANDED_OUTPUT_PATH = path.join(ROOT, 'scripts/expanded_fr_output.json');
const EXPANDED_PHRASES_PATH = path.join(ROOT, 'scripts/expanded_fr_phrases.json');

function escapeTemplateLiteral(text) {
  return text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function normalizeMixedFrench(text) {
  let out = text;

  const replacements = [
    ['Key concepts:', 'Concepts clés :'],
    ['How it works:', 'Comment ça fonctionne :'],
    ['Example:', 'Exemple :'],
    ['Examples:', 'Exemples :'],
    ['Common uses:', 'Usages courants :'],
    ['Common patterns:', 'Patterns courants :'],
    ['Signatures:', 'Signatures :'],
    ['returns', 'retourne'],
    ['return', 'renvoyer'],
    ['because', 'car'],
    ['called', 'appelé'],
    ['with', 'avec'],
    ['without', 'sans'],
    ['inside', 'dans'],
    ['outside', 'à l’extérieur de'],
    ['between', 'entre'],
    ['before', 'avant'],
    ['after', 'après'],
    ['function', 'fonction'],
    ['functions', 'fonctions'],
    ['class', 'classe'],
    ['classes', 'classes'],
    ['object', 'objet'],
    ['objects', 'objets'],
    ['method', 'méthode'],
    ['methods', 'méthodes'],
    ['statement', 'instruction'],
    ['statements', 'instructions'],
    ['value', 'valeur'],
    ['values', 'valeurs'],
    ['list', 'liste'],
    ['lists', 'listes'],
    ['dictionary', 'dictionnaire'],
    ['dictionaries', 'dictionnaires'],
  ];

  for (const [en, fr] of replacements) {
    out = out.replace(new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), fr);
  }

  out = out.replace(/^\s*The\b/gm, 'Le');
  out = out.replace(/^\s*When\b/gm, 'Quand');
  out = out.replace(/^\s*If\b/gm, 'Si');
  out = out.replace(/^\s*In\b/gm, 'Dans');
  out = out.replace(/^\s*This\b/gm, 'Ce');

  return out;
}

function buildGeneratedMap() {
  const map = new Map();
  for (const p of [EXPANDED_OUTPUT_PATH, EXPANDED_PHRASES_PATH]) {
    if (!fs.existsSync(p)) continue;
    const arr = JSON.parse(fs.readFileSync(p, 'utf8'));
    for (const row of arr) {
      if (row && Number.isInteger(row.id) && typeof row.fr === 'string' && row.fr.trim()) {
        if (!map.has(row.id)) map.set(row.id, row.fr.trim());
      }
    }
  }
  return map;
}

function main() {
  const generated = buildGeneratedMap();
  const source = fs.readFileSync(FR_DETAILED_PATH, 'utf8');

  // Matches: "  123: `...`" entry blocks
  const entryRe = /(^\s*(\d+):\s*`)([\s\S]*?)(`)(?=,\n\s*\d+:|,\n\};)/gm;

  let changed = 0;
  let replacedWithGenerated = 0;
  let normalized = 0;

  const updated = source.replace(entryRe, (full, prefix, idStr, body, closing) => {
    const id = Number(idStr);
    const trimmedStart = body.replace(/^\s+/, '');
    const isEnglishLeading = /^(The|When|If|In)\b/.test(trimmedStart);
    if (!isEnglishLeading) return full;

    let nextBody = '';
    if (generated.has(id)) {
      nextBody = normalizeMixedFrench(generated.get(id));
      replacedWithGenerated += 1;
    } else {
      nextBody = normalizeMixedFrench(body);
      normalized += 1;
    }

    changed += 1;
    return `${prefix}${escapeTemplateLiteral(nextBody)}${closing}`;
  });

  fs.writeFileSync(FR_DETAILED_PATH, updated, 'utf8');
  console.log(`Updated detailed FR entries: ${changed}`);
  console.log(`  from generated artifacts: ${replacedWithGenerated}`);
  console.log(`  normalized in place: ${normalized}`);
}

main();
