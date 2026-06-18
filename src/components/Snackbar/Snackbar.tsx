import './Snackbar.css';

export interface SnackbarProps {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/** Brief confirmation message with an optional action. Mirrors the Figma "Snackbar". */
export function Snackbar({ message, actionLabel, onAction, className = '' }: SnackbarProps) {
  return (
    <div className={`ds-snackbar ${className}`.trim()} role="status">
      <span className="ds-snackbar__message">{message}</span>
      {actionLabel && (
        <button type="button" className="ds-snackbar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
