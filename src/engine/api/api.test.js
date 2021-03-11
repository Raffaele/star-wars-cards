import api from './api';

describe('api', () => {
    const fetchResponse = [1,2,3];
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => fetchResponse
        });
    })
    afterEach(() => {
        global.fetch.mockClear();
    });
    it('should call fetch twice', () => {
        api.getInfo();
        expect(global.fetch).toBeCalledWith('https://swapi.dev/api/people/?format=json&page=1');
    });

    it('should resolve with the 2 arrays concatenated', () => {
        expect(api.getInfo()).resolves.toEqual(fetchResponse);
    });
});