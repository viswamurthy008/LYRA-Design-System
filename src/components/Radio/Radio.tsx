import './Radio.css';
import type { InputHTMLAttributes } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label shown next to the control. */
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

/** Single-select control within a group. Mirrors the Figma "Radio" component set. */
export function Radio({ label, checked, disabled, className = '', id, ...rest }: RadioProps) {
  const inputId =
    id ?? (label ? `ds-radio-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label className={`ds-radio ${disabled ? 'ds-radio--disabled' : ''} ${className}`.trim()}>
      <input
        id={inputId}
        type="radio"
        className="ds-radio__input"
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <span className="ds-radio__circle" />
      {label && <span className="ds-radio__label">{label}</span>}
    </label>
  );
}
