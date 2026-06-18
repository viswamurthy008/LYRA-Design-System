import './Rating.css';

export interface RatingProps {
  /** Current rating (number of filled stars). */
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

/** Star rating input/display. Mirrors the Figma "Rating" component. */
export function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  className = '',
}: RatingProps) {
  return (
    <div className={`ds-rating ${className}`.trim()} role="radiogroup">
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          disabled={readOnly}
          className={`ds-rating__star ${n <= value ? 'ds-rating__star--filled' : ''}`}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          aria-checked={n === value}
          role="radio"
          onClick={() => onChange?.(n)}
        >
          ★
        </button>
      ))}
    </div>
  );
}
