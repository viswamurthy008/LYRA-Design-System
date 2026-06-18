import './MediaCard.css';
import type { ReactNode } from 'react';

export interface MediaCardProps {
  /** Image URL. If omitted, a token-colored placeholder block is shown. */
  image?: string;
  title?: string;
  description?: string;
  badge?: ReactNode;
  className?: string;
}

/** Media card — image, title, description, badge. Mirrors the Figma "Card / Media". */
export function MediaCard({ image, title, description, badge, className = '' }: MediaCardProps) {
  return (
    <div className={`ds-mediacard ${className}`.trim()}>
      {image ? (
        <img className="ds-mediacard__img" src={image} alt={title ?? ''} />
      ) : (
        <div className="ds-mediacard__placeholder" aria-hidden="true" />
      )}
      <div className="ds-mediacard__body">
        {title && <h3 className="ds-mediacard__title">{title}</h3>}
        {description && <p className="ds-mediacard__desc">{description}</p>}
        {badge && <div className="ds-mediacard__badge">{badge}</div>}
      </div>
    </div>
  );
}
