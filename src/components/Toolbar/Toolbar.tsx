import './Toolbar.css';
import type { ReactNode } from 'react';

export interface ToolbarProps {
  /** Left-aligned content (search, filters). */
  start?: ReactNode;
  /** Right-aligned content (actions). */
  end?: ReactNode;
  className?: string;
}

/** Filter/action bar for list and table views. Mirrors the Figma "Toolbar". */
export function Toolbar({ start, end, className = '' }: ToolbarProps) {
  return (
    <div className={`ds-toolbar ${className}`.trim()} role="toolbar" aria-label="Toolbar">
      <div className="ds-toolbar__start">{start}</div>
      <div className="ds-toolbar__end">{end}</div>
    </div>
  );
}
