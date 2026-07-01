# design-sync NOTES

## Repo gotchas & fixes applied

- **[GENERAL] `tsup.dts.config.ts` shipped `format: []`**, which silently made `dts.only: true` emit ZERO `.d.ts` files (tsup 8.5.1 reports "Build success" either way). This meant `npm run build` had been shipping the published package with no type declarations at all, despite `package.json` declaring `"types": "./dist/index.d.ts"`. Fixed by setting `format: ["esm", "cjs"]` in `tsup.dts.config.ts` — real bug in the repo's own build, unrelated to design-sync, fixed with the user's explicit approval. Verify this fix survives future edits to that file; if `dist/*.d.ts` ever comes up empty again, check `format` first.
- **Self-referencing package in its own repo**: `node_modules/@rabelo-digital/ds-rd` doesn't exist (this repo IS that package), so `--entry ./dist/index.mjs` is required on every build/resync invocation. Also symlinked `node_modules/@rabelo-digital/ds-rd → <repo root>` so `cfg.tokensPkg` could resolve (see below). This symlink is NOT committed (node_modules is gitignored) — recreate it on a fresh clone:
  ```sh
  mkdir -p node_modules/@rabelo-digital && ln -sfn "$(pwd)" node_modules/@rabelo-digital/ds-rd
  ```
- **Tokens live in a root-level `tokens.css`**, not inside `dist/`, and aren't bundled into `dist/styles.css` — consumers are expected to import both. Without `cfg.tokensPkg`/`cfg.tokensGlob` this produced `[TOKENS_MISSING]` (74 vars referenced, 0 defined). Fixed via `cfg.tokensPkg: "@rabelo-digital/ds-rd"` + `cfg.tokensGlob: "tokens.css"`, relying on the self-referencing symlink above.
- **`Toast` story title doesn't match an export** — the story file exports `ToastProvider` + `useToast`, titled `Molecules/Toast`. Fixed via `cfg.titleMap: {"Toast": "ToastProvider"}`.
- **"Dark Mode" stories are Storybook page-background demos, not real theming.** Every component with a "Dark Mode" story sets it purely via `parameters.backgrounds: { default: "dark" }` — there is no actual dark theme system in this DS (no `.dark` class, no `data-theme`, no CSS media query in `tokens.css`). The component itself renders identically; only the Storybook canvas background differs. Graded `match` per the rubric's "ignore framing differences" rule — do not chase this as a real fidelity gap on future syncs.
- **No provider/wrapper needed** — `.storybook/preview.ts` has no decorators, and no component needs a context provider except `ToastProvider` (a real, narrow context for `useToast`, not a global theme wrapper).

## Known gaps (non-blocking, intentionally accepted)

- **`[FONT_MISSING]`**: `--ds-font-family-base` ("Inter") and `--ds-font-family-mono` ("JetBrains Mono"/"Fira Code") are referenced in `tokens.css` but the source repo ships no font files and no CDN/Google Fonts link anywhere (checked `.storybook/`, `src/`, repo root — confirmed absent). This is a genuine gap in the design system itself, not something design-sync can fix without guessing at a CDN URL. Designs render with system-font substitutes. Documented in `conventions.md`.
- **Story cap not raised for Badge (9 stories, 6 graded) and Input (7 stories, 6 graded).** Untested tail stories are size/variant permutations following the exact same pattern as the graded set (color variants for Badge, Dark Mode for Input) — accepted as low-risk without spending an extra capture cycle. Raise with `--max-stories` on a future sync if these components see real usage complaints.

## Re-sync risks

- If `tsup.dts.config.ts` regresses to `format: []` (or an equivalent that silences dts emission), the converter will again find 0 exported PascalCase symbols and drop every component. Check `[DTS] parsed N .d.ts files` in the build log — N should be 2 (index + tokens/index).
- The `node_modules/@rabelo-digital/ds-rd` self-symlink must exist before running the converter/resync — it's gitignored, so any fresh clone or CI environment needs to recreate it first.
- If the repo ever adds real dark-mode theming (a `.dark` class, `data-theme` attribute, or `prefers-color-scheme` media query in `tokens.css`), the "ignore Dark Mode story diffs" assumption above becomes wrong — re-verify those stories with real image judgment rather than carrying forward the "page chrome only" grades.
- If Inter/JetBrains Mono font files or a CDN link are ever added to the repo, re-check `[FONT_MISSING]` and update `conventions.md`'s "Known gap" note.
