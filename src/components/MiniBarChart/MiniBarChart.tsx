import './MiniBarChart.css';

export interface MiniBarChartProps {
  data: number[];
  height?: number;
  gap?: number;
  /** Index of a bar to highlight (e.g. the latest period). */
  highlightIndex?: number;
  className?: string;
}

/** Compact bar chart for inline metrics. Mirrors the Figma "Mini Bar Chart". */
export function MiniBarChart({
  data,
  height = 64,
  gap = 4,
  highlightIndex,
  className = '',
}: MiniBarChartProps) {
  const max = Math.max(...data, 1);
  return (
    <div
      className={`ds-minibarchart ${className}`.trim()}
      style={{ height, gap }}
      role="img"
      aria-label="Bar chart"
    >
      {data.map((v, i) => (
        <div
          key={i}
          className={`ds-minibarchart__bar${
            i === highlightIndex ? ' ds-minibarchart__bar--active' : ''
          }`}
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}
