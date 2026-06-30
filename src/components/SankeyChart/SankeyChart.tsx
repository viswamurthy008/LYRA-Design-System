import { color } from '../chartUtils';

export interface SankeyNode {
  id: string;
  label: string;
}
export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

export interface SankeyChartProps {
  nodes: SankeyNode[];
  links: SankeyLink[];
  width?: number;
  height?: number;
  nodeWidth?: number;
  className?: string;
}

/** Sankey flow diagram — layered nodes connected by value-weighted ribbons.
 *  Assumes a DAG. Mirrors the Figma "Sankey Diagram". */
export function SankeyChart({
  nodes,
  links,
  width = 540,
  height = 300,
  nodeWidth = 14,
  className = '',
}: SankeyChartProps) {
  const pad = 8;
  const nodeGap = 14;
  const index: Record<string, number> = {};
  nodes.forEach((n, i) => (index[n.id] = i));

  const incoming: Record<string, SankeyLink[]> = {};
  const outgoing: Record<string, SankeyLink[]> = {};
  nodes.forEach((n) => {
    incoming[n.id] = [];
    outgoing[n.id] = [];
  });
  links.forEach((l) => {
    outgoing[l.source]?.push(l);
    incoming[l.target]?.push(l);
  });

  // Longest-path layer assignment.
  const layer: Record<string, number> = {};
  nodes.forEach((n) => (layer[n.id] = 0));
  for (let guard = 0; guard <= nodes.length; guard++) {
    let changed = false;
    links.forEach((l) => {
      if (layer[l.target] < layer[l.source] + 1) {
        layer[l.target] = layer[l.source] + 1;
        changed = true;
      }
    });
    if (!changed) break;
  }
  const maxLayer = Math.max(0, ...nodes.map((n) => layer[n.id]));
  const layers: string[][] = Array.from({ length: maxLayer + 1 }, () => []);
  nodes.forEach((n) => layers[layer[n.id]].push(n.id));

  const nodeVal: Record<string, number> = {};
  nodes.forEach((n) => {
    const inS = incoming[n.id].reduce((s, l) => s + l.value, 0);
    const outS = outgoing[n.id].reduce((s, l) => s + l.value, 0);
    nodeVal[n.id] = Math.max(inS, outS, 1);
  });

  const usableH = height - pad * 2;
  const maxCount = Math.max(...layers.map((l) => l.length));
  const maxTotal = Math.max(...layers.map((l) => l.reduce((s, id) => s + nodeVal[id], 0)), 1);
  const scale = (usableH - (maxCount - 1) * nodeGap) / maxTotal;
  const colStep = maxLayer > 0 ? (width - pad * 2 - nodeWidth) / maxLayer : 0;

  const pos: Record<string, { x: number; y: number; h: number }> = {};
  layers.forEach((ids, li) => {
    const totalH = ids.reduce((s, id) => s + nodeVal[id] * scale, 0) + (ids.length - 1) * nodeGap;
    let y = pad + (usableH - totalH) / 2;
    const x = pad + li * colStep;
    ids.forEach((id) => {
      const h = nodeVal[id] * scale;
      pos[id] = { x, y, h };
      y += h + nodeGap;
    });
  });

  // Ribbon offsets accumulate per node edge.
  const srcOff: Record<string, number> = {};
  const tgtOff: Record<string, number> = {};
  nodes.forEach((n) => {
    srcOff[n.id] = 0;
    tgtOff[n.id] = 0;
  });

  const ribbons = links.map((l, i) => {
    const s = pos[l.source];
    const t = pos[l.target];
    const th = l.value * scale;
    const x0 = s.x + nodeWidth;
    const x1 = t.x;
    const y0 = s.y + srcOff[l.source];
    const y1 = t.y + tgtOff[l.target];
    srcOff[l.source] += th;
    tgtOff[l.target] += th;
    const mx = (x0 + x1) / 2;
    const d = `M${x0},${y0} C${mx},${y0} ${mx},${y1} ${x1},${y1} L${x1},${y1 + th} C${mx},${y1 + th} ${mx},${y0 + th} ${x0},${y0 + th} Z`;
    return { d, ci: index[l.source], key: i };
  });

  return (
    <div className={`ds-chart ${className}`.trim()}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Sankey diagram"
      >
        {ribbons.map((r) => (
          <path key={r.key} d={r.d} style={{ fill: color(r.ci) }} fillOpacity={0.32} />
        ))}
        {nodes.map((n, i) => {
          const p = pos[n.id];
          const onRight = layer[n.id] === maxLayer;
          return (
            <g key={n.id}>
              <rect
                x={p.x}
                y={p.y}
                width={nodeWidth}
                height={Math.max(1, p.h)}
                rx={2}
                style={{ fill: color(i) }}
              />
              <text
                x={onRight ? p.x - 6 : p.x + nodeWidth + 6}
                y={p.y + p.h / 2 + 4}
                className="ds-chart__axis"
                textAnchor={onRight ? 'end' : 'start'}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
