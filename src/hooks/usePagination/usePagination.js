import React from 'react';

export function usePagination() {
    const { useState } = React;
    const [maxPages, setMaxPages] = useState(0);
    const [numPage, setNumPage] = useState(1);

    return {
        numPage,
        maxPages,
        setNumPage,
        setMaxPages
    };
}