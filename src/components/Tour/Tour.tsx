import './Tour.css';
import { useEffect, useState } from 'react';

export interface TourStep {
  /** CSS selector of the element to highlight. */
  target: string;
  title: string;
  content: string;
}

export interface TourProps {
  steps: TourStep[];
  /** Controls visibility (controlled). */
  open: boolean;
  onClose?: () => void;
  onFinish?: () => void;
  className?: string;
}

/** Product-tour coachmarks — spotlights a target element with a step card. Mirrors the Figma "Tour / Coachmark". */
export function Tour({ steps, open, onClose, onFinish, className = '' }: TourProps) {
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const step = steps[index];

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open || !step) return;
    const measure = () => {
      const el = document.querySelector(step.target);
      setRect(el ? el.getBoundingClientRect() : null);
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [open, step]);

  if (!open || !step) return null;
  const last = index === steps.length - 1;
  const pad = 6;
  const cardTop = rect ? rect.bottom + pad + 8 : 80;
  const cardLeft = rect ? Math.max(12, rect.left) : 80;

  return (
    <div className={`ds-tour ${className}`.trim()}>
      <div className="ds-tour__backdrop" onClick={onClose} />
      {rect && (
        <div
          className="ds-tour__spotlight"
          style={{
            top: rect.top - pad,
            left: rect.left - pad,
            width: rect.width + pad * 2,
            height: rect.height + pad * 2,
          }}
        />
      )}
      <div
        className="ds-tour__card"
        role="dialog"
        aria-label={step.title}
        style={{ top: cardTop, left: cardLeft }}
      >
        <span className="ds-tour__progress">
          {index + 1} of {steps.length}
        </span>
        <span className="ds-tour__title">{step.title}</span>
        <p className="ds-tour__content">{step.content}</p>
        <div className="ds-tour__actions">
          <button type="button" className="ds-tour__skip" onClick={onClose}>
            Skip
          </button>
          <div className="ds-tour__nav">
            {index > 0 && (
              <button type="button" className="ds-tour__back" onClick={() => setIndex(index - 1)}>
                Back
              </button>
            )}
            <button
              type="button"
              className="ds-tour__next"
              onClick={() => (last ? (onFinish ?? onClose)?.() : setIndex(index + 1))}
            >
              {last ? 'Done' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
