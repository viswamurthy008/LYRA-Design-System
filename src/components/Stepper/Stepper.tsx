import './Stepper.css';

export interface Step {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  /** Index of the current (active) step. Steps before it are "done". */
  current: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/** Multi-step progress / wizard. Mirrors the Figma "Stepper / Wizard" (Horizontal + Vertical). */
export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  className = '',
}: StepperProps) {
  return (
    <div className={`ds-stepper-flow ds-stepper-flow--${orientation} ${className}`.trim()}>
      {steps.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        const last = i === steps.length - 1;
        return (
          <div className={`ds-step ds-step--${state}`} key={s.id}>
            <div className="ds-step__rail">
              <span className="ds-step__marker">{state === 'done' ? '✓' : i + 1}</span>
              {!last && <span className="ds-step__line" />}
            </div>
            <div className="ds-step__content">
              <span className="ds-step__title">{s.title}</span>
              {s.description && <span className="ds-step__desc">{s.description}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
