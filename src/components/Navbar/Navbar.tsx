import './Navbar.css';
import type { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface NavbarProps {
  brand?: ReactNode;
  items?: NavItem[];
  activeId?: string;
  /** Right-aligned actions (buttons, avatar, etc.). */
  actions?: ReactNode;
  onSelect?: (id: string) => void;
  className?: string;
}

/** Horizontal top navigation bar. Mirrors the Figma "Top Navbar". */
export function Navbar({
  brand,
  items = [],
  activeId,
  actions,
  onSelect,
  className = '',
}: NavbarProps) {
  return (
    <header className={`ds-navbar ${className}`.trim()}>
      {brand && <div className="ds-navbar__brand">{brand}</div>}
      <nav className="ds-navbar__nav">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href}
            className={`ds-navbar__item ${it.id === activeId ? 'ds-navbar__item--active' : ''}`}
            aria-current={it.id === activeId ? 'page' : undefined}
            onClick={() => onSelect?.(it.id)}
          >
            {it.label}
          </a>
        ))}
      </nav>
      {actions && <div className="ds-navbar__actions">{actions}</div>}
    </header>
  );
}
