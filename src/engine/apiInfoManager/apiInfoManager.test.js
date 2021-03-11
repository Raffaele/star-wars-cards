import apiInfoManager from './apiInfoManager';

import api from '../api/api';
jest.mock('../api/api');

describe('apiInfoManager', () => {
    
    describe('getCharactersInfo', () => {
        let getCharactersInfo;
        let apiResponses;
        beforeEach(() => {
            apiResponses = [{
                count: 15,
                results: [{id:1},{id:2},{id:3}]
            }, {
                results: [{id:4},{id:5},{id:6},{id:7}]
            }];
            getCharactersInfo = apiInfoManager.getCharactersInfo;
            api.getCharactersInfo
                .mockResolvedValueOnce(apiResponses[0])
                .mockResolvedValueOnce(apiResponses[1]);
        });

        it('should call the API 2 times', done => {
            getCharactersInfo().then(() => {
                expect(api.getCharactersInfo.mock.calls.length).toBe(2);
                done();
            });
        });

        it('should resolve with the full list of results', () => {
            expect(getCharactersInfo()).resolves.toEqual([...apiResponses[0].results, ...apiResponses[1].results]);
        });
    });

    describe('getPlanetsInfo', () => {
        let getPlanetsInfo;
        let apiResponses;
        beforeEach(() => {
            apiResponses = [{
                count: 30,
                results: [{id:1},{id:2},{id:3}]
            }, {
                results: [{id:4},{id:5},{id:6},{id:7}]
            }, {
                results: [{id:8},{id:9},{id:10},{id:11}]
            }];
            getPlanetsInfo = apiInfoManager.getPlanetsInfo;
            api.getPlanetsInfo
                .mockResolvedValueOnce(apiResponses[0])
                .mockResolvedValueOnce(apiResponses[1])
                .mockResolvedValueOnce(apiResponses[2]);
        });

        it('should call the API 3 times', done => {
            getPlanetsInfo().then(() => {
                expect(api.getPlanetsInfo.mock.calls.length).toBe(3);
                done();
            });
        });

        it('should resolve with the full list of results', () => {
            expect(getPlanetsInfo()).resolves.toEqual([
                ...apiResponses[0].results,
                ...apiResponses[1].results,
                ...apiResponses[2].results
            ]);
        });
    });


    describe('getFilmsInfo', () => {
        let getFilmsInfo;
        let apiResponse;
        beforeEach(() => {
            apiResponse = {
                count: 6,
                results: [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
            };
            getFilmsInfo = apiInfoManager.getFilmsInfo;
            api.getFilmsInfo.mockResolvedValue(apiResponse);
        });

        it('should call the API 1 time', done => {
            getFilmsInfo().then(() => {
                expect(api.getFilmsInfo.mock.calls.length).toBe(1);
                done();
            });
        });

        it('should resolve with the full list of results', () => {
            expect(getFilmsInfo()).resolves.toEqual(apiResponse.results);
        });
    });
});