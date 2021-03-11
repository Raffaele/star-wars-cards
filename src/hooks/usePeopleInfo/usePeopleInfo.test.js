import { usePeopleInfo } from './usePeopleInfo';
import apiInfoManager from '../../engine/apiInfoManager/apiInfoManager';
import { act, renderHook } from '@testing-library/react-hooks';
jest.mock('../../engine/apiInfoManager/apiInfoManager');

describe('usePeopleInfo', () => {
    const characters = [{
        id: 1,
        homeworld: 'https://planets/1',
        films: ['https://films/1', 'https://films/2']
    }, {
        id: 2,
        homeworld: 'https://planets/2',
        films: ['https://films/1']
    }, {
        id: 3,
        homeworld: 'https://planets/2',
        films: ['https://films/4']
    }, {
        id: 4,
        homeworld: 'https://planets/5',
        films: ['https://films/3']
    }];

    const planets = [{
        id: 1,
        url: 'https://planets/1'
    }, {
        id: 2,
        url: 'https://planets/2'
    }, {
        id: 3,
        url: 'https://planets/3'
    }, {
        id: 4,
        url: 'https://planets/5'
    }];

    const films = [{
        id: 1,
        url: 'https://films/1'
    }, {
        id: 2,
        url: 'https://films/2'
    }, {
        id: 3,
        url: 'https://films/3'
    }, {
        id: 4,
        url: 'https://films/4'
    }];
    let result;
    beforeEach(async () => {
        apiInfoManager.getCharactersInfo.mockResolvedValue(characters);
        apiInfoManager.getPlanetsInfo.mockResolvedValue(planets);
        apiInfoManager.getFilmsInfo.mockResolvedValue(films);
        await act(async () => renderHook(() => {
            result = usePeopleInfo();
        }))
    });
    it('should return the correct characters', () => {
        expect(result.map(r => r.id)).toEqual(characters.map(c => c.id));
    });
    it('should add to every character the correct originPlanetInfo', () => {
        expect(result[0].originPlanetInfo).toBe(planets[0]);
        expect(result[1].originPlanetInfo).toBe(planets[1]);
        expect(result[2].originPlanetInfo).toBe(planets[1]);
        expect(result[3].originPlanetInfo).toBe(planets[3]);
    });

    it('should add to every character the correct list of films', () => {
        expect(result[0].filmsInfo).toEqual([
            films[0],
            films[1]
        ]);
        expect(result[1].filmsInfo).toEqual([
            films[0]
        ]);
        expect(result[2].filmsInfo).toEqual([
            films[3]
        ]);
        expect(result[3].filmsInfo).toEqual([
            films[2]
        ]);
    });
});