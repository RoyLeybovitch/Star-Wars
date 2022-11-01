import axios from 'axios'
import util from '../services/util.service'
const MOVIES_KEY = 'moviesDB'
const FAV_MOVIE_KEY = 'favoriteMovie'
var gMovies = []
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
    gMovies = movies
    return movies
}

export function getFavMovie() {
    return util.loadFromStorage(FAV_MOVIE_KEY) || null
}
export function saveFavMovie(movie) {
    util.saveToStorage(FAV_MOVIE_KEY, movie)
}
