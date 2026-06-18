import './Card.css';
import type { ReactNode } from 'react';
import { Button } from '../Button/Button';

export type CardVariant = 'default' | 'elevated';

export interface CardProps {
  /** Surface style. Maps to the Figma "Style" variant. */
  variant?: CardVariant;
  title?: string;
  body?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** Optional custom content, used instead of title/body/cta when provided. */
  children?: ReactNode;
  className?: string;
}

/** Surface container for grouped content. Mirrors the Figma "Card" component set. */
export function Card({
  variant = 'default',
  title,
  body,
  ctaLabel,
  onCtaClick,
  children,
  className = '',
}: CardProps) {
  return (
    <div className={`ds-card ds-card--${variant} ${className}`.trim()}>
      {children ?? (
        <>
          {title && <h3 className="ds-card__title">{title}</h3>}
          {body && <p className="ds-card__body">{body}</p>}
          {ctaLabel && (
            <Button variant="primary" size="sm" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          )}
        </>
      )}
    </div>
  );
}
