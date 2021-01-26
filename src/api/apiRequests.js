import axios from "axios";

export const getEpisodesForPage = (page) => {
    const url = '/api/episode'
    return axios.get("https://rickandmortyapi.com" + url + "?page=" + page)
}

export const getEpisodes = (id) => {
    const url = '/api/episode'
    return axios.get("https://rickandmortyapi.com" + url + "/" + id)
}

export const getCharacters = (id) => {
    const url = '/api/character'
    return axios.get("https://rickandmortyapi.com" + url + "/" + id)
}