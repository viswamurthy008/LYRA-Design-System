import './ButtonGroup.css';
import type { ReactNode } from 'react';

export interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

/** Segmented set of related buttons sharing one container. Mirrors the Figma "Button Group". */
export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return (
    <div className={`ds-btn-group ${className}`.trim()} role="group">
      {children}
    </div>
  );
}
