import './EmptyState.css';
import type { ReactNode } from 'react';

export interface EmptyStateProps {
  /** Optional icon / illustration node. */
  icon?: ReactNode;
  title?: string;
  description?: string;
  /** Primary action (e.g. a <Button>). */
  action?: ReactNode;
  className?: string;
}

/** Zero-data view with icon, message, and action. Mirrors the Figma "Empty State". */
export function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`ds-empty ${className}`.trim()}>
      {icon && <div className="ds-empty__icon">{icon}</div>}
      {title && <p className="ds-empty__title">{title}</p>}
      {description && <p className="ds-empty__desc">{description}</p>}
      {action && <div className="ds-empty__action">{action}</div>}
    </div>
  );
}
