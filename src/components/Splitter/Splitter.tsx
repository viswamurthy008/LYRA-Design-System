import './Splitter.css';
import { useCallback, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

export interface SplitterProps {
  start: ReactNode;
  end: ReactNode;
  /** Initial size of the start panel, in percent (0–100). */
  defaultSplit?: number;
  min?: number;
  max?: number;
  className?: string;
}

/** Two resizable panels with a draggable divider. Mirrors the Figma "Splitter". */
export function Splitter({
  start,
  end,
  defaultSplit = 50,
  min = 15,
  max = 85,
  className = '',
}: SplitterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(defaultSplit);
  const dragging = useRef(false);

  const onMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setSplit(Math.min(max, Math.max(min, pct)));
    },
    [min, max],
  );
  const stop = useCallback(() => {
    dragging.current = false;
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', stop);
  }, [onMove]);
  const startDrag = () => {
    dragging.current = true;
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', stop);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') setSplit((s) => Math.max(min, s - 2));
    if (e.key === 'ArrowRight') setSplit((s) => Math.min(max, s + 2));
  };

  return (
    <div className={`ds-splitter ${className}`.trim()} ref={ref}>
      <div className="ds-splitter__panel" style={{ flexBasis: `${split}%` }}>
        {start}
      </div>
      <div
        className="ds-splitter__handle"
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={Math.round(split)}
        aria-valuemin={min}
        aria-valuemax={max}
        tabIndex={0}
        onPointerDown={startDrag}
        onKeyDown={onKeyDown}
      />
      <div className="ds-splitter__panel" style={{ flexBasis: `${100 - split}%` }}>
        {end}
      </div>
    </div>
  );
}
