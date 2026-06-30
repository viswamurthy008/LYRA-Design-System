import { color, niceMax, ChartLegend } from '../chartUtils';

export interface LineSeries {
  name: string;
  values: number[];
}

export interface LineChartProps {
  series: LineSeries[];
  labels?: string[];
  width?: number;
  height?: number;
  showDots?: boolean;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

/** Multi-series line chart with axes and grid. Mirrors the Figma "Line Chart". */
export function LineChart({
  series,
  labels = [],
  width = 480,
  height = 260,
  showDots = true,
  showGrid = true,
  showLegend = true,
  className = '',
}: LineChartProps) {
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 28;
  const iw = width - padL - padR;
  const ih = height - padT - padB;
  const max = niceMax(Math.max(...series.flatMap((s) => s.values), 0));
  const n = Math.max(...series.map((s) => s.values.length), 1);
  const x = (i: number) => padL + (n <= 1 ? iw / 2 : (i / (n - 1)) * iw);
  const y = (v: number) => padT + ih - (v / max) * ih;
  const ticks = 4;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Line chart"
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
        {labels.map((lab, i) => (
          <text key={i} x={x(i)} y={height - 8} className="ds-chart__axis" textAnchor="middle">
            {lab}
          </text>
        ))}
        {series.map((s, si) => (
          <g key={si}>
            <polyline
              points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ')}
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ stroke: color(si) }}
            />
            {showDots &&
              s.values.map((v, i) => (
                <circle key={i} cx={x(i)} cy={y(v)} r={3} style={{ fill: color(si) }} />
              ))}
          </g>
        ))}
      </svg>
      {showLegend && <ChartLegend items={series.map((s) => s.name)} />}
    </div>
  );
}
