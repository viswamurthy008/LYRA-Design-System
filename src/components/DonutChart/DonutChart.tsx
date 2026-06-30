import { color, arcPath, ChartLegend } from '../chartUtils';

export interface DonutSlice {
  label: string;
  value: number;
}

export interface DonutChartProps {
  data: DonutSlice[];
  size?: number;
  /** Render a full pie (no hole) instead of a donut. */
  pie?: boolean;
  /** Center label shown in donut mode (defaults to the total). */
  centerLabel?: string;
  showLegend?: boolean;
  className?: string;
}

/** Donut (or pie) chart with legend and center total. Mirrors the Figma "Donut Chart". */
export function DonutChart({
  data,
  size = 200,
  pie = false,
  centerLabel,
  showLegend = true,
  className = '',
}: DonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size / 2 - 2;
  const rInner = pie ? 0 : rOuter * 0.6;
  let angle = 0;
  const slices = data.map((d, i) => {
    const start = angle;
    const sweep = (d.value / total) * 360;
    angle += sweep;
    return { d: arcPath(cx, cy, rOuter, rInner, start, start + sweep), i };
  });

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        role="img"
        aria-label="Donut chart"
      >
        {slices.map((s) => (
          <path key={s.i} d={s.d} style={{ fill: color(s.i) }} />
        ))}
        {!pie && (
          <text x={cx} y={cy + 5} className="ds-chart__label" textAnchor="middle" fontSize={18}>
            {centerLabel ?? total.toLocaleString()}
          </text>
        )}
      </svg>
      {showLegend && (
        <ChartLegend
          items={data.map((d) => `${d.label} · ${Math.round((d.value / total) * 100)}%`)}
        />
      )}
    </div>
  );
}
