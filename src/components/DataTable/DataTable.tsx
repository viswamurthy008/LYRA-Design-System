import './DataTable.css';
import type { ReactNode } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  /** Custom cell renderer; defaults to `row[key]`. */
  render?: (row: T) => ReactNode;
  width?: string;
  align?: 'left' | 'right' | 'center';
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  getRowId?: (row: T, index: number) => string;
  /** Optional toolbar node rendered above the table (search, filters, actions). */
  toolbar?: ReactNode;
  /** Optional footer node (pagination, counts). */
  footer?: ReactNode;
  className?: string;
}

/** Tabular data grid with typed columns. Mirrors the Figma "Data Table". */
export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  toolbar,
  footer,
  className = '',
}: DataTableProps<T>) {
  return (
    <div className={`ds-table-wrap ${className}`.trim()}>
      {toolbar && <div className="ds-table__toolbar">{toolbar}</div>}
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ width: c.width, textAlign: c.align ?? 'left' }}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
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
