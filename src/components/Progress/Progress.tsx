import './Progress.css';

export interface ProgressProps {
  /** 0–100. Ignored when `indeterminate`. */
  value?: number;
  /** Animates continuously for unknown durations. */
  indeterminate?: boolean;
  /** Optional label / percentage shown above the track. */
  label?: string;
  className?: string;
}

/** Linear progress indicator. Mirrors the Figma "Progress" component set. */
export function Progress({
  value = 0,
  indeterminate = false,
  label,
  className = '',
}: ProgressProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`ds-progress ${className}`.trim()}>
      {label && <div className="ds-progress__label">{label}</div>}
      <div
        className="ds-progress__track"
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`ds-progress__fill${indeterminate ? ' ds-progress__fill--indeterminate' : ''}`}
          style={indeterminate ? undefined : { width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
