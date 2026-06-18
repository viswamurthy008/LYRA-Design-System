import './NumberStepper.css';
import { useState } from 'react';

export interface NumberStepperProps {
  label?: string;
  /** Controlled value. Omit for uncontrolled (starts at 1 or `min`). */
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

/** Numeric input with −/+ controls. Mirrors the Figma "Number Stepper" component set. */
export function NumberStepper({
  label,
  value,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  onChange,
  disabled = false,
  className = '',
}: NumberStepperProps) {
  const [internal, setInternal] = useState(value ?? (Number.isFinite(min) ? min : 1));
  const val = value ?? internal;
  const set = (next: number) => {
    const clamped = Math.max(min, Math.min(max, next));
    if (value === undefined) setInternal(clamped);
    onChange?.(clamped);
  };
  return (
    <div className={`ds-stepper-field ${className}`.trim()}>
      {label && <span className="ds-stepper-field__label">{label}</span>}
      <div className={`ds-stepper ${disabled ? 'ds-stepper--disabled' : ''}`}>
        <button
          type="button"
          className="ds-stepper__btn"
          aria-label="Decrease"
          disabled={disabled || val <= min}
          onClick={() => set(val - step)}
        >
          −
        </button>
        <span className="ds-stepper__value">{val}</span>
        <button
          type="button"
          className="ds-stepper__btn"
          aria-label="Increase"
          disabled={disabled || val >= max}
          onClick={() => set(val + step)}
        >
          +
        </button>
      </div>
    </div>
  );
}
