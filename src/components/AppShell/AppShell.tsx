import './AppShell.css';
import type { ReactNode } from 'react';

export interface AppShellProps {
  /** Left navigation (e.g. <Sidebar />). */
  sidebar?: ReactNode;
  /** Top bar (e.g. <Navbar />). */
  header?: ReactNode;
  /** Main content. */
  children?: ReactNode;
  className?: string;
}

/** App layout shell: sidebar + header + scrollable content. Mirrors the Figma "Dashboard shell". */
export function AppShell({ sidebar, header, children, className = '' }: AppShellProps) {
  return (
    <div className={`ds-appshell ${className}`.trim()}>
      {sidebar && <div className="ds-appshell__sidebar">{sidebar}</div>}
      <div className="ds-appshell__main">
        {header && <div className="ds-appshell__header">{header}</div>}
        <main className="ds-appshell__content">{children}</main>
      </div>
    </div>
  );
}
