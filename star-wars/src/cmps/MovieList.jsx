import { Component } from 'react'
import MoviePreview from './MoviePreview'

export function MovieList({ movies }) {
    return (
        <div className='movie-list'>
            <MoviePreview />
        </div>
    )
}
