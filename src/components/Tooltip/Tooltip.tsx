import './Tooltip.css';
import type { ReactNode } from 'react';

export interface TooltipProps {
  /** Bubble text. */
  content: ReactNode;
  /** Arrow side. Maps to the Figma "Position" variant. */
  position?: 'top' | 'bottom';
  children: ReactNode;
  className?: string;
}

/** Small contextual label on hover/focus. Mirrors the Figma "Tooltip" component set. */
export function Tooltip({ content, position = 'top', children, className = '' }: TooltipProps) {
  return (
    <span className={`ds-tooltip ${className}`.trim()}>
      <span className="ds-tooltip__trigger">{children}</span>
      <span className={`ds-tooltip__bubble ds-tooltip__bubble--${position}`} role="tooltip">
        {content}
      </span>
    </span>
  );
}
