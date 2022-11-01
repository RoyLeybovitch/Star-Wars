import React from 'react'

export const MovieDetails = ({ currMovie }) => {
    if (!currMovie)
        return (
            <section className='no-chosen-movie'>Select a movie please</section>
        )
    return (
        <article className='movie-details'>
            <h1>{currMovie.title}</h1>
            <span>
                {currMovie.release_date.slice(0, 4)} • {currMovie.director}
            </span>
            <p className='movie-description'>
                {' '}
                Abstract: {currMovie.opening_crawl}
            </p>
        </article>
    )
}
