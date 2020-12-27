import axios from "axios";

export const getEpisodesForPage = (page) => {
    const url = '/api/episode'
    return axios.get(url + "?page=" + page)
}

export const getEpisodes = (id) => {
    const url = '/api/episode'
    return axios.get(url + "/" + id)
}

export const getCharacters = (id) => {
    const url = '/api/character'
    return axios.get(url + "/" + id)
}