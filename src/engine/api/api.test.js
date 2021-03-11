import api from './api';

describe('api', () => {
    const fetchResponse = [1,2,3];
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => fetchResponse
        });
    });
    afterEach(() => {
        global.fetch.mockClear();
    });

    describe('getCharactersInfo method' , () => {
        it('should call fetch once with correct url', () => {
            api.getCharactersInfo();
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/people/?page=1');
        });
    
        it('should call fetch once with correct page', () => {
            api.getCharactersInfo({page: 3});
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/people/?page=3');
        });
    
        it('should resolve with the 2 arrays concatenated', () => {
            expect(api.getCharactersInfo()).resolves.toEqual(fetchResponse);
        });
    });

    describe('getPlanetsInfo method' , () => {
        it('should call fetch once with correct url', () => {
            api.getPlanetsInfo();
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/planets/?page=1');
        });
    
        it('should call fetch once with correct page', () => {
            api.getPlanetsInfo({page: 3});
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/planets/?page=3');
        });
    
        it('should resolve with the 2 arrays concatenated', () => {
            expect(api.getPlanetsInfo()).resolves.toEqual(fetchResponse);
        });
    });

    describe('getFilmsInfo method' , () => {
        it('should call fetch once with correct url', () => {
            api.getFilmsInfo();
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/films/?page=1');
        });
    
        it('should call fetch once with correct page', () => {
            api.getFilmsInfo({page: 3});
            expect(global.fetch).toBeCalledWith('https://swapi.dev/api/films/?page=3');
        });
    
        it('should resolve with the 2 arrays concatenated', () => {
            expect(api.getFilmsInfo()).resolves.toEqual(fetchResponse);
        });
    });
    
});