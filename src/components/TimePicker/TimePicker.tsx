import './TimePicker.css';
import { useState } from 'react';

export interface TimeValue {
  hour: string;
  minute: string;
  period: 'AM' | 'PM';
}

export interface TimePickerProps {
  value?: TimeValue;
  onChange?: (value: TimeValue) => void;
  className?: string;
}

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const MINUTES = ['00', '15', '30', '45'];
const PERIODS: Array<'AM' | 'PM'> = ['AM', 'PM'];

/** Hour / minute / period selector. Mirrors the Figma "Time Picker". */
export function TimePicker({ value, onChange, className = '' }: TimePickerProps) {
  const [v, setV] = useState<TimeValue>(value ?? { hour: '10', minute: '30', period: 'AM' });
  const update = (part: Partial<TimeValue>) => {
    const next = { ...v, ...part };
    setV(next);
    onChange?.(next);
  };
  const column = (items: string[], selected: string, onSel: (val: string) => void) => (
    <div className="ds-timepicker__col">
      {items.map((it) => (
        <button
          key={it}
          type="button"
          className={`ds-timepicker__opt ${it === selected ? 'ds-timepicker__opt--active' : ''}`}
          onClick={() => onSel(it)}
        >
          {it}
        </button>
      ))}
    </div>
  );
  return (
    <div className={`ds-timepicker ${className}`.trim()}>
      <div className="ds-timepicker__title">Select time</div>
      <div className="ds-timepicker__cols">
        {column(HOURS, v.hour, (h) => update({ hour: h }))}
        {column(MINUTES, v.minute, (m) => update({ minute: m }))}
        {column(PERIODS, v.period, (p) => update({ period: p as 'AM' | 'PM' }))}
      </div>
      <div className="ds-timepicker__foot">
        {v.hour}:{v.minute} {v.period}
      </div>
    </div>
  );
}
