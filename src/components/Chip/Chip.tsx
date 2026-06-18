import './Chip.css';
import type { ReactNode } from 'react';

export interface ChipProps {
  label?: string;
  children?: ReactNode;
  /** Highlights the chip as selected. */
  selected?: boolean;
  /** When provided, renders a remove (×) button. */
  onRemove?: () => void;
  className?: string;
}

/** Compact, optionally-removable token for filters & selections. Mirrors the Figma "Chip / Tag". */
export function Chip({ label, children, selected, onRemove, className = '' }: ChipProps) {
  return (
    <span className={`ds-chip ${selected ? 'ds-chip--selected' : ''} ${className}`.trim()}>
      <span className="ds-chip__label">{children ?? label}</span>
      {onRemove && (
        <button type="button" className="ds-chip__remove" aria-label="Remove" onClick={onRemove}>
          ×
        </button>
      )}
    </span>
  );
}
