import './ProfileCard.css';
import type { ReactNode } from 'react';
import { Avatar } from '../Avatar/Avatar';

export interface ProfileCardProps {
  initials?: string;
  src?: string;
  name?: string;
  role?: string;
  /** Primary action (e.g. a <Button>). */
  action?: ReactNode;
  className?: string;
}

/** Person card — avatar, name, role, action. Mirrors the Figma "Card / Profile". */
export function ProfileCard({
  initials,
  src,
  name,
  role,
  action,
  className = '',
}: ProfileCardProps) {
  return (
    <div className={`ds-profilecard ${className}`.trim()}>
      <Avatar size="xl" initials={initials} src={src} alt={name} />
      {name && <span className="ds-profilecard__name">{name}</span>}
      {role && <span className="ds-profilecard__role">{role}</span>}
      {action && <div className="ds-profilecard__action">{action}</div>}
    </div>
  );
}
