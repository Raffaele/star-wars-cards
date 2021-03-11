import api from '../api/api';

function getCharactersInfo() {
    return getFullInfo(api.getCharactersInfo);
}

function getPlanetsInfo() {
    return getFullInfo(api.getPlanetsInfo);
}

function getFilmsInfo() {
    return getFullInfo(api.getFilmsInfo);
}

function getFullInfo(apiFn) {
    return apiFn().then(originalResponse => {
        const { results: firstResults, count } = originalResponse;
        const lastPage = Math.ceil(count/10);
        const pagesForApi = Array.from({length: lastPage}).map((_,i) => i+1).slice(1);

        return Promise.all(pagesForApi.map(page => apiFn({page})))
            .then(promises => promises.map(p=>p.results))
            .then(responseGroup => [firstResults, ...responseGroup].flat());
    })
}

export default {
    getCharactersInfo,
    getPlanetsInfo,
    getFilmsInfo
};
