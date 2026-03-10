/**
 * Parses glossary detailedDescription into Beginner, Intermediate, Expert sections.
 * Supports EN: "1. Simple explanation: ... 2. Intermediate explanation: ... 3. In-depth explanation: ..."
 * and FR: "1. Explication simple : ... 2. Explication intermédiaire : ... 3. Explication approfondie : ..."
 * If the pattern is not found, returns the full text for all three levels.
 */
export interface TieredExplanation {
  beginner: string;
  intermediate: string;
  expert: string;
}

const EN_SIMPLE = /1\.\s+Simple explanation\s*:\s*/i;
const EN_INTERMEDIATE = /2\.\s+Intermediate explanation\s*:\s*/i;
const EN_IN_DEPTH = /3\.\s+In-depth explanation\s*:\s*/i;
const FR_SIMPLE = /1\.\s+Explication simple\s*:\s*/i;
const FR_INTERMEDIATE = /2\.\s+Explication intermédiaire\s*:\s*/i;
const FR_IN_DEPTH = /3\.\s+Explication approfondie\s*:\s*/i;

function extractSection(
  text: string,
  startMarker: RegExp,
  endMarker: RegExp | null
): string {
  const startMatch = text.match(startMarker);
  if (!startMatch || startMatch.index == null) return '';
  const start = startMatch.index + startMatch[0].length;
  const afterStart = text.slice(start);
  if (!endMarker) return afterStart.trim();
  const endMatch = afterStart.match(endMarker);
  const end = endMatch?.index ?? afterStart.length;
  return afterStart.slice(0, end).trim();
}

export function getTieredExplanation(
  detailedDescription: string,
  _language: 'en' | 'fr'
): TieredExplanation {
  if (!detailedDescription?.trim()) {
    return { beginner: '', intermediate: '', expert: '' };
  }
  const isFrench =
    FR_SIMPLE.test(detailedDescription) || FR_INTERMEDIATE.test(detailedDescription);
  const simple = isFrench ? FR_SIMPLE : EN_SIMPLE;
  const intermediate = isFrench ? FR_INTERMEDIATE : EN_INTERMEDIATE;
  const inDepth = isFrench ? FR_IN_DEPTH : EN_IN_DEPTH;

  const hasTiered =
    simple.test(detailedDescription) &&
    intermediate.test(detailedDescription) &&
    inDepth.test(detailedDescription);

  if (!hasTiered) {
    const full = detailedDescription.trim();
    return { beginner: full, intermediate: full, expert: full };
  }

  const beginner = extractSection(detailedDescription, simple, intermediate);
  const intermediateText = extractSection(detailedDescription, intermediate, inDepth);
  const expert = extractSection(detailedDescription, inDepth, null);

  return {
    beginner: beginner || detailedDescription.trim(),
    intermediate: intermediateText || detailedDescription.trim(),
    expert: expert || detailedDescription.trim(),
  };
}
