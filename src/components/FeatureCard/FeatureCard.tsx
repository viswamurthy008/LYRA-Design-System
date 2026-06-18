import './FeatureCard.css';
import type { ReactNode } from 'react';

export interface FeatureCardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

/** Feature highlight — icon, title, description. Mirrors the Figma "Card / Feature". */
export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`ds-featurecard ${className}`.trim()}>
      {icon && <div className="ds-featurecard__icon">{icon}</div>}
      {title && <h3 className="ds-featurecard__title">{title}</h3>}
      {description && <p className="ds-featurecard__desc">{description}</p>}
    </div>
  );
}
