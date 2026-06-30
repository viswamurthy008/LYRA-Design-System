import { color, niceMax, ChartLegend } from '../chartUtils';

export interface AreaSeries {
  name: string;
  values: number[];
}

export interface AreaChartProps {
  series: AreaSeries[];
  labels?: string[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  className?: string;
}

/** Filled line (area) chart with one or more series. Mirrors the Figma "Area Chart". */
export function AreaChart({
  series,
  labels = [],
  width = 480,
  height = 260,
  showGrid = true,
  showLegend = true,
  className = '',
}: AreaChartProps) {
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
  const baseY = padT + ih;
  const ticks = 4;

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Area chart"
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
        {series.map((s, si) => {
          const line = s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
          const area = `M${x(0)},${baseY} ${s.values
            .map((v, i) => `L${x(i)},${y(v)}`)
            .join(' ')} L${x(s.values.length - 1)},${baseY} Z`;
          return (
            <g key={si}>
              <path d={area} style={{ fill: color(si) }} fillOpacity={0.16} />
              <polyline points={line} fill="none" strokeWidth={2} style={{ stroke: color(si) }} />
            </g>
          );
        })}
      </svg>
      {showLegend && <ChartLegend items={series.map((s) => s.name)} />}
    </div>
  );
}
