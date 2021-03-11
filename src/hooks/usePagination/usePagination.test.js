import { act, renderHook } from '@testing-library/react-hooks';
import { usePagination } from './usePagination';
// import hooksService from '../hooksService';
// js.mock('../hooksService');

describe('usePagination', () => {
    let paginator;
    beforeEach(async () => {
        await act(async () => renderHook(() => {
            paginator = usePagination();
        }))
    });
    it('should return the correct attributes', () => {
        expect(Object.keys(paginator)).toEqual([
            'numPage',
            'maxPages',
            'setNumPage',
            'setMaxPages'
        ]);
    });

    it('should have numPage=1 as default', () => {
        expect(paginator.numPage).toBe(1);
    });

    it('should set numPage with setNumPage method', async () => {
        await act(async () => {
            paginator.setNumPage(4);
        });
        expect(paginator.numPage).toBe(4);
    });

    it('should have maxPages=0 as default', () => {
        expect(paginator.maxPages).toBe(0);
    });

    it('should set maxPages with setMaxPages method', async () => {
        await act(async () => {
            paginator.setMaxPages(8);
        });
        expect(paginator.maxPages).toBe(8);
    });
});