import './Checkbox.css';
import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label shown next to the box. */
  label?: string;
  checked?: boolean;
  /** Mixed state for "some children selected" (visual + aria-checked="mixed"). */
  indeterminate?: boolean;
  disabled?: boolean;
}

/** Multi-select boolean control. Mirrors the Figma "Checkbox" component set. */
export function Checkbox({
  label,
  checked,
  indeterminate = false,
  disabled,
  className = '',
  id,
  ...rest
}: CheckboxProps) {
  const inputId = id ?? (label ? `ds-cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label className={`ds-checkbox ${disabled ? 'ds-checkbox--disabled' : ''} ${className}`.trim()}>
      <input
        id={inputId}
        type="checkbox"
        className="ds-checkbox__input"
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : undefined}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate;
        }}
        {...rest}
      />
      {label && <span className="ds-checkbox__label">{label}</span>}
    </label>
  );
}
