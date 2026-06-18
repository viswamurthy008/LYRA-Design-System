import './Breadcrumb.css';
import { Fragment } from 'react';

export interface Crumb {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: Crumb[];
  className?: string;
}

/** Hierarchical navigation path. Mirrors the Figma "Breadcrumb" component. */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`ds-breadcrumb ${className}`.trim()} aria-label="Breadcrumb">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <Fragment key={`${c.label}-${i}`}>
            {c.href && !last ? (
              <a className="ds-breadcrumb__item" href={c.href}>
                {c.label}
              </a>
            ) : (
              <span
                className={`ds-breadcrumb__item ${last ? 'ds-breadcrumb__item--current' : ''}`}
                aria-current={last ? 'page' : undefined}
              >
                {c.label}
              </span>
            )}
            {!last && (
              <span className="ds-breadcrumb__sep" aria-hidden="true">
                /
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
