import { niceMax } from '../chartUtils';

export interface WaterfallStep {
  label: string;
  /** Signed change for this step. */
  value: number;
}

export interface WaterfallChartProps {
  steps: WaterfallStep[];
  width?: number;
  height?: number;
  /** Append a cumulative "Total" bar at the end. */
  showTotal?: boolean;
  totalLabel?: string;
  showGrid?: boolean;
  className?: string;
}

/** Waterfall chart showing how sequential deltas build to a total. Mirrors the Figma "Waterfall Chart". */
export function WaterfallChart({
  steps,
  width = 520,
  height = 280,
  showTotal = true,
  totalLabel = 'Total',
  showGrid = true,
  className = '',
}: WaterfallChartProps) {
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 32;
  const iw = width - padL - padR;
  const ih = height - padT - padB;

  let running = 0;
  const bars = steps.map((s) => {
    const from = running;
    running += s.value;
    return { label: s.label, from, to: running, value: s.value, total: false };
  });
  if (showTotal)
    bars.push({ label: totalLabel, from: 0, to: running, value: running, total: true });

  const max = niceMax(Math.max(running, ...bars.map((b) => Math.max(b.from, b.to)), 0));
  const ticks = 4;
  const Y = (v: number) => padT + ih - (v / max) * ih;
  const slot = iw / bars.length;
  const barW = slot * 0.6;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Waterfall chart"
      >
        {showGrid &&
          Array.from({ length: ticks + 1 }).map((_, t) => {
            const gy = padT + (t / ticks) * ih;
            return (
              <g key={t}>
                <line x1={padL} y1={gy} x2={width - padR} y2={gy} className="ds-chart__grid" />
                <text x={padL - 8} y={gy + 4} className="ds-chart__axis" textAnchor="end">
                  {Math.round(max * (1 - t / ticks))}
                </text>
              </g>
            );
          })}
        {bars.map((b, i) => {
          const x = padL + i * slot + (slot - barW) / 2;
          const top = Y(Math.max(b.from, b.to));
          const bh = Math.abs(Y(b.from) - Y(b.to));
          const fill = b.total
            ? 'var(--color-chart-1)'
            : b.value >= 0
              ? 'var(--color-chart-positive)'
              : 'var(--color-chart-negative)';
          return (
            <g key={i}>
              {i > 0 && (
                <line
                  x1={padL + (i - 1) * slot + (slot - barW) / 2 + barW}
                  y1={Y(bars[i - 1].to)}
                  x2={x}
                  y2={Y(bars[i - 1].to)}
                  className="ds-chart__grid"
                  strokeDasharray="3 3"
                />
              )}
              <rect x={x} y={top} width={barW} height={Math.max(1, bh)} rx={2} style={{ fill }} />
              <text x={x + barW / 2} y={height - 10} className="ds-chart__axis" textAnchor="middle">
                {b.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
