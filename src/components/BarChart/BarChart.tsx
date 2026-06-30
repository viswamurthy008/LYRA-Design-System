import { color, niceMax, ChartLegend } from '../chartUtils';

export interface BarSeries {
  name: string;
  values: number[];
}

export interface BarChartProps {
  series: BarSeries[];
  labels: string[];
  width?: number;
  height?: number;
  /** Stack series instead of grouping side by side. */
  stacked?: boolean;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

/** Vertical bar chart — grouped or stacked. Mirrors the Figma "Bar Chart". */
export function BarChart({
  series,
  labels,
  width = 480,
  height = 260,
  stacked = false,
  showGrid = true,
  showLegend = true,
  className = '',
}: BarChartProps) {
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 28;
  const iw = width - padL - padR;
  const ih = height - padT - padB;
  const totals = labels.map((_, i) => series.reduce((sum, s) => sum + (s.values[i] ?? 0), 0));
  const max = niceMax(
    stacked ? Math.max(...totals, 0) : Math.max(...series.flatMap((s) => s.values), 0),
  );
  const ticks = 4;
  const groupW = iw / labels.length;
  const pad = groupW * 0.2;
  const innerW = groupW - pad * 2;
  const barW = stacked ? innerW : innerW / series.length;
  const h = (v: number) => (v / max) * ih;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Bar chart"
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
        {labels.map((lab, i) => {
          const gx = padL + i * groupW + pad;
          let stackTop = padT + ih;
          return (
            <g key={i}>
              {series.map((s, si) => {
                const v = s.values[i] ?? 0;
                const bh = h(v);
                let bx: number;
                let by: number;
                if (stacked) {
                  bx = gx;
                  stackTop -= bh;
                  by = stackTop;
                } else {
                  bx = gx + si * barW;
                  by = padT + ih - bh;
                }
                return (
                  <rect
                    key={si}
                    x={bx}
                    y={by}
                    width={barW - (stacked ? 0 : 2)}
                    height={Math.max(0, bh)}
                    rx={2}
                    style={{ fill: color(si) }}
                  />
                );
              })}
              <text
                x={gx + innerW / 2}
                y={height - 8}
                className="ds-chart__axis"
                textAnchor="middle"
              >
                {lab}
              </text>
            </g>
          );
        })}
      </svg>
      {showLegend && <ChartLegend items={series.map((s) => s.name)} />}
    </div>
  );
}
