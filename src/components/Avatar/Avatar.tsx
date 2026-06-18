import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /** Size. Maps to the Figma "Size" variant. */
  size?: AvatarSize;
  /** Initials shown when no image. Maps to the Figma "Initials" property. */
  initials?: string;
  /** Image source; when set, shows the photo instead of initials. */
  src?: string;
  alt?: string;
  className?: string;
}

/** User image / initials. Mirrors the Figma "Avatar" component set. */
export function Avatar({ size = 'md', initials, src, alt = '', className = '' }: AvatarProps) {
  return (
    <span className={`ds-avatar ds-avatar--${size} ${className}`.trim()}>
      {src ? (
        <img className="ds-avatar__img" src={src} alt={alt} />
      ) : initials ? (
        <span className="ds-avatar__initials">{initials}</span>
      ) : (
        <span className="ds-avatar__placeholder" aria-hidden="true">
          ?
        </span>
      )}
    </span>
  );
}
