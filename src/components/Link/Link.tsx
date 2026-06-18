import './Link.css';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

/** Inline text navigation. Mirrors the Figma "Link" component. */
export function Link({ className = '', children, ...rest }: LinkProps) {
  return (
    <a className={`ds-link ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
