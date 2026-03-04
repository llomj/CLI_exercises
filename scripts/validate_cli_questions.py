#!/usr/bin/env python3
"""
Validate CLI questions: structure checks only (no code evaluation).
Run after: npx tsx scripts/export_questions.ts
"""

import json
import sys
from pathlib import Path

def load_questions():
    path = Path('scripts/questions_export.json')
    if not path.exists():
        print("Run first: npx tsx scripts/export_questions.ts")
        sys.exit(1)
    with open(path) as f:
        return json.load(f)

def main():
    questions = load_questions()
    print(f"Validating {len(questions)} CLI questions\n")

    errors = []
    for q in questions:
        qid = q['id']
        opts = q.get('options', [])
        cidx = q.get('correct_option_index')
        question = q.get('question', '')
        explanation = q.get('explanation', '')

        if len(opts) != 4:
            errors.append((qid, f"Expected 4 options, got {len(opts)}"))
        if cidx is None or not (0 <= cidx <= 3):
            errors.append((qid, f"Invalid correct_option_index: {cidx}"))
        if not question or not question.strip():
            errors.append((qid, "Empty question"))
        if not explanation or not explanation.strip():
            errors.append((qid, "Empty explanation"))
        if cidx is not None and len(opts) > 0 and cidx >= len(opts):
            errors.append((qid, f"correct_option_index {cidx} out of range for {len(opts)} options"))

    # Check IDs unique and sequential
    ids = [q['id'] for q in questions]
    if len(ids) != len(set(ids)):
        dupes = [i for i in ids if ids.count(i) > 1]
        errors.append((0, f"Duplicate IDs: {list(set(dupes))[:10]}"))
    expected = list(range(1, len(questions) + 1))
    if ids != expected:
        errors.append((0, f"IDs should be 1..{len(questions)} sequential, found gaps or wrong order"))

    # Check levels 1-10
    levels = set(q['level'] for q in questions)
    if levels != set(range(1, 11)):
        errors.append((0, f"Levels should be 1-10, got {sorted(levels)}"))

    # Report
    print("=" * 60)
    print("CLI QUESTION VALIDATION")
    print("=" * 60)
    print(f"Total: {len(questions)}")
    print(f"Errors: {len(errors)}")
    print()

    if errors:
        for qid, msg in errors[:50]:  # Show first 50
            print(f"  ID {qid}: {msg}")
        if len(errors) > 50:
            print(f"  ... and {len(errors) - 50} more")
        sys.exit(1)
    else:
        print("All structure checks passed.")
        sys.exit(0)

if __name__ == '__main__':
    main()
