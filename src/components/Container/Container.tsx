import './Container.css';
import type { ReactNode } from 'react';

export interface ContainerProps {
  /** Max content width, in px. */
  maxWidth?: number;
  /** Horizontal padding, in px. */
  padding?: number;
  className?: string;
  children?: ReactNode;
}

/** Centered, max-width page container. Mirrors the Figma "Container". */
export function Container({
  maxWidth = 1120,
  padding = 24,
  className = '',
  children,
}: ContainerProps) {
  return (
    <div
      className={`ds-container ${className}`.trim()}
      style={{ maxWidth, paddingInline: padding }}
    >
      {children}
    </div>
  );
}
