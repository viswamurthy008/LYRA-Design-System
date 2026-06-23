import './CircularProgress.css';

export interface CircularProgressProps {
  /** 0–100. */
  value?: number;
  /** Diameter in px. */
  size?: number;
  strokeWidth?: number;
  /** Show the percentage (or custom label) in the center. */
  showLabel?: boolean;
  label?: string;
  className?: string;
}

/** Circular/ring progress indicator. Mirrors the Figma "Circular Progress". */
export function CircularProgress({
  value = 0,
  size = 48,
  strokeWidth = 4,
  showLabel = false,
  label,
  className = '',
}: CircularProgressProps) {
  const v = Math.max(0, Math.min(100, value));
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - v / 100);
  return (
    <div
      className={`ds-circprog ${className}`.trim()}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="ds-circprog__track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className="ds-circprog__fill"
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {showLabel && <span className="ds-circprog__label">{label ?? `${Math.round(v)}%`}</span>}
    </div>
  );
}
