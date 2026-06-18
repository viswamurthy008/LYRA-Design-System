import './DatePicker.css';
import { useState } from 'react';

export interface DatePickerProps {
  /** Selected date. */
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function sameDay(a?: Date, b?: Date) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Calendar popup for choosing a date. Mirrors the Figma "Date Picker". */
export function DatePicker({ value, onChange, className = '' }: DatePickerProps) {
  const today = new Date();
  const [view, setView] = useState(value ?? today);
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const move = (delta: number) => setView(new Date(year, month + delta, 1));

  return (
    <div className={`ds-datepicker ${className}`.trim()}>
      <div className="ds-datepicker__header">
        <span className="ds-datepicker__month">
          {MONTHS[month]} {year}
        </span>
        <div className="ds-datepicker__nav">
          <button type="button" aria-label="Previous month" onClick={() => move(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next month" onClick={() => move(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="ds-datepicker__weekdays">
        {WEEKDAYS.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="ds-datepicker__grid">
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const date = new Date(year, month, d);
          const selected = sameDay(date, value);
          const isToday = sameDay(date, today);
          return (
            <button
              key={i}
              type="button"
              className={`ds-datepicker__day ${selected ? 'ds-datepicker__day--selected' : ''} ${isToday && !selected ? 'ds-datepicker__day--today' : ''}`}
              onClick={() => onChange?.(date)}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
