import './AvatarGroup.css';
import { Avatar, type AvatarSize } from '../Avatar/Avatar';

export interface AvatarGroupItem {
  initials?: string;
  src?: string;
  alt?: string;
}

export interface AvatarGroupProps {
  avatars: AvatarGroupItem[];
  /** Max avatars to show before collapsing into a "+N" chip. */
  max?: number;
  size?: AvatarSize;
  className?: string;
}

/** Overlapping stack of avatars with a "+N" overflow. Mirrors the Figma "Avatar Group". */
export function AvatarGroup({ avatars, max = 4, size = 'md', className = '' }: AvatarGroupProps) {
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  return (
    <div className={`ds-avatar-group ${className}`.trim()}>
      {shown.map((a, i) => (
        <span className="ds-avatar-group__item" key={i}>
          <Avatar size={size} initials={a.initials} src={a.src} alt={a.alt} />
        </span>
      ))}
      {extra > 0 && (
        <span className="ds-avatar-group__item">
          <span className={`ds-avatar-group__more ds-avatar-group__more--${size}`}>+{extra}</span>
        </span>
      )}
    </div>
  );
}
