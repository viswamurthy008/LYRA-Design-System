import './CommandPalette.css';
import { useState } from 'react';
import type { ReactNode } from 'react';

export interface Command {
  id: string;
  label: string;
  shortcut?: string;
  icon?: ReactNode;
  onRun?: () => void;
}

export interface CommandPaletteProps {
  commands: Command[];
  open?: boolean;
  onClose?: () => void;
  placeholder?: string;
  className?: string;
}

/** Modal command search with shortcuts. Mirrors the Figma "Command Palette". */
export function CommandPalette({
  commands,
  open = true,
  onClose,
  placeholder = 'Type a command or search…',
  className = '',
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  if (!open) return null;
  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="ds-cmdk__backdrop" onClick={onClose}>
      <div
        className={`ds-cmdk ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ds-cmdk__search">
          <span className="ds-cmdk__icon" aria-hidden="true">
            ⌕
          </span>
          <input
            autoFocus
            className="ds-cmdk__input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="ds-cmdk__kbd">esc</kbd>
        </div>
        <ul className="ds-cmdk__list" role="listbox">
          {filtered.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                className="ds-cmdk__item"
                onClick={() => {
                  c.onRun?.();
                  onClose?.();
                }}
              >
                {c.icon && <span className="ds-cmdk__item-icon">{c.icon}</span>}
                <span className="ds-cmdk__item-label">{c.label}</span>
                {c.shortcut && <kbd className="ds-cmdk__kbd">{c.shortcut}</kbd>}
              </button>
            </li>
          ))}
          {filtered.length === 0 && <li className="ds-cmdk__empty">No results</li>}
        </ul>
      </div>
    </div>
  );
}
