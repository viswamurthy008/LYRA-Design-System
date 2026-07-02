import './NotificationCenter.css';

export interface NotificationItem {
  id: string;
  title: string;
  description?: string;
  /** Relative or absolute time text, e.g. "2h ago". */
  time?: string;
  unread?: boolean;
  icon?: React.ReactNode;
}

export interface NotificationCenterProps {
  notifications: NotificationItem[];
  title?: string;
  onItemClick?: (id: string) => void;
  onMarkAllRead?: () => void;
  emptyText?: string;
  className?: string;
}

/** Dropdown-style notification list with unread markers. Mirrors the Figma "Notification Center". */
export function NotificationCenter({
  notifications,
  title = 'Notifications',
  onItemClick,
  onMarkAllRead,
  emptyText = 'You’re all caught up!',
  className = '',
}: NotificationCenterProps) {
  const unread = notifications.filter((n) => n.unread).length;
  return (
    <div className={`ds-notifcenter ${className}`.trim()}>
      <div className="ds-notifcenter__header">
        <span className="ds-notifcenter__title">
          {title}
          {unread > 0 && <span className="ds-notifcenter__count">{unread}</span>}
        </span>
        {onMarkAllRead && unread > 0 && (
          <button type="button" className="ds-notifcenter__markall" onClick={onMarkAllRead}>
            Mark all read
          </button>
        )}
      </div>
      {notifications.length === 0 ? (
        <div className="ds-notifcenter__empty">{emptyText}</div>
      ) : (
        <ul className="ds-notifcenter__list">
          {notifications.map((n) => (
            <li key={n.id}>
              <button
                type="button"
                className={`ds-notifcenter__item${n.unread ? ' ds-notifcenter__item--unread' : ''}`}
                onClick={() => onItemClick?.(n.id)}
              >
                {n.icon && <span className="ds-notifcenter__icon">{n.icon}</span>}
                <span className="ds-notifcenter__body">
                  <span className="ds-notifcenter__item-title">{n.title}</span>
                  {n.description && <span className="ds-notifcenter__desc">{n.description}</span>}
                </span>
                <span className="ds-notifcenter__meta">
                  {n.time && <span className="ds-notifcenter__time">{n.time}</span>}
                  {n.unread && <span className="ds-notifcenter__dot" aria-label="Unread" />}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
