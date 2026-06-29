import './DescriptionList.css';
import type { ReactNode } from 'react';

export interface DescriptionListItem {
  term: string;
  description: ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionListItem[];
  /** 'row' = term and description side by side; 'stack' = stacked. */
  layout?: 'row' | 'stack';
  className?: string;
}

/** Term / description pairs (`<dl>`). Mirrors the Figma "Description List". */
export function DescriptionList({ items, layout = 'row', className = '' }: DescriptionListProps) {
  return (
    <dl className={`ds-dl ds-dl--${layout} ${className}`.trim()}>
      {items.map((it, i) => (
        <div className="ds-dl__pair" key={i}>
          <dt className="ds-dl__term">{it.term}</dt>
          <dd className="ds-dl__desc">{it.description}</dd>
        </div>
      ))}
    </dl>
  );
}
