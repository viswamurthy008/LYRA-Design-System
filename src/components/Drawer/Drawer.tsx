import './Drawer.css';
import type { ReactNode } from 'react';

export interface DrawerProps {
  open?: boolean;
  side?: 'left' | 'right';
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
}

/** Panel that slides in from an edge. Mirrors the Figma "Drawer / Side sheet". */
export function Drawer({ open = true, side = 'right', title, onClose, children }: DrawerProps) {
  if (!open) return null;
  return (
    <div className="ds-drawer__backdrop" onClick={onClose}>
      <aside
        className={`ds-drawer ds-drawer--${side}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ds-drawer__header">
          {title && <h2 className="ds-drawer__title">{title}</h2>}
          <button type="button" className="ds-drawer__close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="ds-drawer__body">{children}</div>
      </aside>
    </div>
  );
}
