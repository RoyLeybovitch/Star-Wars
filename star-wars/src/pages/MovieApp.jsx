import React, { useEffect, useState } from 'react'
import { HeroOverlay } from '../cmps/HeroOverlay'
import { MovieList } from '../cmps/MovieList'
import {
    getFavMovie,
    getMovies,
    saveFavMovie,
} from '../services/movies.service'
import { MovieDetails } from './MovieDetails'

export const MovieApp = () => {
    const [movies, setMovies] = useState(null)
    const [currMovie, setCurrMovie] = useState(null)
    const [favMovie, setFavMovie] = useState(null)
    useEffect(() => {
        async function query() {
            const res = await getMovies()
            const favMovie = await getFavMovie()
            if (favMovie) {
                setFavMovie(favMovie)
                setCurrMovie(favMovie)
            }
            setMovies(res)
        }
        query()
        return () => {}
    }, [])

    const updateCurrMovie = (movie) => {
        setCurrMovie(movie)
    }
    const updateFavMovie = (ev, movie) => {
        ev.stopPropagation()
        saveFavMovie(movie)
        setFavMovie(movie)
    }
    return (
        <div className='movie-app-container'>
            <MovieList
                updateCurrMovie={updateCurrMovie}
                movies={movies}
                updateFavMovie={updateFavMovie}
                favMovie={favMovie}
            />
            <MovieDetails currMovie={currMovie} />
            {currMovie && <HeroOverlay currMovie={currMovie} />}
        </div>
    )
}
