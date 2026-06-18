import './Toast.css';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

const GLYPH: Record<ToastType, string> = { info: 'i', success: '✓', warning: '!', error: '×' };

export interface ToastProps {
  /** Semantic type. Maps to the Figma "Type" variant. */
  type?: ToastType;
  message?: string;
  onDismiss?: () => void;
  className?: string;
}

/** Transient notification. Mirrors the Figma "Toast" component set. */
export function Toast({ type = 'info', message, onDismiss, className = '' }: ToastProps) {
  return (
    <div className={`ds-toast ds-toast--${type} ${className}`.trim()} role="status">
      <span className="ds-toast__icon" aria-hidden="true">
        {GLYPH[type]}
      </span>
      <span className="ds-toast__message">{message}</span>
      {onDismiss && (
        <button
          type="button"
          className="ds-toast__dismiss"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          ×
        </button>
      )}
    </div>
  );
}
