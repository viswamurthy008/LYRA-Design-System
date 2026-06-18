import './List.css';
import type { ReactNode } from 'react';

export interface ListItemData {
  id: string;
  primary: string;
  secondary?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}

export interface ListProps {
  items: ListItemData[];
  className?: string;
}

/** Vertical list of rows with leading/trailing content. Mirrors the Figma "List". */
export function List({ items, className = '' }: ListProps) {
  return (
    <ul className={`ds-list ${className}`.trim()}>
      {items.map((it) => (
        <li
          key={it.id}
          className={`ds-list__row ${it.onClick ? 'ds-list__row--interactive' : ''}`}
          onClick={it.onClick}
        >
          {it.leading && <span className="ds-list__leading">{it.leading}</span>}
          <span className="ds-list__text">
            <span className="ds-list__primary">{it.primary}</span>
            {it.secondary && <span className="ds-list__secondary">{it.secondary}</span>}
          </span>
          {it.trailing && <span className="ds-list__trailing">{it.trailing}</span>}
        </li>
      ))}
    </ul>
  );
}
