import './MultiSelect.css';
import { useEffect, useId, useState } from 'react';
import type { KeyboardEvent } from 'react';

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

/** Multi-value select — selected items shown as removable chips.
 *  Keyboard: ArrowUp/Down move the highlight, Enter selects, Esc closes,
 *  Backspace removes the last chip. Mirrors the Figma "Multi-select". */
export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  className = '',
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listId = useId();
  const selected = options.filter((o) => value.includes(o.value));
  const available = options.filter((o) => !value.includes(o.value));
  const add = (v: string) => onChange?.([...value, v]);
  const remove = (v: string) => onChange?.(value.filter((x) => x !== v));

  useEffect(() => {
    if (open) setActive(0);
  }, [open]);
  useEffect(() => {
    if (active >= available.length) setActive(Math.max(0, available.length - 1));
  }, [available.length, active]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((a) => Math.min(a + 1, available.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!open) setOpen(true);
        else if (available[active]) add(available[active].value);
        break;
      case 'Escape':
        setOpen(false);
        break;
      case 'Backspace':
        if (selected.length > 0) remove(selected[selected.length - 1].value);
        break;
    }
  };

  return (
    <div className={`ds-multiselect ${className}`.trim()}>
      {label && (
        <span className="ds-multiselect__label" id={`${listId}-label`}>
          {label}
        </span>
      )}
      <div
        className="ds-multiselect__control"
        role="combobox"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-labelledby={label ? `${listId}-label` : undefined}
        aria-activedescendant={open && available[active] ? `${listId}-${active}` : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        onBlur={() => setOpen(false)}
      >
        {selected.length === 0 && (
          <span className="ds-multiselect__placeholder">{placeholder}</span>
        )}
        {selected.map((o) => (
          <span className="ds-multiselect__chip" key={o.value}>
            {o.label}
            <button
              type="button"
              className="ds-multiselect__chip-x"
              tabIndex={-1}
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
        <ul className="ds-multiselect__list" id={listId} role="listbox" aria-multiselectable="true">
          {available.map((o, i) => (
            <li
              key={o.value}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={false}
              className={`ds-multiselect__option${
                i === active ? ' ds-multiselect__option--active' : ''
              }`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => {
                e.preventDefault(); // keep focus on the combobox
                add(o.value);
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
