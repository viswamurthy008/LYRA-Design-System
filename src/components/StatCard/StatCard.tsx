import './StatCard.css';

export interface StatCardProps {
  label?: string;
  value?: string;
  delta?: string;
  deltaType?: 'up' | 'down';
  helper?: string;
  className?: string;
}

/** Metric card — label, value, trend. Mirrors the Figma "Card / Stat". */
export function StatCard({
  label,
  value,
  delta,
  deltaType = 'up',
  helper,
  className = '',
}: StatCardProps) {
  return (
    <div className={`ds-statcard ${className}`.trim()}>
      <span className="ds-statcard__label">{label}</span>
      <span className="ds-statcard__value">{value}</span>
      <div className="ds-statcard__foot">
        {delta && (
          <span className={`ds-statcard__delta ds-statcard__delta--${deltaType}`}>
            {deltaType === 'up' ? '▲' : '▼'} {delta}
          </span>
        )}
        {helper && <span className="ds-statcard__helper">{helper}</span>}
      </div>
    </div>
  );
}
