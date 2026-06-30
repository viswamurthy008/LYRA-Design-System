import { color, niceMax, ChartLegend } from '../chartUtils';

export interface ScatterSeries {
  name: string;
  points: { x: number; y: number }[];
}

export interface ScatterPlotProps {
  series: ScatterSeries[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

/** X/Y scatter plot with multiple series. Mirrors the Figma "Scatter Plot". */
export function ScatterPlot({
  series,
  width = 480,
  height = 280,
  showGrid = true,
  showLegend = true,
  className = '',
}: ScatterPlotProps) {
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 32;
  const iw = width - padL - padR;
  const ih = height - padT - padB;
  const xMax = niceMax(Math.max(...series.flatMap((s) => s.points.map((p) => p.x)), 0));
  const yMax = niceMax(Math.max(...series.flatMap((s) => s.points.map((p) => p.y)), 0));
  const X = (v: number) => padL + (v / xMax) * iw;
  const Y = (v: number) => padT + ih - (v / yMax) * ih;
  const ticks = 4;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Scatter plot"
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
              r={4}
              style={{ fill: color(si) }}
              fillOpacity={0.75}
            />
          )),
        )}
      </svg>
      {showLegend && <ChartLegend items={series.map((s) => s.name)} />}
    </div>
  );
}
