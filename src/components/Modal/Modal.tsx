import './Modal.css';
import type { ReactNode } from 'react';
import { Button } from '../Button/Button';

export interface ModalProps {
  open?: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  /** Custom body content, rendered below the description. */
  children?: ReactNode;
}

/** Centered dialog over a backdrop. Mirrors the Figma "Modal / Dialog" component. */
export function Modal({
  open = true,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose,
  children,
}: ModalProps) {
  if (!open) return null;
  return (
    <div className="ds-modal__backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="ds-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ds-modal__header">
          {title && <h2 className="ds-modal__title">{title}</h2>}
          <button type="button" className="ds-modal__close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        {description && <p className="ds-modal__body">{description}</p>}
        {children}
        <div className="ds-modal__footer">
          <Button variant="secondary" size="md" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button variant="primary" size="md" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
