import './Spinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  /** Size. Maps to the Figma "Size" variant. */
  size?: SpinnerSize;
  /** Accessible label for screen readers. */
  label?: string;
  className?: string;
}

/** Indeterminate loading indicator. Mirrors the Figma "Spinner" component set. */
export function Spinner({ size = 'md', label = 'Loading…', className = '' }: SpinnerProps) {
  return (
    <span
      className={`ds-spinner ds-spinner--${size} ${className}`.trim()}
      role="status"
      aria-label={label}
    />
  );
}
