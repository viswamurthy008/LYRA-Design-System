# LYRA Design System — Roadmap

Where the system stands and what's next, in priority order.
Status: **v1.10** · 89 code components · 92 Figma components · 11 charts · 5 guideline docs · 3 patterns · CI + auto-deployed [Storybook](https://viswamurthy008.github.io/LYRA-Design-System/).

Checklist maturity (foundations, components, states, patterns, a11y, content, governance) is **complete**.
What remains falls into five tiers.

---

## Tier 1 — Testing & quality automation *(biggest genuine gap — recommended next)*

The system currently has **zero automated tests**; quality is enforced by type-checks, lint, and eyeballs.

- [ ] **Interaction tests** — Storybook `play` functions + `@storybook/test-runner` for the
      keyboard-heavy components: MultiSelect, ContextMenu, OtpInput, Splitter, DataTable sorting,
      FormField ARIA wiring
- [ ] **Visual regression** — Playwright or Chromatic screenshot diffs per story, run in both
      light and dark themes, so a token change that breaks a component fails CI
- [ ] **a11y in CI** — axe-core against every story; regressions fail the build instead of
      relying on accepted lint warnings
- [ ] **Focus trap** in Modal / Drawer / CommandPalette — Esc works, but Tab can escape the
      overlay; the last real keyboard-behavior gap
- [ ] **Bundle-size budget** — CI check on `dist/` so the package doesn't silently bloat

## Tier 2 — Component depth (behavior, not count)

- [ ] **Toast manager** — `<ToastProvider>` + `useToast()` queue API (positioning, stacking,
      auto-dismiss); today every consumer reinvents this
- [ ] **Interactive charts** — hover tooltips, responsive-width container, animated transitions
      (charts are static SVG today)
- [ ] **Virtualized DataTable / Select** — current implementations render every row;
      large datasets will crawl
- [ ] **Form adapter** — a `react-hook-form` integration recipe or thin wrapper around FormField
- [ ] **Combobox async loading** state (spinner-in-dropdown, debounced fetch pattern)

## Tier 3 — Distribution & adoption

- [ ] **npm publish** — blocked only on `npm login`; unlocks `npm i lyra-design-system`
- [ ] **`figma connect publish`** — Code Connect files exist for every mapped component but
      need a Figma access token to appear in Dev Mode for other users
- [ ] **Figma Professional upgrade** — unlocks the two plan-blocked items:
      publishing the file as a **team library**, and a second variable mode for
      **dark theme in Figma** (dark mode already ships in code via `data-theme="dark"`)
- [ ] **Page templates** — copyable full-page compositions: dashboard, settings, list-detail
- [ ] **GitHub Pages versioned docs** — keep older Storybook builds per tag

## Tier 4 — Theming maturity

- [ ] **Multi-brand theming** — the token architecture supports it; prove it with a second
      brand theme file (swap primitives, keep semantics)
- [ ] **System-wide density** — DataTable has `density="compact"`; extend the pattern to
      List, Tree, Menu, and form controls
- [ ] **High-contrast mode** — a third semantic remap for WCAG AAA / forced-colors
- [ ] **RTL support** — migrate physical CSS properties (`left/right`, `margin-left`) to
      logical properties (`inline-start/end`) to unlock Arabic/Hebrew layouts

## Tier 5 — Design-ops automation

- [ ] **Token sync pipeline** — CI job diffing the Figma variable export against
      `tokens.css` to flag design/code drift automatically
- [ ] **Per-component do/don't docs** — expand beyond the feedback-component guidance as
      real usage questions come up
- [ ] **Imagery / illustration style** — currently an explicit "not defined" decision;
      needs brand direction before documenting

---

## Known constraints

| Constraint | Impact | Unblock |
|---|---|---|
| Figma Starter plan | No dark-mode variable mode, no team-library publishing, 3-page cap | Upgrade to Professional |
| No npm auth in CI | Package installs via git URL only | `npm login`, then `npm publish` |
| No Figma access token | Code Connect not published to Dev Mode | Generate token, `figma connect publish` |

## Release process (unchanged)

`CHANGELOG.md` entry → quality gates (`tsc`, lint, build, `figma connect parse`) →
`npm version minor` → push with tags → GitHub Release. See [CONTRIBUTING.md](CONTRIBUTING.md).
