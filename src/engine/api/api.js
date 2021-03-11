const SERVER_URL = 'https://swapi.dev/api';

function getCharactersInfo({page = 1} = {}) {
    return getInfo('people',  page);
}

function getPlanetsInfo({page = 1} = {}) {
    return getInfo('planets',  page);
}

function getFilmsInfo({page = 1} = {}) {
    return getInfo('films',  page);
}

function getInfo(infoType, page) {
    return fetch(`${SERVER_URL}/${infoType}/?page=${page}`)
        .then(r => r.json());
}

export default {
    getCharactersInfo,
    getPlanetsInfo,
    getFilmsInfo
};
