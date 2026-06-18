import './SwitchGroup.css';
import { Toggle } from '../Toggle/Toggle';

export interface SwitchItem {
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface SwitchGroupProps {
  items: SwitchItem[];
  onChange?: (id: string, checked: boolean) => void;
  className?: string;
}

/** Labelled list of toggles for grouped settings. Mirrors the Figma "Switch Group". */
export function SwitchGroup({ items, onChange, className = '' }: SwitchGroupProps) {
  return (
    <div className={`ds-switch-group ${className}`.trim()} role="group">
      {items.map((it) => (
        <div className="ds-switch-group__row" key={it.id}>
          <div className="ds-switch-group__text">
            <span className="ds-switch-group__label">{it.label}</span>
            {it.description && <span className="ds-switch-group__desc">{it.description}</span>}
          </div>
          <Toggle
            checked={it.checked}
            disabled={it.disabled}
            onChange={(e) => onChange?.(it.id, e.currentTarget.checked)}
          />
        </div>
      ))}
    </div>
  );
}
