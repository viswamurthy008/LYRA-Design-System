import { color } from '../chartUtils';

export interface TreemapItem {
  label: string;
  value: number;
}

export interface TreemapProps {
  data: TreemapItem[];
  width?: number;
  height?: number;
  className?: string;
}

interface Node {
  label: string;
  value: number;
  ci: number;
}
interface Rect extends Node {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Recursive binary split — keeps rectangles reasonably square. */
function layout(items: Node[], x: number, y: number, w: number, h: number): Rect[] {
  if (items.length === 0) return [];
  if (items.length === 1) return [{ ...items[0], x, y, w, h }];
  const total = items.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  let i = 0;
  while (i < items.length - 1 && acc < total / 2) {
    acc += items[i].value;
    i++;
  }
  const a = items.slice(0, i);
  const b = items.slice(i);
  const frac = a.reduce((s, d) => s + d.value, 0) / total;
  if (w >= h) {
    const aw = w * frac;
    return [...layout(a, x, y, aw, h), ...layout(b, x + aw, y, w - aw, h)];
  }
  const ah = h * frac;
  return [...layout(a, x, y, w, ah), ...layout(b, x, y + ah, w, h - ah)];
}

/** Treemap — nested rectangles sized by value. Mirrors the Figma "Treemap". */
export function Treemap({ data, width = 480, height = 300, className = '' }: TreemapProps) {
  const nodes: Node[] = data.map((d, ci) => ({ ...d, ci })).sort((a, b) => b.value - a.value);
  const gap = 2;
  const rects = layout(nodes, 0, 0, width, height);

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Treemap"
      >
        {rects.map((r) => (
          <g key={r.ci}>
            <rect
              x={r.x + gap / 2}
              y={r.y + gap / 2}
              width={Math.max(0, r.w - gap)}
              height={Math.max(0, r.h - gap)}
              rx={4}
              style={{ fill: color(r.ci) }}
            />
            {r.w > 56 && r.h > 30 && (
              <text
                x={r.x + 8}
                y={r.y + 20}
                fontSize={12}
                fontWeight={600}
                fill="var(--white-1000)"
              >
                {r.label}
              </text>
            )}
            {r.w > 56 && r.h > 46 && (
              <text x={r.x + 8} y={r.y + 36} fontSize={11} fill="var(--white-1000)" opacity={0.85}>
                {r.value}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
