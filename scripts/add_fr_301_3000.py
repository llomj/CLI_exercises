#!/usr/bin/env python3
"""
Add French placeholder translations for IDs 301-3000.
Replaces Python content with CLI-appropriate French.
Run: python3 scripts/add_fr_301_3000.py
"""
import json
from pathlib import Path

with open("scripts/questions_export.json") as f:
    questions = json.load(f)

# Index by id
by_id = {q["id"]: q for q in questions}

def fr_short(qid):
    q = by_id.get(qid, {})
    text = q.get("question", "")
    level = q.get("level", 1)
    if text.startswith("[L") and "Inter" in text:
        return f"Placeholder pour Level {level} Intermediate."
    if text.startswith("[L") and "Expert" in text:
        return f"Placeholder pour Level {level} Expert."
    # Beginner: use English explanation (fallback until translated)
    return q.get("explanation", "Placeholder - à développer.")

def fr_detailed(qid):
    q = by_id.get(qid, {})
    text = q.get("question", "")
    level = q.get("level", 1)
    if text.startswith("[L") and "Inter" in text:
        return f"Placeholder - à développer en Phase 7 (Level {level} Intermediate)."
    if text.startswith("[L") and "Expert" in text:
        return f"Placeholder - à développer en Phase 7 (Level {level} Expert)."
    return q.get("detailedExplanation", "Placeholder - à développer en Phase 7.")

# Build short entries
short_lines = []
for qid in range(301, 3001):
    text = fr_short(qid)
    escaped = text.replace("\\", "\\\\").replace('"', '\\"')
    short_lines.append(f'  {qid}: "{escaped}",')

# Replace in shortExplanationsTranslations.ts - find line with "  301:" and replace until "  3000:"
short_path = Path("src/data/shortExplanationsTranslations.ts")
lines = short_path.read_text(encoding="utf-8").splitlines()
start_idx = next((i for i, l in enumerate(lines) if l.strip().startswith("301:")), None)
end_idx = next((i for i, l in enumerate(lines) if l.strip().startswith("3000:")), None)
if start_idx is not None and end_idx is not None:
    new_lines = lines[:start_idx] + short_lines + lines[end_idx + 1:]
    short_path.write_text("\n".join(new_lines) + "\n", encoding="utf-8")
    print(f"Updated short: replaced lines {start_idx+1}-{end_idx+1}")
else:
    print(f"Short: start={start_idx} end={end_idx}")

# Build detailed entries - escape newlines and quotes for string literal
detail_lines = []
for qid in range(301, 3001):
    text = fr_detailed(qid)
    escaped = text.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    detail_lines.append(f'  {qid}: "{escaped}",')

detail_path = Path("src/data/detailedExplanationsTranslations.ts")
dlines = detail_path.read_text(encoding="utf-8").splitlines()
dstart = next((i for i, l in enumerate(dlines) if l.strip().startswith("301:")), None)
dend = next((i for i, l in enumerate(dlines) if l.strip().startswith("3000:")), None)
if dstart is not None and dend is not None:
    new_dlines = dlines[:dstart] + detail_lines + dlines[dend + 1:]
    detail_path.write_text("\n".join(new_dlines) + "\n", encoding="utf-8")
    print(f"Updated detailed: replaced lines {dstart+1}-{dend+1}")
else:
    print(f"Detailed: start={dstart} end={dend}")
