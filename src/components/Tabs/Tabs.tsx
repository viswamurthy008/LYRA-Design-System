import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  tabs: TabItem[];
  /** Currently active tab id. */
  value: string;
  onChange?: (id: string) => void;
  className?: string;
}

/** Switch between views in the same context. Mirrors the Figma "Tabs" component set. */
export function Tabs({ tabs, value, onChange, className = '' }: TabsProps) {
  return (
    <div role="tablist" className={`ds-tabs ${className}`.trim()}>
      {tabs.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={active}
            className={`ds-tab ${active ? 'ds-tab--active' : ''}`}
            onClick={() => onChange?.(t.id)}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
