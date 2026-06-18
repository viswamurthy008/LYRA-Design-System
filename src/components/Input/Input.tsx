import './Input.css';
import type { InputHTMLAttributes } from 'react';

export type InputState = 'default' | 'error' | 'disabled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  /** Field label shown above the input. */
  label?: string;
  /** Current value. */
  value?: string;
  /** Visual state. Maps to the Figma "State" variant (Focus is handled at runtime). */
  state?: InputState;
  /** Helper or error text shown below the field. */
  helperText?: string;
}

/** Single-line text field. Mirrors the Figma "Input" component set. */
export function Input({
  label,
  value,
  state = 'default',
  helperText,
  className = '',
  id,
  ...rest
}: InputProps) {
  const inputId =
    id ?? (label ? `ds-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`ds-field ${className}`.trim()}>
      {label && (
        <label className="ds-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`ds-input ds-input--${state}`}
        value={value}
        disabled={state === 'disabled'}
        aria-invalid={state === 'error'}
        {...rest}
      />
      {helperText && (
        <span
          className={`ds-field__help ${state === 'error' ? 'ds-field__help--error' : ''}`.trim()}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
