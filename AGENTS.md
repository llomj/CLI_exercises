# CLI Exercises Learn - AI Agent Operational Rules

## 0a. Default First Page (MANDATORY)
- **Rule**: The first/default page must be in **level mode**, not random mode. New users and fresh loads must see level mode (level-based quiz). Never default to random mode. Migration: users with old randomMode:true from prior default are one-time reset to level mode.

## 0. Offline-First (URGENT)
- **Goal**: The app must run **fully offline**. If there is no internet, the app must still run. The purpose of this app is to use it offline.
- **Rule**: No runtime dependency on the network. All assets (HTML, JS, CSS, fonts, icons) must be local or bundled. The service worker must serve the app from cache when offline. Do not add CDN scripts, external fonts, or external images that are required for the app to load or render. Any feature that requires the network must degrade gracefully when offline.

## 1. Genome Checkpoint (STRICT STATE)
- **Target**: 3000 Questions (300 per level × 10 levels).
- **Current Progress**: 3000 / 3000 Questions (CLI content; genome fulfilled)
- **Uniqueness Level**: HIGH VARIANCE MANDATED.
- **Rule**: All 3000 questions must be unique. Every question must be a unique logical challenge. No repetitive patterns. Repetitive patterns are considered a failure of educational integrity.
- **No Placeholder Options**: Multiple-choice options must be meaningful answers to the question. Never use "Option A", "Option B", "Option C", "Option D" or similar placeholders. Each option must be a plausible, content-specific answer. Wrong options should be plausible distractors, not generic labels.

## 1b. Question Difficulty Progression (MANDATORY)
- **Goal**: Difficulty **must increase** with levels. Otherwise the game defeats its purpose.
- **Rule**: Level 0 = **easiest** (absolute beginner: what is a terminal, what is a command, Enter key, etc.). Level 10 = **hardest** (containers, kubectl, Git, advanced topics).
- **Level 0 requirements**: Very simple, no prior terminal knowledge. Examples: "What is a terminal?", "Which key runs the command?", "What is a directory?". No pentest, kubectl, async, nmap, or advanced CLI concepts.
- **Hard questions belong in higher levels**: Questions about kubectl, nmap, SQLi, Metasploit, hashcat, async/await, advanced networking, etc. belong in Level 8–10, **never** in Level 0–2.
- **When adding or rearranging questions**: Ensure each level's content matches its intended difficulty. Audit for misplaced questions and swap them so Level 0 stays easiest and Level 10 stays hardest.

## 2. Consent & Modification Rules
- **Explicit Consent**: No changes shall be made to the source code without explicit user approval.
- **Layout Preservation**: Do not deviate from the existing visual identity.
- **Incremental Updates**: Keep updates as minimal as possible while satisfying requirements.
- **Strict Scope Control**: When the user asks for a specific change, implement only that request. Do not add extra UI elements, display changes, or additional features unless explicitly requested.

## 3. Glossary & Educational Integrity
- **Glossary Source of Truth**: The `glossary.md` file is the master reference.
- **Consistency Rule**: All definitions must be consistent with `glossary.md`.
- **Pre-Change Check**: Agents must always consult `ps.md` and `planning.md` before making changes.
- **Debugging Reference**: Agents must always consult `ps.md` for debugging information and urgent issues.

## 4. The 3,000-Question Genome Goal
- **Completion Task**: Reach exactly 3,000 high-quality CLI/terminal questions (300 per level × 10 levels).
- **Status**: 3000 ACHIEVED. ALL 10 levels COMPLETE at 300/300 each. Genome checkpoint FULFILLED.
- **Diversity Rule**: Use at least 10 logic templates per stage to ensure students encounter varied syntax and conceptual challenges.

## 5. Testing and Deployment Rules
- **Testing Requirement**: Agents must always run tests before telling the user that the app should deploy successfully.
- **Layout Preservation**: Agents must never change the layout of the app when making changes unless explicitly asked by the user.
- **Debugging Reference**: Agents must always consult ps.md for debugging information.
- **Browser Testing**: Agents must always test the app in the browser first to ensure it works and opens correctly before pushing to Git.
- **User Consent for Commits**: Agents must always ask the user for approval before committing to Git.

## 6. Internationalization & French Mode
- **Goal**: Transform this app into a fully bilingual experience (English and French). This is critical.
- **Full French Mode**: When the user selects French, **all** visible UI text and explanations must appear in French (navigation, buttons, panels, short explanations, detailed explanations, and advanced panels like Code Versatility).
- **Structural Parity**: French detailed explanations (explication du codon / description approfondie) must be structurally identical to the English versions: same sections (Key concepts, How it works, Examples, Common uses, Edge cases, etc.), same level of detail, CLI commands unchanged.
- **Fallback Rule**: Only fall back to English when a French translation truly does not exist yet; once added, the French version must fully mirror the English content in depth and structure.

## 7. Monetisation Goal
- **Goal**: Monetise this app later. Quality must be top-notch.

## 8. Verify Code Instruction
- When the user types "verify code", the agent's role is to verify and debug any problems, issues, conflicts, or potential bugs in the codebase.

## 9. Level Mode vs Random Mode (SEPARATE SYSTEMS)
- **Separation**: Level mode and Random mode are **fully separate**. When the user is in level mode they have level progress, level stars, and level points; when they switch to random mode they have **separate** random-mode stats. Example: if in level mode the user has 130 (e.g. progress or points), switching to random does **not** use that—random mode has its own point and star system.
- **Level mode**: Uses `xp` (level XP), `levelProgress`, `correctPerLevel`, `acquiredStars` per level. Stars depend on how many questions the user has answered correctly out of the full 300 questions in that level, using these percentage bands: >10% and <20% → 1★, ≥20% and <40% → 2★, ≥40% and <60% → 3★, ≥60% and <80% → 4★, ≥90% and ≤100% → 5★. When user switches to random mode, level XP is **not** shown—random has its own.
- **Random mode**: Uses `randomModeXp` and `randomModeStats` only (`totalAnswered`, `totalCorrect`). XP starts at 0 until user completes a random quiz. **Stars**: same percentage bands as level mode, but computed against all 3300 questions in the app (correct out of 3300), so progression is much harder. Do not use level `xp`, `acquiredStars`, or `levelProgress` for random mode.
- **Implementation**: Level mode adds XP to `xp`; random mode adds XP to `randomModeXp`. Nav displays the XP for the current mode. See `ps.md`.

## 10. Scope and Restraint
- **Do not do things the user never asked for.** Implement only what is explicitly requested. Do not add extra features, change unrelated code, or "improve" things without being asked.
- **Flags/Commands reference:** Keep syntax highlighting aesthetic (bash colors). Avoid half-sections in green—override comment color to neutral so `#` headers and descriptions blend with the rest.
- **Quiz questions:** Always plain white text—no syntax highlighting (no colored keywords like "for", "is" in question text). Explanations may use highlighting for code blocks.
