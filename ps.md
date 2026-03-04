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

**If the "Deploy to GitHub Pages" workflow is red (fails):**

1. **Source must be GitHub Actions**  
   Repo **Settings → Pages → Build and deployment → Source** must be **"GitHub Actions"** (not "Deploy from a branch").

2. **Use a single job for build + deploy**  
   The workflow in `.github/workflows/deploy.yml` must do **build, upload artifact, and deploy in one job**. If you split into two jobs (e.g. `build` and `deploy` with `needs: build`), the deploy job often fails with **"No artifacts named 'github-pages' were found"** because the Pages artifact is not visible across jobs in some GitHub backend states. Fix: keep one job that runs in order: checkout → setup Node → `npm ci` → `npm run build` → **configure-pages** → **upload-pages-artifact** (path: `dist`) → **deploy-pages**.

3. **Concurrency**  
   Use `cancel-in-progress: false` so an in-progress deployment is not cancelled when a new run starts; this avoids flaky failures.

4. **Action versions**  
   Use `actions/upload-pages-artifact@v3` with `actions/deploy-pages@v4`; `actions/configure-pages@v4` must run in the same job **before** the upload step.
