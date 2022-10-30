import axios from 'axios'
import util from '../services/util.service'
const MOVIES_KEY = 'moviesDB'
const cacheKey = 'caching'
let cache = util.loadFromStorage(cacheKey)
cache = cache ? JSON.parse(cache) : {}

export async function getMovies() {
    let movies = util.loadFromStorage(MOVIES_KEY) || []
    if (!movies.length) {
        const url = `https://swapi.dev/api/films/?format=json`
        const res = await axios.get(url)
        movies = res.data.results
        util.saveToStorage(MOVIES_KEY, movies)
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
    util.saveToStorage(cacheKey, cache)
    return cache[movieNum]
}
