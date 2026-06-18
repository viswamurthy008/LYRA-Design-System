import './Textarea.css';
import type { TextareaHTMLAttributes } from 'react';

export type TextareaState = 'default' | 'error' | 'disabled';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  label?: string;
  value?: string;
  state?: TextareaState;
  helperText?: string;
}

/** Multi-line text field. Mirrors the Figma "Textarea" component set. */
export function Textarea({
  label,
  value,
  state = 'default',
  helperText,
  className = '',
  id,
  rows = 4,
  ...rest
}: TextareaProps) {
  const tid = id ?? (label ? `ds-textarea-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`ds-field ${className}`.trim()}>
      {label && (
        <label className="ds-field__label" htmlFor={tid}>
          {label}
        </label>
      )}
      <textarea
        id={tid}
        className={`ds-textarea ds-textarea--${state}`}
        value={value}
        rows={rows}
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
