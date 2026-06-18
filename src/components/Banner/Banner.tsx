import './Banner.css';

export type BannerType = 'info' | 'success' | 'warning' | 'error';

export interface BannerProps {
  type?: BannerType;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  className?: string;
}

/** Full-width page-level announcement. Mirrors the Figma "Banner" component. */
export function Banner({
  type = 'info',
  message,
  actionLabel,
  onAction,
  onDismiss,
  className = '',
}: BannerProps) {
  return (
    <div className={`ds-banner ds-banner--${type} ${className}`.trim()} role="status">
      <span className="ds-banner__message">{message}</span>
      <div className="ds-banner__actions">
        {actionLabel && (
          <button type="button" className="ds-banner__action" onClick={onAction}>
            {actionLabel}
          </button>
        )}
        {onDismiss && (
          <button
            type="button"
            className="ds-banner__dismiss"
            aria-label="Dismiss"
            onClick={onDismiss}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
