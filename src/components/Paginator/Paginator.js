import React from 'react';

export function PaginatorComponent({maxPages, numPage, setNumPage}) {
    return (
        <div className="paginator">
            <button className="paginator__first-page-button" onClick={() => setNumPage(1)} disabled={numPage === 1}>
                1
            </button>
            {numPage > 2 && <button className="paginator__prev-page-button" onClick={() => setNumPage(numPage - 1)} disabled={numPage<2}>
                {numPage - 1}
            </button>}
            <span className="paginator__number">{numPage}</span>
            {maxPages-numPage > 1 && <button className="paginator__next-page-button" onClick={() => setNumPage(numPage + 1)} disabled={maxPages-numPage<2}>
                {numPage + 1}
            </button>}
            <button className="paginator__last-page-button" onClick={() => setNumPage(maxPages)} disabled={numPage === maxPages}>
                {maxPages}
            </button>
        </div>
    );
}

export const Paginator = React.memo(PaginatorComponent);
