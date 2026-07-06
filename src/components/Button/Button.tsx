import './Button.css';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Maps to the Figma "Style" variant. */
  variant?: ButtonVariant;
  /** Size. Maps to the Figma "Size" variant. */
  size?: ButtonSize;
  /** Shows an inline spinner and disables the button. */
  loading?: boolean;
  /** Icon before the label. */
  iconLeft?: ReactNode;
  /** Icon after the label. */
  iconRight?: ReactNode;
  children?: ReactNode;
}

/**
 * Primary action trigger. Use one `primary` button per view; `secondary`/`ghost`
 * for supporting actions. Mirrors the Figma "Button" component set.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  iconLeft,
  iconRight,
  disabled,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`ds-btn ds-btn--${variant} ds-btn--${size} ${className}`.trim()}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className="ds-btn__spinner" aria-hidden="true" />}
      {!loading && iconLeft && <span className="ds-btn__icon">{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className="ds-btn__icon">{iconRight}</span>}
    </button>
  );
}
