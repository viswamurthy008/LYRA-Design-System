import './ContextMenu.css';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  danger?: boolean;
  onSelect?: () => void;
}

export interface ContextMenuProps {
  items: ContextMenuItem[];
  /** The area that responds to right-click. */
  children: ReactNode;
  className?: string;
}

/** Right-click context menu. Mirrors the Figma "Context Menu". */
export function ContextMenu({ items, children, className = '' }: ContextMenuProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!pos) return;
    const close = () => setPos(null);
    window.addEventListener('click', close);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [pos]);

  return (
    <div
      className={`ds-contextmenu ${className}`.trim()}
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
      }}
    >
      {children}
      {pos && (
        <ul
          className="ds-contextmenu__menu"
          role="menu"
          style={{ position: 'fixed', top: pos.y, left: pos.x }}
        >
          {items.map((it) => (
            <li
              key={it.id}
              role="menuitem"
              className={`ds-contextmenu__item ${it.danger ? 'ds-contextmenu__item--danger' : ''}`}
              onClick={() => {
                it.onSelect?.();
                setPos(null);
              }}
            >
              {it.icon && <span className="ds-contextmenu__icon">{it.icon}</span>}
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
