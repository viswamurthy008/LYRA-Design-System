import './Sparkline.css';

export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  /** Fill the area beneath the line. */
  area?: boolean;
  className?: string;
}

/** Compact inline trend line. Mirrors the Figma "Sparkline". */
export function Sparkline({
  data,
  width = 120,
  height = 32,
  strokeWidth = 2,
  area = false,
  className = '',
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = data.length > 1 ? width / (data.length - 1) : 0;
  const pad = strokeWidth;
  const y = (v: number) => pad + (1 - (v - min) / range) * (height - pad * 2);
  const points = data.map((v, i) => `${i * stepX},${y(v)}`).join(' ');
  const areaPath =
    `M0,${y(data[0])} ` +
    data.map((v, i) => `L${i * stepX},${y(v)}`).join(' ') +
    ` L${(data.length - 1) * stepX},${height} L0,${height} Z`;
  return (
    <svg
      className={`ds-sparkline ${className}`.trim()}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Trend sparkline"
    >
      {area && <path className="ds-sparkline__area" d={areaPath} />}
      <polyline
        className="ds-sparkline__line"
        points={points}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
