import React, { useEffect, useState } from 'react'
import { MovieList } from '../cmps/MovieList'
import { getMovies } from '../services/movies.service'
import { MovieDetails } from './MovieDetails'

export const MovieApp = () => {
    const [movies, setMovies] = useState(null)
    const [currMovie, setCurrMovie] = useState(null)
    useEffect(() => {
        async function query() {
            const res = await getMovies()
            setMovies(res)
        }
        query()
        return () => {}
    }, [])

    const updateCurrMovie = (movie) => {
        setCurrMovie(movie)
    }
    return (
        <div>
            <MovieList updateCurrMovie={updateCurrMovie} movies={movies} />
            <MovieDetails currMovie={currMovie} />
        </div>
    )
}
