import './Grid.css';
import type { ReactNode } from 'react';

export interface GridProps {
  columns?: number;
  /** Gap between cells, in px. */
  gap?: number;
  /** Min column width for a responsive auto-fit grid; overrides `columns`. */
  minColWidth?: number;
  className?: string;
  children?: ReactNode;
}

/** CSS grid primitive. Mirrors the Figma "Grid". */
export function Grid({ columns = 2, gap = 16, minColWidth, className = '', children }: GridProps) {
  const gridTemplateColumns = minColWidth
    ? `repeat(auto-fit, minmax(${minColWidth}px, 1fr))`
    : `repeat(${columns}, 1fr)`;
  return (
    <div className={`ds-grid ${className}`.trim()} style={{ gridTemplateColumns, gap }}>
      {children}
    </div>
  );
}
