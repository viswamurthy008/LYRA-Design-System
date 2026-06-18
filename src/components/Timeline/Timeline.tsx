import './Timeline.css';

export interface TimelineItem {
  id: string;
  title: string;
  time?: string;
  description?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

/** Chronological activity feed with connectors. Mirrors the Figma "Timeline / Activity". */
export function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <ol className={`ds-timeline ${className}`.trim()}>
      {items.map((it, i) => (
        <li className="ds-timeline__item" key={it.id}>
          <div className="ds-timeline__rail">
            <span className="ds-timeline__dot" />
            {i < items.length - 1 && <span className="ds-timeline__line" />}
          </div>
          <div className="ds-timeline__content">
            <div className="ds-timeline__head">
              <span className="ds-timeline__title">{it.title}</span>
              {it.time && <span className="ds-timeline__time">{it.time}</span>}
            </div>
            {it.description && <p className="ds-timeline__desc">{it.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
