# CLI Exercises Learn — Problem Solving & Debugging Guide

## CRITICAL RULE: Bilingual Parity (EN/FR)

**ABSOLUTE REQUIREMENT**: Whatever exists in English MUST have a French equivalent.

- All UI strings: EN + FR
- All short explanations (e field): EN + FR
- All detailed explanations (de field): EN + FR
- Glossary: EN + FR
- Code snippets: Shell/CLI commands stay the same (universal)

When adding new content, add both languages in the same commit. Never ship English-only content.

---

## Flags Reference (syntax highlighting)

**Requirement**: The Flags/Commands reference view must **not** be all green. It must use clear syntax highlighting (e.g. comments grey, flags/options blue, descriptions amber, base text slate/grey) so it is readable and matches AGENTS.md.

**If you see changes locally but not on your phone**: The app on your phone loads the **deployed** version (e.g. from GitHub Pages). Local changes are only on your machine until you **push to GitHub** and the site **re-deploys**. To fix "still all green on phone": (1) Commit the FlagsView changes, (2) Push to GitHub (`git push`), (3) Wait for the deployment (e.g. GitHub Actions or Pages rebuild). Then hard-refresh or re-open the app on your phone so it loads the new bundle.

---

## GitHub Pages deploy (Actions red / failed)

If the "Deploy to GitHub Pages" workflow fails (red in Actions):

1. **Source must be GitHub Actions**: Repo **Settings → Pages → Build and deployment → Source** must be **"GitHub Actions"** (not "Deploy from a branch"). Otherwise the deploy step can fail with exit code 1.
2. The workflow uses two jobs: `build` (checkout, npm ci, build, upload artifact) and `deploy` (needs: build, then deploy-pages). The deploy job must run after build so the artifact is available.
