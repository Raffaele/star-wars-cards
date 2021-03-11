import React from 'react';
// import hooksService from '../hooksService';
import apiInfoManager from '../../engine/apiInfoManager/apiInfoManager';

export function usePeopleInfo() {
    // const {useEffect, useState} = hooksService.getReactHooks();
    const {useEffect, useState} = React;
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        Promise.all([
            apiInfoManager.getCharactersInfo(),
            apiInfoManager.getPlanetsInfo(),
            apiInfoManager.getFilmsInfo()
        ]).then(([characters, planets, films]) => {
            return characters.map(character => ({
                ...character,
                originPlanetInfo: planets.find(planet => planet.url === character.homeworld),
                filmsInfo: character.films.map(filmUrl => films.find(film => film.url === filmUrl))
            }));
        }).then(setPeople);
    }, []);

    return people;
}