import './Combobox.css';
import { useId, useState } from 'react';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  label?: string;
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/** Searchable autocomplete — typed query filters a dropdown. Mirrors the Figma "Combobox". */
export function Combobox({
  label,
  options,
  value,
  onChange,
  placeholder = 'Search…',
  className = '',
}: ComboboxProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const listId = useId();
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className={`ds-combobox ${className}`.trim()}>
      {label && <label className="ds-combobox__label">{label}</label>}
      <div className="ds-combobox__control">
        <span className="ds-combobox__icon" aria-hidden="true">
          ⌕
        </span>
        <input
          className="ds-combobox__input"
          value={query}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
        />
      </div>
      {open && filtered.length > 0 && (
        <ul className="ds-combobox__list" role="listbox" id={listId}>
          {filtered.map((o) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              className={`ds-combobox__option ${o.value === value ? 'ds-combobox__option--selected' : ''}`}
              onMouseDown={() => {
                onChange?.(o.value);
                setQuery(o.label);
                setOpen(false);
              }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
