import './Kbd.css';
import type { ReactNode } from 'react';

export interface KbdProps {
  /** Render each entry in its own key cap (e.g. ['⌘', 'K']). */
  keys?: string[];
  children?: ReactNode;
  className?: string;
}

/** Keyboard key hint. Mirrors the Figma "Kbd". */
export function Kbd({ keys, children, className = '' }: KbdProps) {
  if (keys && keys.length > 0) {
    return (
      <span className={`ds-kbd-group ${className}`.trim()}>
        {keys.map((k, i) => (
          <kbd className="ds-kbd" key={i}>
            {k}
          </kbd>
        ))}
      </span>
    );
  }
  return <kbd className={`ds-kbd ${className}`.trim()}>{children}</kbd>;
}
