#!/bin/bash
# Run after batch 1801-2400 has finished and you've run: node scripts/merge_fr_translations.js
# Translates 2401-3000 and merges into the app.
set -e
cd "$(dirname "$0")/.."
source .venv/bin/activate
echo "Translating IDs 2401-3000..."
python3 scripts/translate_to_french.py --start 2401 --end 3000
echo "Merging into TypeScript..."
node scripts/merge_fr_translations.js
echo "Done. French coverage: 98-3000."
