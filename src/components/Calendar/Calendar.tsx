import './Calendar.css';
import { useState } from 'react';

export interface CalendarEvent {
  date: Date;
  label: string;
  kind?: 'brand' | 'success' | 'danger';
}

export interface CalendarProps {
  /** Month to display (any date within it). Defaults to today. */
  month?: Date;
  events?: CalendarEvent[];
  className?: string;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Month schedule view with event chips. Mirrors the Figma "Calendar / Schedule". */
export function Calendar({ month, events = [], className = '' }: CalendarProps) {
  const today = new Date();
  const [view, setView] = useState(month ?? today);
  const year = view.getFullYear();
  const m = view.getMonth();
  const firstDay = new Date(year, m, 1).getDay();
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const move = (delta: number) => setView(new Date(year, m + delta, 1));

  return (
    <div className={`ds-calendar ${className}`.trim()}>
      <div className="ds-calendar__toolbar">
        <span className="ds-calendar__title">
          {MONTHS[m]} {year}
        </span>
        <div className="ds-calendar__nav">
          <button type="button" aria-label="Previous month" onClick={() => move(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next month" onClick={() => move(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="ds-calendar__weekdays">
        {WEEKDAYS.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="ds-calendar__grid">
        {cells.map((d, i) => {
          if (d === null)
            return <div key={i} className="ds-calendar__cell ds-calendar__cell--empty" />;
          const date = new Date(year, m, d);
          const isToday = sameDay(date, today);
          const dayEvents = events.filter((e) => sameDay(e.date, date));
          return (
            <div key={i} className="ds-calendar__cell">
              <span className={`ds-calendar__date ${isToday ? 'ds-calendar__date--today' : ''}`}>
                {d}
              </span>
              {dayEvents.map((e, j) => (
                <span
                  key={j}
                  className={`ds-calendar__event ds-calendar__event--${e.kind ?? 'brand'}`}
                >
                  {e.label}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
