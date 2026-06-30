import { color, niceMax, ChartLegend } from '../chartUtils';

export interface BubbleSeries {
  name: string;
  points: { x: number; y: number; size: number }[];
}

export interface BubbleChartProps {
  series: BubbleSeries[];
  width?: number;
  height?: number;
  /** Max bubble radius in px (largest `size` maps to this). */
  maxRadius?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

/** Scatter plot with a third dimension encoded as bubble area. Mirrors the Figma "Bubble Chart". */
export function BubbleChart({
  series,
  width = 480,
  height = 280,
  maxRadius = 28,
  showGrid = true,
  showLegend = true,
  className = '',
}: BubbleChartProps) {
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 32;
  const iw = width - padL - padR;
  const ih = height - padT - padB;
  const all = series.flatMap((s) => s.points);
  const xMax = niceMax(Math.max(...all.map((p) => p.x), 0));
  const yMax = niceMax(Math.max(...all.map((p) => p.y), 0));
  const sizeMax = Math.max(...all.map((p) => p.size), 1);
  const X = (v: number) => padL + (v / xMax) * iw;
  const Y = (v: number) => padT + ih - (v / yMax) * ih;
  const R = (s: number) => Math.max(3, Math.sqrt(s / sizeMax) * maxRadius);
  const ticks = 4;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Bubble chart"
      >
        {showGrid &&
          Array.from({ length: ticks + 1 }).map((_, t) => {
            const gy = padT + (t / ticks) * ih;
            const gx = padL + (t / ticks) * iw;
            return (
              <g key={t}>
                <line x1={padL} y1={gy} x2={width - padR} y2={gy} className="ds-chart__grid" />
                <text x={padL - 8} y={gy + 4} className="ds-chart__axis" textAnchor="end">
                  {Math.round(yMax * (1 - t / ticks))}
                </text>
                <text x={gx} y={height - 10} className="ds-chart__axis" textAnchor="middle">
                  {Math.round((xMax * t) / ticks)}
                </text>
              </g>
            );
          })}
        {series.map((s, si) =>
          s.points.map((p, i) => (
            <circle
              key={`${si}-${i}`}
              cx={X(p.x)}
              cy={Y(p.y)}
              r={R(p.size)}
              style={{ fill: color(si) }}
              fillOpacity={0.45}
              stroke={color(si)}
              strokeOpacity={0.9}
            />
          )),
        )}
      </svg>
      {showLegend && <ChartLegend items={series.map((s) => s.name)} />}
    </div>
  );
}
