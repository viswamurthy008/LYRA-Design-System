import './Code.css';
import type { ReactNode } from 'react';

export interface CodeProps {
  children: ReactNode;
  /** Render as a block instead of inline. */
  block?: boolean;
  /** Optional language label shown in the block header. */
  language?: string;
  className?: string;
}

/** Inline or block code. Mirrors the Figma "Code". */
export function Code({ children, block = false, language, className = '' }: CodeProps) {
  if (block) {
    return (
      <div className={`ds-code-block ${className}`.trim()}>
        {language && <span className="ds-code-block__lang">{language}</span>}
        <pre className="ds-code-block__pre">
          <code>{children}</code>
        </pre>
      </div>
    );
  }
  return <code className={`ds-code ${className}`.trim()}>{children}</code>;
}
