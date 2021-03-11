function getInfo({page = 1} = {}) {
    return fetch(`https://swapi.dev/api/people/?format=json&page=${page}`);
}

export default {
    getInfo
};
