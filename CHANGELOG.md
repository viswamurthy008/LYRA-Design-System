# Changelog

All notable changes to `lyra-design-system`. Follows [semver](https://semver.org):
minor = additive components/tokens, patch = fixes, major = breaking API changes.

## [1.9.0] — 2026-07-06

### Added
- `Toolbar` (filter/action bar) and `Footer` (page footer) — components + Figma + Code Connect.
- `Button`: `loading` (inline spinner + aria-busy), `iconLeft`/`iconRight` props.
- `Checkbox`: `indeterminate` (mixed) state. `Progress`: `indeterminate` animation.
- `error` state on `Combobox`, `MultiSelect`, `OtpInput` (danger border + `aria-invalid`).
- `ChartLegend` and `CHART_COLORS` exported for composing custom charts.
- Focus-ring tokens (`--focus-ring-color/width/offset/halo`).
- Accessibility doc: measured WCAG contrast table for all token pairs, focus-ring spec,
  touch-target guidance, and an explicit desktop-first platform decision.
- Figma: 27 Hover/Pressed/Focus variants on the Button set; Cover now shows version/owner/
  status; the legacy File Upload frame renamed to "Dropzone States" to resolve the duplicate.

## [1.8.0] — 2026-07-06

### Added
- `Icon` component — the full 28-icon Figma set in code (24×24 grid, 2px round stroke,
  `currentColor`), with per-icon Code Connect mappings and an icon-gallery story.
- `DataTable`: accessible column sorting — `sortable` columns render real header buttons,
  cycle asc → desc → none, and set `aria-sort`.
- **Brand & Iconography** guideline page (wordmark rules, brand color usage,
  icon construction specs, usage/a11y rules).

## [1.7.0] — 2026-07-06

### Added
- **Patterns** section in Storybook: *Form Layout* (settings form with inline validation),
  *Search & States* (loading / results / empty), *Onboarding* (first-run Tour).
- **Content & Microcopy** guideline page (voice, capitalization, buttons, errors,
  empty states, terminology).
- `MultiSelect`: full keyboard support — ArrowUp/Down highlight, Enter selects, Esc closes,
  Backspace removes the last chip; ARIA combobox semantics (`aria-expanded`,
  `aria-activedescendant`).
- `ContextMenu`: items are real `menuitem` buttons; focus moves into the menu on open,
  ArrowUp/Down/Home/End navigate, Enter selects, Esc closes.

### Changed
- 4 accepted jsx-a11y warnings resolved by the keyboard work (26 → 22).

## [1.6.0] — 2026-07-06

### Added
- **Foundation tokens** (`styles/foundation-tokens.css`): typography scale mirroring the
  Figma text styles (`--text-*`, `--font-family-*`, `--font-weight-*`), motion durations +
  easings (`--motion-*`, with `prefers-reduced-motion` support), breakpoints
  (`--breakpoint-*`), and a z-index scale (`--z-*`).
- **Guideline docs** in Storybook: *Design Tokens*, *Choosing Feedback*, *Accessibility*.
- `CHANGELOG.md` and `CONTRIBUTING.md`.

### Changed
- Overlay/interaction components now consume the z-index and motion tokens
  (Modal, Drawer, Tour, Tooltip, Popover, Combobox, MultiSelect, Toggle, Progress,
  Carousel, Spinner, Skeleton, etc.) instead of hardcoded values.

## [1.5.0] — 2026-07-02

### Added
- `FormField` (Forms) — label + hint/error wrapper injecting `id`/`aria-describedby`/`aria-invalid`.
- `Tour` (Overlays) — onboarding coachmarks with spotlight and step navigation.
- `NotificationCenter` (Feedback) — notification list with unread markers and count.
- Storybook story titles realigned to the documented groups.

## [1.4.0] — 2026-06-30

### Added
- Chart library (9): `LineChart`, `AreaChart`, `BarChart` (grouped/stacked), `DonutChart`
  (pie variant), `ScatterPlot`, `BubbleChart`, `WaterfallChart`, `Treemap`, `SankeyChart`.
- Categorical chart palette `--color-chart-1…8` + `--color-chart-positive/negative`
  (light + dark) in `styles/chart-tokens.css`; shared chart base styles and `chartUtils`.

## [1.3.0] — 2026-06-29

### Added
- Layout primitives: `Stack`, `Grid`, `Container`, `Splitter` (draggable + keyboard resize).
- Forms: `FileUpload` (dropzone), `OtpInput` (segmented code), `RangeSlider` (dual-thumb).

## [1.2.0] — 2026-06-29

### Added
- Data & utility batch: `Sparkline`, `MiniBarChart`, `Metric`, `DescriptionList`, `Kbd`, `Code`.

## [1.1.0] — 2026-06-23

### Added
- `MultiSelect`, `DateRangePicker`, `AvatarGroup`, `CircularProgress`, `ContextMenu`, `AppShell`.

### Notes
- First tagged release. The initial 55-component library (v0.1.0 baseline) predates tagging;
  there is no `v1.0.0` tag — history starts at `v1.1.0`.
