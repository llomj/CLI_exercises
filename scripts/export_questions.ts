#!/usr/bin/env npx tsx
/**
 * Export QUESTIONS_BANK to JSON for validation and tooling.
 * Run: npx tsx scripts/export_questions.ts
 */
import { writeFileSync } from 'fs';
import { QUESTIONS_BANK } from '../src/questionsBank';

const output = QUESTIONS_BANK.map((q) => ({
  id: q.id,
  level: q.level,
  question: q.question,
  options: q.options,
  correct_option_index: q.correct_option_index,
  explanation: q.explanation,
  detailedExplanation: q.detailedExplanation,
}));

writeFileSync('scripts/questions_export.json', JSON.stringify(output, null, 2));
console.log(`Exported ${output.length} questions to scripts/questions_export.json`);
