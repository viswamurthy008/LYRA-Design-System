import './Metric.css';
import { Sparkline } from '../Sparkline/Sparkline';

export interface MetricProps {
  label: string;
  value: string;
  /** Signed percentage change; its sign drives the up/down styling. */
  delta?: number;
  /** Override the delta text (defaults to `${delta}%`). */
  deltaLabel?: string;
  /** Force a trend direction instead of inferring from `delta`. */
  trend?: 'up' | 'down';
  /** Optional trend series rendered as a sparkline. */
  sparkline?: number[];
  className?: string;
}

/** KPI tile: value with a signed delta and optional sparkline. Mirrors the Figma "Metric". */
export function Metric({
  label,
  value,
  delta,
  deltaLabel,
  trend,
  sparkline,
  className = '',
}: MetricProps) {
  const dir = trend ?? (delta != null ? (delta >= 0 ? 'up' : 'down') : undefined);
  const text = deltaLabel ?? (delta != null ? `${delta > 0 ? '+' : ''}${delta}%` : undefined);
  return (
    <div className={`ds-metric ${className}`.trim()}>
      <span className="ds-metric__label">{label}</span>
      <div className="ds-metric__row">
        <span className="ds-metric__value">{value}</span>
        {text && (
          <span className={`ds-metric__delta ds-metric__delta--${dir}`}>
            <span aria-hidden="true">{dir === 'down' ? '▼' : '▲'}</span>
            {text}
          </span>
        )}
      </div>
      {sparkline && <Sparkline data={sparkline} width={150} height={36} area />}
    </div>
  );
}
