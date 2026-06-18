import './Accordion.css';
import { useState } from 'react';
import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow more than one row open at a time. */
  allowMultiple?: boolean;
  /** Item ids open on mount. */
  defaultOpen?: string[];
  className?: string;
}

/** Expand/collapse content rows. Mirrors the Figma "Accordion" component. */
export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}: AccordionProps) {
  const [open, setOpen] = useState<string[]>(defaultOpen);
  const toggle = (id: string) =>
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : allowMultiple ? [...prev, id] : [id],
    );
  return (
    <div className={`ds-accordion ${className}`.trim()}>
      {items.map((it) => {
        const isOpen = open.includes(it.id);
        return (
          <div className="ds-accordion__row" key={it.id}>
            <button
              className="ds-accordion__header"
              aria-expanded={isOpen}
              onClick={() => toggle(it.id)}
            >
              <span className="ds-accordion__title">{it.title}</span>
              <span
                className={`ds-accordion__chevron ${isOpen ? 'ds-accordion__chevron--open' : ''}`}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            {isOpen && <div className="ds-accordion__content">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
