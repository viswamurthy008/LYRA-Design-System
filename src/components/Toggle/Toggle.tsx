import './Toggle.css';
import type { InputHTMLAttributes } from 'react';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label shown next to the switch. */
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

/** On/off switch for instant settings. Mirrors the Figma "Toggle" component set. */
export function Toggle({ label, checked, disabled, className = '', id, ...rest }: ToggleProps) {
  const inputId =
    id ?? (label ? `ds-toggle-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label className={`ds-toggle ${disabled ? 'ds-toggle--disabled' : ''} ${className}`.trim()}>
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        className="ds-toggle__input"
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <span className="ds-toggle__track">
        <span className="ds-toggle__thumb" />
      </span>
      {label && <span className="ds-toggle__label">{label}</span>}
    </label>
  );
}
