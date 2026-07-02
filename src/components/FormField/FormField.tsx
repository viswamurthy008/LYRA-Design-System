import './FormField.css';
import { cloneElement, isValidElement, useId } from 'react';
import type { ReactElement, ReactNode } from 'react';

export interface FormFieldProps {
  label: string;
  /** Helper text shown under the control (replaced by `error` when set). */
  hint?: string;
  /** Validation message — switches the field into its error state. */
  error?: string;
  required?: boolean;
  /** A single form control; it receives `id` and `aria-describedby` automatically. */
  children: ReactNode;
  className?: string;
}

/** Label + control + hint/error wrapper wiring up accessible ids. Mirrors the Figma "Form Field". */
export function FormField({
  label,
  hint,
  error,
  required = false,
  children,
  className = '',
}: FormFieldProps) {
  const id = useId();
  const messageId = `${id}-msg`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        'aria-describedby': hint || error ? messageId : undefined,
        'aria-invalid': error ? true : undefined,
      })
    : children;

  return (
    <div className={`ds-formfield${error ? ' ds-formfield--error' : ''} ${className}`.trim()}>
      <label className="ds-formfield__label" htmlFor={id}>
        {label}
        {required && (
          <span className="ds-formfield__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {control}
      {(error || hint) && (
        <span
          id={messageId}
          className={error ? 'ds-formfield__error' : 'ds-formfield__hint'}
          role={error ? 'alert' : undefined}
        >
          {error ?? hint}
        </span>
      )}
    </div>
  );
}
