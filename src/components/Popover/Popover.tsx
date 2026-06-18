import './Popover.css';
import { useState } from 'react';
import type { ReactNode } from 'react';

export interface PopoverProps {
  /** Element that toggles the popover. */
  trigger: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom';
  className?: string;
}

/** Floating panel anchored to a trigger. Mirrors the Figma "Popover" component. */
export function Popover({ trigger, children, position = 'bottom', className = '' }: PopoverProps) {
  const [open, setOpen] = useState(false);
  return (
    <span className={`ds-popover ${className}`.trim()}>
      <span className="ds-popover__trigger" onClick={() => setOpen((o) => !o)}>
        {trigger}
      </span>
      {open && (
        <span className={`ds-popover__panel ds-popover__panel--${position}`} role="dialog">
          {children}
        </span>
      )}
    </span>
  );
}
