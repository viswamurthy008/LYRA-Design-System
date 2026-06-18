import './Sidebar.css';
import type { ReactNode } from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface SidebarProps {
  brand?: ReactNode;
  items: SidebarItem[];
  activeId?: string;
  /** Pinned to the bottom (e.g. a user row). */
  footer?: ReactNode;
  onSelect?: (id: string) => void;
  className?: string;
}

/** Vertical app navigation. Mirrors the Figma "Sidebar". */
export function Sidebar({
  brand,
  items,
  activeId,
  footer,
  onSelect,
  className = '',
}: SidebarProps) {
  return (
    <aside className={`ds-sidebar ${className}`.trim()}>
      {brand && <div className="ds-sidebar__brand">{brand}</div>}
      <nav className="ds-sidebar__nav">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`ds-sidebar__item ${it.id === activeId ? 'ds-sidebar__item--active' : ''}`}
            aria-current={it.id === activeId ? 'page' : undefined}
            onClick={() => onSelect?.(it.id)}
          >
            {it.icon && <span className="ds-sidebar__icon">{it.icon}</span>}
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      {footer && <div className="ds-sidebar__footer">{footer}</div>}
    </aside>
  );
}
