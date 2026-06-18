import './Button.css';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Maps to the Figma "Style" variant. */
  variant?: ButtonVariant;
  /** Size. Maps to the Figma "Size" variant. */
  size?: ButtonSize;
  children?: ReactNode;
}

/**
 * Primary action trigger. Use one `primary` button per view; `secondary`/`ghost`
 * for supporting actions. Mirrors the Figma "Button" component set.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`ds-btn ds-btn--${variant} ds-btn--${size} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
