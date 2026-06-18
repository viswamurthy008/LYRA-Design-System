import './Badge.css';
import type { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error';

export interface BadgeProps {
  /** Semantic style. Maps to the Figma "Style" variant. */
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}

/** Small status / label tag. Mirrors the Figma "Badge" component set. */
export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return <span className={`ds-badge ds-badge--${variant} ${className}`.trim()}>{children}</span>;
}
