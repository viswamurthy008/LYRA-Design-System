import './ContextMenu.css';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

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

/** Right-click context menu. Items are real buttons: ArrowUp/Down move focus,
 *  Enter/Space select, Esc closes. Mirrors the Figma "Context Menu". */
export function ContextMenu({ items, children, className = '' }: ContextMenuProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!pos) return;
    // Focus the first item so keyboard users land inside the menu.
    menuRef.current?.querySelector('button')?.focus();
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

  const onMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const buttons = Array.from(menuRef.current?.querySelectorAll('button') ?? []);
    const idx = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      buttons[(idx + 1) % buttons.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      buttons[(idx - 1 + buttons.length) % buttons.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      buttons[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      buttons[buttons.length - 1]?.focus();
    } else if (e.key === 'Escape') {
      setPos(null);
    }
  };

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
          ref={menuRef}
          className="ds-contextmenu__menu"
          role="menu"
          style={{ position: 'fixed', top: pos.y, left: pos.x }}
          onKeyDown={onMenuKeyDown}
        >
          {items.map((it) => (
            <li key={it.id} role="none">
              <button
                type="button"
                role="menuitem"
                className={`ds-contextmenu__item ${it.danger ? 'ds-contextmenu__item--danger' : ''}`}
                onClick={() => {
                  it.onSelect?.();
                  setPos(null);
                }}
              >
                {it.icon && <span className="ds-contextmenu__icon">{it.icon}</span>}
                <span>{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
