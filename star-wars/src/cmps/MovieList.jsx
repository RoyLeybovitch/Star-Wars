import { Component } from 'react'
import { MoviePreview } from './MoviePreview'

export function MovieList({
    movies,
    updateCurrMovie,
    updateFavMovie,
    favMovie,
}) {
    return (
        <div className='movie-list'>
            {movies?.length &&
                movies.map((movie) => (
                    <MoviePreview
                        favMovie={favMovie}
                        updateFavMovie={updateFavMovie}
                        updateCurrMovie={updateCurrMovie}
                        key={movie['episode_id']}
                        movie={movie}
                    />
                ))}
        </div>
    )
}
