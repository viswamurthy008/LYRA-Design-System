import './Alert.css';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  /** Semantic type. Maps to the Figma "Type" variant. */
  type?: AlertType;
  title?: string;
  message?: string;
  /** When provided, renders a dismiss button. */
  onDismiss?: () => void;
  className?: string;
}

const DEFAULT_TITLES: Record<AlertType, string> = {
  info: 'Heads up',
  success: 'Success',
  warning: 'Warning',
  error: 'Something went wrong',
};

/** Inline contextual banner. Mirrors the Figma "Alert" component set. */
export function Alert({ type = 'info', title, message, onDismiss, className = '' }: AlertProps) {
  return (
    <div className={`ds-alert ds-alert--${type} ${className}`.trim()} role="alert">
      <div className="ds-alert__content">
        <p className="ds-alert__title">{title ?? DEFAULT_TITLES[type]}</p>
        {message && <p className="ds-alert__message">{message}</p>}
      </div>
      {onDismiss && (
        <button className="ds-alert__dismiss" aria-label="Dismiss" onClick={onDismiss}>
          ×
        </button>
      )}
    </div>
  );
}
