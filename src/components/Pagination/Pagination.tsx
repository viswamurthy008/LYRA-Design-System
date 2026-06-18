import './Pagination.css';

export interface PaginationProps {
  /** Current page (1-based). */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  onChange?: (page: number) => void;
  className?: string;
}

/** Page navigation. Mirrors the Figma "Pagination" component. */
export function Pagination({ page, pageCount, onChange, className = '' }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const go = (p: number) => {
    if (p >= 1 && p <= pageCount && p !== page) onChange?.(p);
  };
  return (
    <nav className={`ds-pagination ${className}`.trim()} aria-label="Pagination">
      <button
        type="button"
        className="ds-pagination__nav"
        aria-label="Previous"
        disabled={page <= 1}
        onClick={() => go(page - 1)}
      >
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`ds-pagination__page ${p === page ? 'ds-pagination__page--active' : ''}`}
          aria-current={p === page ? 'page' : undefined}
          onClick={() => go(p)}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className="ds-pagination__nav"
        aria-label="Next"
        disabled={page >= pageCount}
        onClick={() => go(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}
