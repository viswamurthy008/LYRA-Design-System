import './MultiSelect.css';
import { useState } from 'react';

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  label?: string;
  options: MultiSelectOption[];
  /** Currently selected values (controlled). */
  value: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

/** Multi-value select — selected items shown as removable chips. Mirrors the Figma "Multi-select". */
export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  className = '',
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.filter((o) => value.includes(o.value));
  const available = options.filter((o) => !value.includes(o.value));
  const add = (v: string) => onChange?.([...value, v]);
  const remove = (v: string) => onChange?.(value.filter((x) => x !== v));
  return (
    <div className={`ds-multiselect ${className}`.trim()}>
      {label && <span className="ds-multiselect__label">{label}</span>}
      <div className="ds-multiselect__control" onClick={() => setOpen((o) => !o)}>
        {selected.length === 0 && (
          <span className="ds-multiselect__placeholder">{placeholder}</span>
        )}
        {selected.map((o) => (
          <span className="ds-multiselect__chip" key={o.value}>
            {o.label}
            <button
              type="button"
              className="ds-multiselect__chip-x"
              aria-label={`Remove ${o.label}`}
              onClick={(e) => {
                e.stopPropagation();
                remove(o.value);
              }}
            >
              ×
            </button>
          </span>
        ))}
        <span className="ds-multiselect__chevron" aria-hidden="true">
          ▾
        </span>
      </div>
      {open && available.length > 0 && (
        <ul className="ds-multiselect__list" role="listbox" aria-multiselectable="true">
          {available.map((o) => (
            <li
              key={o.value}
              role="option"
              aria-selected={false}
              className="ds-multiselect__option"
              onClick={() => add(o.value)}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
