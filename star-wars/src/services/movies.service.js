import axios from 'axios'

const MOVIES_KEY = 'moviesDB'
const cacheKey = 'caching'
let cache = localStorage.getItem(cacheKey)
cache = cache ? JSON.parse(cache) : {}

export async function getMovies() {
    let movies = localStorage.getItem(MOVIES_KEY) || []
    if (!movies.length) {
        const url = `https://swapi.dev/api/films/?format=json`
        const res = await axios.get(url)
        movies = res.data.results
        localStorage.setItem(MOVIES_KEY, JSON.stringify(movies))
    }
    return movies
}

export async function getMovie(movieNum) {
    if (cache[movieNum]) {
        return cache[movieNum]
    }
    const url = `https://swapi.dev/api/films/${movieNum}?format=json`
    const res = await axios.get(url)
    cache[movieNum] = res.data
    localStorage.setItem(cacheKey, JSON.stringify(cache))
    return cache[movieNum]
}
