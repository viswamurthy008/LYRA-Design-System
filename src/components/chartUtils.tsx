import '../styles/chart-base.css';

/** Categorical series colors — each resolves to a `--color-chart-*` token. */
export const CHART_COLORS = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
  'var(--color-chart-6)',
  'var(--color-chart-7)',
  'var(--color-chart-8)',
];

export const color = (i: number) => CHART_COLORS[i % CHART_COLORS.length];

/** Round an axis maximum up to a clean 1/2/5 × 10ⁿ value. */
export function niceMax(v: number): number {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const norm = v / mag;
  const step = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return step * mag;
}

/** Point on a circle (degrees, 0° = 12 o'clock, clockwise). */
export function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** SVG arc path for a ring/pie slice between two angles (degrees). */
export function arcPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startDeg: number,
  endDeg: number,
) {
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const o1 = polar(cx, cy, rOuter, startDeg);
  const o2 = polar(cx, cy, rOuter, endDeg);
  if (rInner <= 0) {
    return `M${cx},${cy} L${o1.x},${o1.y} A${rOuter},${rOuter} 0 ${large} 1 ${o2.x},${o2.y} Z`;
  }
  const i1 = polar(cx, cy, rInner, endDeg);
  const i2 = polar(cx, cy, rInner, startDeg);
  return `M${o1.x},${o1.y} A${rOuter},${rOuter} 0 ${large} 1 ${o2.x},${o2.y} L${i1.x},${i1.y} A${rInner},${rInner} 0 ${large} 0 ${i2.x},${i2.y} Z`;
}

export function ChartLegend({ items }: { items: string[] }) {
  return (
    <ul className="ds-chart__legend">
      {items.map((label, i) => (
        <li key={i} className="ds-chart__legend-item">
          <span className="ds-chart__legend-swatch" style={{ background: color(i) }} />
          {label}
        </li>
      ))}
    </ul>
  );
}
