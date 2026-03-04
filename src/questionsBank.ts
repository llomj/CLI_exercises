import { Question, PersonaStage, SubLevel } from './types';
import { level0Patterns, level0IntermediateA, level0IntermediateB, level0ExpertA, level0ExpertB } from './data/questions/level0_cli';
import { level1Patterns, level1IntermediateA, level1IntermediateB, level1ExpertA, level1ExpertB } from './data/questions/level1_cli';
import { level2Patterns, level2IntermediateA, level2IntermediateB, level2ExpertA, level2ExpertB } from './data/questions/level2_cli';
import { level3Patterns, level3IntermediateA, level3IntermediateB, level3ExpertA, level3ExpertB } from './data/questions/level3_cli';
import { level4Patterns, level4IntermediateA, level4IntermediateB, level4ExpertA, level4ExpertB } from './data/questions/level4_cli';
import { level5Patterns, level5IntermediateA, level5IntermediateB, level5ExpertA, level5ExpertB } from './data/questions/level5_cli';
import { level6Patterns, level6IntermediateA, level6IntermediateB, level6ExpertA, level6ExpertB } from './data/questions/level6_cli';
import { level7Patterns, level7IntermediateA, level7IntermediateB, level7ExpertA, level7ExpertB } from './data/questions/level7_cli';
import { level8Patterns, level8IntermediateA, level8IntermediateB, level8ExpertA, level8ExpertB } from './data/questions/level8_cli';
import { level9Patterns, level9IntermediateA, level9IntermediateB, level9ExpertA, level9ExpertB } from './data/questions/level9_cli';
import { level10Patterns, level10IntermediateA, level10IntermediateB, level10ExpertA, level10ExpertB } from './data/questions/level10_cli';
import { QUESTIONS_PER_SUBLEVEL } from './constants';

// GENERATOR ENGINE
// Assigns BEGINNER for the first third, INTERMEDIATE for the second third, EXPERT for the last third.
// Each level has 300 questions (100 Beginner + 100 Intermediate + 100 Expert).
// Total: 3300 questions across 11 levels (0–10). Level 0 = absolute beginner. IDs 1-3300.

const getSubLevel = (index: number, totalPatterns: number): SubLevel => {
  if (index < totalPatterns / 3) return SubLevel.BEGINNER;
  if (index < (totalPatterns * 2) / 3) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
};

const generateLevel = (level: number, stage: PersonaStage, patterns: ((i: number) => any)[], startId: number) => {
  return Array.from({ length: patterns.length }, (_, i) => {
    const pattern = patterns[i](i);
    return {
      id: startId + i,
      level,
      subLevel: getSubLevel(i, patterns.length),
      persona_stage: stage,
      concept: "logic",
      difficulty: level === 0 ? 1 : (level > 7 ? 3 : (level > 4 ? 2 : 1)),
      questionFormat: 'standard', // default format for existing questions
      question: pattern.q,
      options: pattern.o,
      correct_option_index: pattern.c,
      explanation: pattern.e,
      detailedExplanation: pattern.de || undefined
    } as Question;
  });
};

const level0 = [...level0Patterns, ...level0IntermediateA, ...level0IntermediateB, ...level0ExpertA, ...level0ExpertB];
const level1 = [...level1Patterns, ...level1IntermediateA, ...level1IntermediateB, ...level1ExpertA, ...level1ExpertB];
const level2 = [...level2Patterns, ...level2IntermediateA, ...level2IntermediateB, ...level2ExpertA, ...level2ExpertB];
const level3 = [...level3Patterns, ...level3IntermediateA, ...level3IntermediateB, ...level3ExpertA, ...level3ExpertB];
const level4 = [...level4Patterns, ...level4IntermediateA, ...level4IntermediateB, ...level4ExpertA, ...level4ExpertB];
const level5 = [...level5Patterns, ...level5IntermediateA, ...level5IntermediateB, ...level5ExpertA, ...level5ExpertB];
const level6 = [...level6Patterns, ...level6IntermediateA, ...level6IntermediateB, ...level6ExpertA, ...level6ExpertB];
const level7 = [...level7Patterns, ...level7IntermediateA, ...level7IntermediateB, ...level7ExpertA, ...level7ExpertB];
const level8 = [...level8Patterns, ...level8IntermediateA, ...level8IntermediateB, ...level8ExpertA, ...level8ExpertB];
const level9 = [...level9Patterns, ...level9IntermediateA, ...level9IntermediateB, ...level9ExpertA, ...level9ExpertB];
const level10 = [...level10Patterns, ...level10IntermediateA, ...level10IntermediateB, ...level10ExpertA, ...level10ExpertB];

const levels = [
  { patterns: level0, stage: PersonaStage.TADPOLE },
  { patterns: level1, stage: PersonaStage.PLANKTON },
  { patterns: level2, stage: PersonaStage.SHRIMP },
  { patterns: level3, stage: PersonaStage.CRAB },
  { patterns: level4, stage: PersonaStage.SMALL_FISH },
  { patterns: level5, stage: PersonaStage.OCTOPUS },
  { patterns: level6, stage: PersonaStage.SEAL },
  { patterns: level7, stage: PersonaStage.DOLPHIN },
  { patterns: level8, stage: PersonaStage.SHARK },
  { patterns: level9, stage: PersonaStage.WHALE },
  { patterns: level10, stage: PersonaStage.GOD_WHALE },
];

let nextId = 1;
export const QUESTIONS_BANK: Question[] = levels.flatMap(({ patterns, stage }, i) => {
  const level = i; // 0, 1, 2, … 10 (Level 0 = Tadpole, Level 1 = Plankton, …)
  const result = generateLevel(level, stage, patterns, nextId);
  nextId += patterns.length;
  return result;
});
