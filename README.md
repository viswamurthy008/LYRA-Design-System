# lyra-design-system

React + TypeScript component library implementing the Figma **"Design System — MVP"**. Every component is styled with **CSS variables** (design tokens) — no Tailwind, no CSS-in-JS runtime.

## Install & use

```tsx
import { Button, Input, Card, Alert } from 'lyra-design-system';
import 'lyra-design-system/styles.css'; // import once, e.g. in your app root

function Example() {
  return (
    <Card title="Welcome" body="Sign in to continue." ctaLabel="Get started">
      <Input label="Email" value="you@example.com" />
      <Button variant="primary" size="md">Continue</Button>
    </Card>
  );
}
```

> **Import the stylesheet once.** The library ships a single bundled `design-system.css`
> (tokens + all component styles), exposed as `lyra-design-system/styles.css`. Import it
> at your app entry — components don't inline their own CSS in the built output.

## How styling works

- **`src/styles/tokens.css`** defines the design tokens as CSS custom properties — primitives (`--blue-600`) and semantic aliases (`--color-action-primary: var(--blue-600)`).
- Components reference **semantic** variables only (`var(--color-action-primary)`, `var(--spacing-4)`, `var(--radius-md)`), so re-theming is a one-file change.
- Each component ships a co-located `Component.css`. Importing the component imports its styles.

## Components (86)

| Group | Components |
|-------|-----------|
| **Actions** | Button, IconButton, ButtonGroup, Link |
| **Forms** | Input, Textarea, SearchField, Select, Combobox, MultiSelect, Checkbox, Radio, Toggle, SwitchGroup, NumberStepper, SegmentedControl, Slider, RangeSlider, FileUpload, OtpInput, FormField |
| **Pickers** | DatePicker, TimePicker, ColorPicker, DateRangePicker |
| **Data display** | Card, StatCard, FeatureCard, ProfileCard, MediaCard, Avatar, AvatarGroup, Badge, Chip, Rating, List, Carousel, Divider, DataTable, Calendar, Metric, DescriptionList |
| **Charts** | Sparkline, MiniBarChart, LineChart, AreaChart, BarChart, DonutChart, ScatterPlot, BubbleChart, WaterfallChart, Treemap, SankeyChart |
| **Feedback** | Alert, Banner, Toast, Snackbar, Tooltip, Popover, Progress, CircularProgress, Spinner, Skeleton, EmptyState, NotificationCenter |
| **Navigation** | Tabs, Breadcrumb, Pagination, Accordion, Stepper, Timeline, Navbar, Sidebar, TreeView |
| **Overlays** | Modal, Drawer, CommandPalette, ContextMenu, Tour |
| **Layout** | AppShell, Stack, Grid, Container, Splitter |
| **Utility** | Kbd, Code |

All are exported from `src/index.ts`, grouped by category, with full TypeScript prop types.

Guideline docs (tokens, choosing feedback components, accessibility) live in Storybook under
**Guidelines**. See [CHANGELOG.md](CHANGELOG.md) for release history and
[CONTRIBUTING.md](CONTRIBUTING.md) for the component checklist and quality gates.

## Develop

```bash
npm run storybook       # preview components (Storybook 10 + Vite)
npm run build           # build the library → dist/ (ESM + CJS + .d.ts + design-system.css)
npx tsc --noEmit        # type-check
npm run cc:publish      # publish Code Connect mappings to Figma (needs auth)
```

### Build output (`dist/`)

| File | Purpose |
|------|---------|
| `index.js` | ESM bundle (`"module"` / `import`) |
| `index.cjs` | CommonJS bundle (`"main"` / `require`) |
| `index.d.ts` (+ per-component `.d.ts`) | TypeScript declarations |
| `design-system.css` | All tokens + component styles, one file (`lyra-design-system/styles.css`) |

React / ReactDOM are **externalized** (peer deps). `npm publish` runs the build automatically via `prepublishOnly`; only `dist/` is published (`files` field).

## Figma ↔ code

- **Tokens** regenerate from Figma via the figma-console `export_tokens` tool (see `../design-tokens/`).
- **Code Connect** files (`*.figma.tsx`) map components to their Figma nodes so Dev Mode shows real code.

> The original Tailwind exploration in `components/messaging/` was removed in favor of this CSS-variable implementation.
