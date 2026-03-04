#!/usr/bin/env python3
"""Extract de from level8 (indices 50-99) and level9 (indices 0-49) and output French translations as TS entries."""

import re

# Read level8
with open('src/data/questions/level8.ts', 'r') as f:
    level8_content = f.read()

# Read level9  
with open('src/data/questions/level9.ts', 'r') as f:
    level9_content = f.read()

def extract_de_blocks(content):
    """Extract all de: `...` blocks from content."""
    pattern = r'de: `((?:[^`\\]|\\.)*)`'
    matches = re.findall(pattern, content, re.DOTALL)
    return matches

level8_des = extract_de_blocks(level8_content)
level9_des = extract_de_blocks(level9_content)

print(f"Level8: {len(level8_des)} de blocks")
print(f"Level9: {len(level9_des)} de blocks")

# Get indices 50-99 from level8 and 0-49 from level9
des_751_800 = level8_des[50:100]  # 50 items
des_801_850 = level9_des[0:50]    # 50 items

# Translation mapping (key English phrases -> French)
TRANSLATIONS = {
    "Key concepts": "Concepts clés",
    "How it works": "Comment ça fonctionne",
    "Example": "Exemple",
    "Common uses": "Usages courants",
    "•": "•",
    "Returns:": "Retourne :",
    "Raises": "Lève",
    "returns": "retourne",
    "because": "car",
    "The": "La/Le",  # context dependent
    "If ": "Si ",
    " then ": " alors ",
}

def translate_to_french(english_text):
    """Translate English de block to French, keeping code unchanged."""
    text = english_text
    # Replace section headers
    text = re.sub(r'\bKey concepts:', 'Concepts clés :', text)
    text = re.sub(r'\bHow it works:', 'Comment ça fonctionne :', text)
    text = re.sub(r'\bExample:', 'Exemple :', text)
    text = re.sub(r'\bCommon uses:', 'Usages courants :', text)
    text = re.sub(r'\bExample: ', 'Exemple : ', text)
    text = re.sub(r'\bReturns: ', 'Retourne : ', text)
    text = re.sub(r'\bRaises: ', 'Lève : ', text)
    # Common phrases - be careful with code
    text = re.sub(r' returns ', ' retourne ', text)
    text = re.sub(r' because ', ' car ', text)
    text = re.sub(r' If ', ' Si ', text)
    text = re.sub(r' then ', ' alors ', text)
    text = re.sub(r'The ', 'La ', text, count=1)  # First occurrence often "The"
    return text

# For now just output the structure - full translation would need manual review
for i, de in enumerate(des_751_800):
    id = 751 + i
    print(f"\n--- ID {id} (level8 index {50+i}) ---")
    print(de[:200] + "..." if len(de) > 200 else de)
