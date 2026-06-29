import './RangeSlider.css';

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  /** Selected [low, high] range (controlled). */
  value: [number, number];
  onChange?: (value: [number, number]) => void;
  className?: string;
}

/** Dual-thumb range slider. Mirrors the Figma "Range Slider". */
export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = '',
}: RangeSliderProps) {
  const [low, high] = value;
  const pct = (v: number) => ((v - min) / (max - min)) * 100;
  const setLow = (v: number) => onChange?.([Math.min(v, high), high]);
  const setHigh = (v: number) => onChange?.([low, Math.max(v, low)]);
  return (
    <div className={`ds-rangeslider ${className}`.trim()}>
      <div className="ds-rangeslider__track" />
      <div
        className="ds-rangeslider__fill"
        style={{ left: `${pct(low)}%`, right: `${100 - pct(high)}%` }}
      />
      <input
        type="range"
        className="ds-rangeslider__input"
        min={min}
        max={max}
        step={step}
        value={low}
        aria-label="Minimum"
        onChange={(e) => setLow(Number(e.target.value))}
      />
      <input
        type="range"
        className="ds-rangeslider__input"
        min={min}
        max={max}
        step={step}
        value={high}
        aria-label="Maximum"
        onChange={(e) => setHigh(Number(e.target.value))}
      />
    </div>
  );
}
