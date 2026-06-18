import './ColorPicker.css';

const DEFAULT_SWATCHES = [
  '#EF4444',
  '#EAB308',
  '#22C55E',
  '#06B6D4',
  '#2563EB',
  '#8B5CF6',
  '#111827',
];

export interface ColorPickerProps {
  value?: string;
  onChange?: (hex: string) => void;
  swatches?: string[];
  className?: string;
}

/** Hex input + preset swatches + native color field. Mirrors the Figma "Color Picker". */
export function ColorPicker({
  value = '#2563EB',
  onChange,
  swatches = DEFAULT_SWATCHES,
  className = '',
}: ColorPickerProps) {
  return (
    <div className={`ds-colorpicker ${className}`.trim()}>
      <div className="ds-colorpicker__preview-row">
        <input
          type="color"
          className="ds-colorpicker__native"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-label="Pick a color"
        />
        <input
          className="ds-colorpicker__hex"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-label="Hex value"
        />
      </div>
      <div className="ds-colorpicker__swatches">
        {swatches.map((s) => (
          <button
            key={s}
            type="button"
            className={`ds-colorpicker__swatch ${s.toLowerCase() === value.toLowerCase() ? 'ds-colorpicker__swatch--active' : ''}`}
            style={{ background: s }}
            aria-label={s}
            onClick={() => onChange?.(s)}
          />
        ))}
      </div>
    </div>
  );
}
