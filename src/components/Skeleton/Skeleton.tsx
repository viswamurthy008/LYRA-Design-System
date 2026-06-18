import './Skeleton.css';
import type { CSSProperties } from 'react';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  /** Render as a circle (for avatars). */
  circle?: boolean;
  /** Custom border radius (ignored when circle). */
  radius?: string;
  className?: string;
}

/** Placeholder shimmer shown while content loads. Mirrors the Figma "Skeleton". */
export function Skeleton({
  width = '100%',
  height = 16,
  circle = false,
  radius,
  className = '',
}: SkeletonProps) {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: circle ? '9999px' : (radius ?? 'var(--radius-sm)'),
  };
  return <span className={`ds-skeleton ${className}`.trim()} style={style} aria-hidden="true" />;
}
