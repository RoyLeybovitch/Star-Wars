import React from 'react'

export const MoviePreview = ({ movie, updateCurrMovie }) => {
    return (
        <div
            onClick={() => {
                updateCurrMovie(movie)
            }}
        >
            {movie.title}
        </div>
    )
}
