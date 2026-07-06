# Contributing to LYRA Design System

## Ground rules

1. **Tokens only.** Components use semantic CSS variables (`--color-*`, `--spacing-*`,
   `--radius-*`, `--text-*`, `--motion-*`, `--z-*`) — never raw hex values, Tailwind palette
   classes, or hardcoded z-indices/durations. `styles/tokens.css` is generated from Figma;
   don't edit it by hand (extend via `foundation-tokens.css` / `chart-tokens.css` instead).
2. **Figma and code stay in sync.** Every visual component exists in the Figma file
   *LYRA Design System* and maps to code via a `.figma.tsx` Code Connect file.
3. **Additive changes = minor version.** Breaking prop changes require a major bump and a
   changelog entry explaining the migration.

## Adding a component

Follow the flat-folder pattern — each component ships four files:

```
src/components/MyThing/
  MyThing.tsx          # typed props, semantic tokens only
  MyThing.css          # co-located styles, imported by the component
  MyThing.stories.tsx  # title: '<Group>/MyThing' (see README groups)
  MyThing.figma.tsx    # figma.connect(...) to the Figma node
```

Then:
1. Export component + prop types from `src/index.ts` under the right group banner.
2. Build the matching component in Figma (Components page) and note its node id.
3. Update the component count/table in `README.md` and add a `CHANGELOG.md` entry.

## Quality gates (all must pass)

```bash
npx tsc --noEmit          # type-check
npm run lint              # 0 errors (a11y warnings only for accepted overlay patterns)
npm run format:check      # prettier
npm run build             # vite lib build + d.ts
npx figma connect parse   # Code Connect files parse
```

CI runs the same gates on every push to `main`; Storybook deploys automatically to
GitHub Pages when they pass.

## Accessibility bar

- Visible focus state on everything interactive; keyboard path for every action
  (see the *Guidelines/Accessibility* page in Storybook for the pattern table).
- New jsx-a11y warnings need a justification comment in `eslint.config.js` if relaxed.

## Releasing

```bash
npm version minor         # bumps package.json, commits, tags vX.Y.0
git push origin main --tags
```

Update `CHANGELOG.md` in the same commit as the feature work. Maintainer: @viswamurthy008.
