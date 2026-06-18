import './IconButton.css';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. an SVG). */
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  /** Required for accessibility — icon buttons have no visible text. */
  'aria-label': string;
}

/** Compact square button for a single icon action. Mirrors the Figma "Icon Button". */
export function IconButton({
  icon,
  variant = 'secondary',
  size = 'md',
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`ds-icon-btn ds-icon-btn--${variant} ds-icon-btn--${size} ${className}`.trim()}
      {...rest}
    >
      {icon}
    </button>
  );
}
