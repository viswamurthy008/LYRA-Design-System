import './Divider.css';

export interface DividerProps {
  /** Orientation of the rule. */
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/** Thin rule to separate content groups. Mirrors the Figma "Divider" component. */
export function Divider({ orientation = 'horizontal', className = '' }: DividerProps) {
  return (
    <hr
      className={`ds-divider ds-divider--${orientation} ${className}`.trim()}
      aria-orientation={orientation}
    />
  );
}
