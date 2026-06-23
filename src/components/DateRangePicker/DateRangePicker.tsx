import './DateRangePicker.css';
import { useState } from 'react';

export interface DateRange {
  start?: Date;
  end?: Date;
}

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
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
const ymd = (d: Date) => d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate();

/** Calendar that selects a start–end date range. Mirrors the Figma "Date Range Picker". */
export function DateRangePicker({ value = {}, onChange, className = '' }: DateRangePickerProps) {
  const today = new Date();
  const [view, setView] = useState(value.start ?? today);
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const { start, end } = value;
  const move = (delta: number) => setView(new Date(year, month + delta, 1));
  const pick = (date: Date) => {
    if (!start || (start && end)) onChange?.({ start: date, end: undefined });
    else if (ymd(date) < ymd(start)) onChange?.({ start: date, end: start });
    else onChange?.({ start, end: date });
  };
  const inRange = (d: Date) => !!start && !!end && ymd(d) >= ymd(start) && ymd(d) <= ymd(end);
  const isStart = (d: Date) => !!start && ymd(d) === ymd(start);
  const isEnd = (d: Date) => !!end && ymd(d) === ymd(end);

  return (
    <div className={`ds-rangepicker ${className}`.trim()}>
      <div className="ds-rangepicker__header">
        <span className="ds-rangepicker__month">
          {MONTHS[month]} {year}
        </span>
        <div className="ds-rangepicker__nav">
          <button type="button" aria-label="Previous month" onClick={() => move(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next month" onClick={() => move(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="ds-rangepicker__weekdays">
        {WEEKDAYS.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="ds-rangepicker__grid">
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const date = new Date(year, month, d);
          const classes = [
            'ds-rangepicker__day',
            inRange(date) ? 'ds-rangepicker__day--in-range' : '',
            isStart(date) ? 'ds-rangepicker__day--start' : '',
            isEnd(date) ? 'ds-rangepicker__day--end' : '',
          ]
            .join(' ')
            .trim();
          return (
            <button key={i} type="button" className={classes} onClick={() => pick(date)}>
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
