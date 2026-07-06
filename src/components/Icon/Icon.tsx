import './Icon.css';
import { ICON_PATHS } from './icon-paths';
import type { IconName } from './icon-paths';

export { ICON_NAMES } from './icon-paths';
export type { IconName };

export interface IconProps {
  name: IconName;
  /** Rendered square size in px. */
  size?: number;
  strokeWidth?: number;
  /** Accessible label; omit for purely decorative icons. */
  title?: string;
  className?: string;
}

/** LYRA icon set — 24×24 grid, 2px round stroke, colored via `currentColor`.
 *  Mirrors the Figma `icon/*` components. */
export function Icon({ name, size = 24, strokeWidth = 2, title, className = '' }: IconProps) {
  return (
    <svg
      className={`ds-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {ICON_PATHS[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
