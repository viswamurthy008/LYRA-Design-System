import './DataTable.css';
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  /** Custom cell renderer; defaults to `row[key]`. */
  render?: (row: T) => ReactNode;
  width?: string;
  align?: 'left' | 'right' | 'center';
  /** Enables click/keyboard sorting on this column. */
  sortable?: boolean;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  getRowId?: (row: T, index: number) => string;
  /** Optional toolbar node rendered above the table (search, filters, actions). */
  toolbar?: ReactNode;
  /** Optional footer node (pagination, counts). */
  footer?: ReactNode;
  /** Row spacing preset for data-heavy views. */
  density?: 'comfortable' | 'compact';
  /** Replaces rows with skeleton placeholders. */
  loading?: boolean;
  /** Shown when `data` is empty (e.g. an <EmptyState/>). */
  empty?: ReactNode;
  className?: string;
}

type SortState = { key: string; dir: 'asc' | 'desc' } | null;

/** Tabular data grid with typed columns and accessible column sorting
 *  (headers are real buttons, `aria-sort` on the cell). Mirrors the Figma "Data Table". */
export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  toolbar,
  footer,
  density = 'comfortable',
  loading = false,
  empty,
  className = '',
}: DataTableProps<T>) {
  const [sort, setSort] = useState<SortState>(null);

  const sorted = useMemo(() => {
    if (!sort) return data;
    const { key, dir } = sort;
    return [...data].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      let cmp: number;
      if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;
      else cmp = String(av ?? '').localeCompare(String(bv ?? ''));
      return dir === 'asc' ? cmp : -cmp;
    });
  }, [data, sort]);

  const toggleSort = (key: string) =>
    setSort((s) => {
      if (s?.key !== key) return { key, dir: 'asc' };
      if (s.dir === 'asc') return { key, dir: 'desc' };
      return null;
    });

  return (
    <div
      className={`ds-table-wrap${density === 'compact' ? ' ds-table-wrap--compact' : ''} ${className}`.trim()}
    >
      {toolbar && <div className="ds-table__toolbar">{toolbar}</div>}
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((c) => {
              const active = sort?.key === c.key;
              return (
                <th
                  key={c.key}
                  style={{ width: c.width, textAlign: c.align ?? 'left' }}
                  aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                >
                  {c.sortable ? (
                    <button
                      type="button"
                      className="ds-table__sort"
                      onClick={() => toggleSort(c.key)}
                    >
                      {c.header}
                      <span className="ds-table__sort-arrow" aria-hidden="true">
                        {active ? (sort.dir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  ) : (
                    c.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading &&
            Array.from({ length: 5 }).map((_, r) => (
              <tr key={`sk-${r}`}>
                {columns.map((c) => (
                  <td key={c.key}>
                    <span className="ds-table__skeleton" />
                  </td>
                ))}
              </tr>
            ))}
          {!loading && sorted.length === 0 && empty && (
            <tr>
              <td className="ds-table__empty" colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          )}
          {!loading &&
            sorted.map((row, i) => (
              <tr key={getRowId ? getRowId(row, i) : i}>
                {columns.map((c) => (
                  <td key={c.key} style={{ textAlign: c.align ?? 'left' }}>
                    {c.render ? c.render(row) : (row[c.key] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {footer && <div className="ds-table__footer">{footer}</div>}
    </div>
  );
}
