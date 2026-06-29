import './Stack.css';
import type { CSSProperties, ReactNode } from 'react';

export interface StackProps {
  direction?: 'row' | 'column';
  /** Gap between children, in px. */
  gap?: number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: boolean;
  className?: string;
  children?: ReactNode;
}

/** Flexbox stack primitive. Mirrors the Figma "Stack". */
export function Stack({
  direction = 'column',
  gap = 16,
  align,
  justify,
  wrap,
  className = '',
  children,
}: StackProps) {
  return (
    <div
      className={`ds-stack ${className}`.trim()}
      style={{
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : undefined,
      }}
    >
      {children}
    </div>
  );
}
