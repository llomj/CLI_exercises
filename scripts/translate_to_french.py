#!/usr/bin/env python3
"""
Translate English explanations to French for CLI questions.
Run: source .venv/bin/activate && python3 scripts/translate_to_french.py

Translates IDs 98-100 and 301-3000. Outputs fr_short.json and fr_detailed.json.
Then run: node scripts/merge_fr_translations.js to update the TS files.

Batch mode: python3 scripts/translate_to_french.py --start 301 --end 600
  Merges with existing fr_short.json/fr_detailed.json if present.
"""
import argparse
import json
import sys
import time
from pathlib import Path

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Run: source .venv/bin/activate && pip install deep-translator")
    sys.exit(1)

BATCH_SIZE = 30  # Google rate limit
DELAY = 0.5  # seconds between batches

def translate_batch(texts: list[str]) -> list[str]:
    if not texts:
        return []
    translator = GoogleTranslator(source='en', target='fr')
    try:
        return translator.translate_batch(texts)
    except Exception as e:
        print(f"  Error: {e}", flush=True)
        return texts  # fallback to English

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", type=int, default=301, help="First ID (inclusive)")
    ap.add_argument("--end", type=int, default=3000, help="Last ID (inclusive)")
    args = ap.parse_args()

    export_path = Path("scripts/questions_export.json")
    if not export_path.exists():
        print("Run first: npm run export-questions")
        sys.exit(1)

    with open(export_path, encoding="utf-8") as f:
        questions = json.load(f)

    by_id = {q["id"]: q for q in questions}

    # IDs: 98-100 always, plus range
    ids = [98, 99, 100] + list(range(args.start, args.end + 1))

    short_en = []
    detail_en = []
    id_list = []

    for qid in ids:
        q = by_id.get(qid)
        if not q:
            continue
        e = q.get("explanation", "").strip()
        d = (q.get("detailedExplanation") or e).strip()
        if e:
            short_en.append(e)
            detail_en.append(d[:4500] if len(d) > 4500 else d)  # truncate long
            id_list.append(qid)

    print(f"Translating {len(id_list)} short explanations...", flush=True)
    short_fr = {}
    for i in range(0, len(id_list), BATCH_SIZE):
        batch_ids = id_list[i:i + BATCH_SIZE]
        batch_texts = [short_en[id_list.index(j)] for j in batch_ids]
        translated = translate_batch(batch_texts)
        for j, tid in enumerate(batch_ids):
            short_fr[tid] = translated[j] if j < len(translated) else batch_texts[j]
        print(f"  {i + len(batch_ids)}/{len(id_list)}", flush=True)
        time.sleep(DELAY)

    print(f"Translating {len(id_list)} detailed explanations...", flush=True)
    detail_fr = {}
    for i in range(0, len(id_list), BATCH_SIZE):
        batch_ids = id_list[i:i + BATCH_SIZE]
        batch_texts = [detail_en[id_list.index(j)] for j in batch_ids]
        translated = translate_batch(batch_texts)
        for j, tid in enumerate(batch_ids):
            detail_fr[tid] = translated[j] if j < len(translated) else batch_texts[j]
        print(f"  {i + len(batch_ids)}/{len(id_list)}", flush=True)
        time.sleep(DELAY)

    out_dir = Path("scripts")
    short_path = out_dir / "fr_short.json"
    detail_path = out_dir / "fr_detailed.json"

    # Merge with existing if present (batch mode)
    if short_path.exists():
        with open(short_path, encoding="utf-8") as f:
            existing = json.load(f)
        existing.update(short_fr)
        short_fr = existing
    if detail_path.exists():
        with open(detail_path, encoding="utf-8") as f:
            existing = json.load(f)
        existing.update(detail_fr)
        detail_fr = existing

    with open(short_path, "w", encoding="utf-8") as f:
        json.dump(short_fr, f, ensure_ascii=False, indent=2)
    with open(detail_path, "w", encoding="utf-8") as f:
        json.dump(detail_fr, f, ensure_ascii=False, indent=2)

    print(f"Wrote fr_short.json ({len(short_fr)} entries) and fr_detailed.json ({len(detail_fr)} entries)", flush=True)
    print("Run: node scripts/merge_fr_translations.js")

if __name__ == "__main__":
    main()
