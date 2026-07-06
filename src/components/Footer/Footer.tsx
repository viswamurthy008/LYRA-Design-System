import './Footer.css';
import type { ReactNode } from 'react';

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  /** Brand/wordmark node shown on the left. */
  brand?: ReactNode;
  columns?: FooterColumn[];
  /** Bottom line, e.g. copyright. */
  legal?: ReactNode;
  className?: string;
}

/** Page footer with link columns and a legal line. Mirrors the Figma "Footer". */
export function Footer({ brand, columns = [], legal, className = '' }: FooterProps) {
  return (
    <footer className={`ds-footer ${className}`.trim()}>
      <div className="ds-footer__main">
        {brand && <div className="ds-footer__brand">{brand}</div>}
        {columns.map((col) => (
          <nav className="ds-footer__col" key={col.title} aria-label={col.title}>
            <span className="ds-footer__title">{col.title}</span>
            <ul className="ds-footer__links">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a className="ds-footer__link" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      {legal && <div className="ds-footer__legal">{legal}</div>}
    </footer>
  );
}
