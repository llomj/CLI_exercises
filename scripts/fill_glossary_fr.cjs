#!/usr/bin/env node
/*
 * Complete GLOSSARY_FR to match EN glossary entry count.
 * Keeps existing FR entries and appends translated entries for missing tail section.
 */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');
const EN_PATH = path.join(ROOT, 'src/constants.ts');
const FR_PATH = path.join(ROOT, 'src/data/glossaryTranslations.ts');

function loadTsModule(tsPath) {
  const source = fs.readFileSync(tsPath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const mod = { exports: {} };
  const localRequire = (specifier) => {
    if (specifier.startsWith('.')) {
      const resolved = path.resolve(path.dirname(tsPath), specifier);
      if (fs.existsSync(resolved)) return require(resolved);
      if (fs.existsSync(`${resolved}.ts`)) return loadTsModule(`${resolved}.ts`);
      if (fs.existsSync(`${resolved}.tsx`)) return loadTsModule(`${resolved}.tsx`);
      if (fs.existsSync(`${resolved}.js`)) return require(`${resolved}.js`);
    }
    return require(specifier);
  };
  new Function('exports', 'module', 'require', compiled)(mod.exports, mod, localRequire);
  return mod.exports;
}

function t(text) {
  let out = text;
  const pairs = [
    ['Key concepts:', 'Concepts clés :'],
    ['How it works:', 'Comment ça fonctionne :'],
    ['Example:', 'Exemple :'],
    ['Examples:', 'Exemples :'],
    ['Common uses:', 'Usages courants :'],
    ['In-depth explanation:', 'Explication approfondie :'],
    ['Simple explanation:', 'Explication simple :'],
    ['Intermediate explanation:', 'Explication intermédiaire :'],
    ['returns', 'renvoie'],
    ['return', 'renvoyer'],
    ['because', 'car'],
    ['is called', "est appelé"],
    ['is used', 'est utilisé'],
    ['is defined', 'est défini'],
    ['is created', 'est créé'],
    ['is a', 'est un'],
    ['is an', 'est un'],
    ['is the', 'est le'],
    ['are', 'sont'],
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
    ['variable', 'variable'],
    ['variables', 'variables'],
    ['dictionary', 'dictionnaire'],
    ['list', 'liste'],
    ['lists', 'listes'],
    ['string', 'chaîne'],
    ['strings', 'chaînes'],
    ['loop', 'boucle'],
    ['loops', 'boucles'],
    ['condition', 'condition'],
    ['conditions', 'conditions'],
    ['statement', 'instruction'],
    ['statements', 'instructions'],
    ['True', 'True'],
    ['False', 'False'],
    ['None', 'None'],
  ];
  for (const [en, fr] of pairs) {
    out = out.replace(new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), fr);
  }
  out = out.replace(/\bThe\b/g, 'Le');
  out = out.replace(/\bThis\b/g, 'Ce');
  return out;
}

const TERM_MAP = {
  None: 'None',
  Comment: 'Commentaire',
  'Type Conversion': 'Conversion de type',
  'Arithmetic Operator': 'Opérateur arithmétique',
  'String Concatenation': 'Concaténation de chaînes',
  'String Slicing': 'Découpage de chaîne',
  'Assignment Operator': "Opérateur d'assignation",
  'F-String': 'f-string',
  'Elif Statement': 'Instruction Elif',
  'Else Clause': 'Clause Else',
  'Ternary Operator': 'Opérateur ternaire',
  Truthiness: 'Véracité',
  'Short-Circuit Evaluation': 'Évaluation en court-circuit',
  'Nested Loop': 'Boucle imbriquée',
  'Loop Variable': 'Variable de boucle',
  'Infinite Loop': 'Boucle infinie',
  'Pass Statement': 'Instruction Pass',
  'List Indexing': 'Indexation de liste',
  'List Method': 'Méthode de liste',
  'List Comprehension': 'Compréhension de liste',
  Tuple: 'Tuple',
  Set: 'Ensemble',
  'Dictionary Key': 'Clé de dictionnaire',
  'Dictionary Value': 'Valeur de dictionnaire',
  'Dictionary Comprehension': 'Compréhension de dictionnaire',
  Parameter: 'Paramètre',
  Argument: 'Argument',
  'Return Statement': 'Instruction Return',
  'Default Parameter': 'Paramètre par défaut',
  Instance: 'Instance',
  'Instance Variable': "Variable d'instance",
  'Class Variable': 'Variable de classe',
  Self: 'Self',
  Constructor: 'Constructeur',
  Inheritance: 'Héritage',
  Polymorphism: 'Polymorphisme',
  Encapsulation: 'Encapsulation',
  Super: 'Super',
  'Method Overriding': 'Redéfinition de méthode',
  'Abstract Method': 'Méthode abstraite',
  'Design Pattern': 'Patron de conception',
  'Exception Handling': 'Gestion des exceptions',
  'Context Manager': 'Gestionnaire de contexte',
};

function toTsString(value) {
  return JSON.stringify(value);
}

function renderItem(item) {
  return `  {\n    term: ${toTsString(item.term)},\n    definition: ${toTsString(item.definition)},\n    levelRange: ${toTsString(item.levelRange)},\n    detailedDescription: ${toTsString(item.detailedDescription)},\n    example: ${toTsString(item.example)}\n  }`;
}

function main() {
  const enGlossary = loadTsModule(EN_PATH).GLOSSARY;
  const frGlossary = loadTsModule(FR_PATH).GLOSSARY_FR;

  const merged = [...frGlossary];
  for (let i = frGlossary.length; i < enGlossary.length; i += 1) {
    const en = enGlossary[i];
    merged.push({
      term: TERM_MAP[en.term] || t(en.term),
      definition: t(en.definition),
      levelRange: en.levelRange,
      detailedDescription: t(en.detailedDescription),
      example: en.example,
    });
  }

  const file = `import { GlossaryItem } from '../constants';\n\n// French translations for glossary entries\n// Note: Python code examples remain the same in all languages\nexport const GLOSSARY_FR: GlossaryItem[] = [\n${merged.map(renderItem).join(',\n')}\n];\n`;
  fs.writeFileSync(FR_PATH, file, 'utf8');

  console.log(`Updated glossary FR entries: ${frGlossary.length} -> ${merged.length}`);
}

main();
