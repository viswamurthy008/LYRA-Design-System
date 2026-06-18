import './TreeView.css';
import { useState } from 'react';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

export interface TreeViewProps {
  nodes: TreeNode[];
  defaultExpanded?: string[];
  className?: string;
}

function TreeBranch({
  node,
  expanded,
  toggle,
  depth,
}: {
  node: TreeNode;
  expanded: Set<string>;
  toggle: (id: string) => void;
  depth: number;
}) {
  const hasChildren = !!node.children?.length;
  const open = expanded.has(node.id);
  return (
    <li className="ds-tree__node">
      <div
        className="ds-tree__row"
        style={{ paddingLeft: 8 + depth * 18 }}
        onClick={() => hasChildren && toggle(node.id)}
      >
        <span
          className={`ds-tree__caret ${hasChildren ? '' : 'ds-tree__caret--hidden'} ${open ? 'ds-tree__caret--open' : ''}`}
          aria-hidden="true"
        >
          ▸
        </span>
        <span className="ds-tree__label">{node.label}</span>
      </div>
      {hasChildren && open && (
        <ul className="ds-tree__children">
          {node.children!.map((c) => (
            <TreeBranch key={c.id} node={c} expanded={expanded} toggle={toggle} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

/** Hierarchical, collapsible list. Mirrors the Figma "Tree View". */
export function TreeView({ nodes, defaultExpanded = [], className = '' }: TreeViewProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded));
  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <ul className={`ds-tree ${className}`.trim()} role="tree">
      {nodes.map((n) => (
        <TreeBranch key={n.id} node={n} expanded={expanded} toggle={toggle} depth={0} />
      ))}
    </ul>
  );
}
