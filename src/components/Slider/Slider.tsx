import './Slider.css';

export interface SliderProps {
  label?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

/** Select a value along a track. Mirrors the Figma "Slider" component. */
export function Slider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  className = '',
}: SliderProps) {
  return (
    <div className={`ds-slider-field ${className}`.trim()}>
      {label && (
        <div className="ds-slider-field__head">
          <label className="ds-slider-field__label">{label}</label>
          {value !== undefined && <span className="ds-slider-field__value">{value}</span>}
        </div>
      )}
      <input
        type="range"
        className="ds-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(Number(e.currentTarget.value))}
      />
    </div>
  );
}
