import './Select.css';
import type { SelectHTMLAttributes } from 'react';

export type SelectState = 'default' | 'error' | 'disabled';
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> {
  label?: string;
  value?: string;
  options?: SelectOption[];
  placeholder?: string;
  /** Visual state. Maps to the Figma "State" variant. */
  state?: SelectState;
}

/** Single-choice dropdown. Mirrors the Figma "Select" component set. */
export function Select({
  label,
  value,
  options = [],
  placeholder = 'Select an option',
  state = 'default',
  className = '',
  id,
  ...rest
}: SelectProps) {
  const selId = id ?? (label ? `ds-select-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`ds-select-field ${className}`.trim()}>
      {label && (
        <label className="ds-select-field__label" htmlFor={selId}>
          {label}
        </label>
      )}
      <div className="ds-select__wrap">
        <select
          id={selId}
          className={`ds-select ds-select--${state}`}
          value={value ?? ''}
          disabled={state === 'disabled'}
          aria-invalid={state === 'error'}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="ds-select__chevron" aria-hidden="true">
          ▾
        </span>
      </div>
    </div>
  );
}
