import './SearchField.css';
import type { InputHTMLAttributes } from 'react';

export interface SearchFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'type'
> {
  label?: string;
  value?: string;
  /** Shows a clear (×) button when there is a value. */
  onClear?: () => void;
}

/** Search input with leading icon and clear button. Mirrors the Figma "Search Field". */
export function SearchField({
  label,
  value,
  onClear,
  className = '',
  id,
  placeholder = 'Search…',
  ...rest
}: SearchFieldProps) {
  const sid = id ?? (label ? `ds-search-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={`ds-searchfield ${className}`.trim()}>
      {label && (
        <label className="ds-searchfield__label" htmlFor={sid}>
          {label}
        </label>
      )}
      <div className="ds-search">
        <span className="ds-search__icon" aria-hidden="true">
          ⌕
        </span>
        <input
          id={sid}
          type="search"
          className="ds-search__input"
          value={value}
          placeholder={placeholder}
          {...rest}
        />
        {value && onClear && (
          <button type="button" className="ds-search__clear" aria-label="Clear" onClick={onClear}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}
