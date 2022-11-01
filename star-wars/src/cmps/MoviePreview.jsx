import React from 'react'
export const MoviePreview = ({
    movie,
    updateCurrMovie,
    updateFavMovie,
    favMovie,
}) => {
    return (
        <div
            className='movie-preview'
            onClick={() => {
                updateCurrMovie(movie)
            }}
            style={{
                backgroundImage: `url('./images/${movie.episode_id}.jpg')`,
            }}
        >
            {' '}
            <div className='movie-info'>
                <h3> {movie.title}</h3>
                <article
                    onClick={(ev) => {
                        updateFavMovie(ev, movie)
                    }}
                >
                    <span
                        className={
                            favMovie?.episode_id !== movie.episode_id &&
                            'low-opacity'
                        }
                    >
                        {favMovie?.episode_id === movie.episode_id
                            ? '❤️'
                            : '🤍'}
                    </span>
                </article>
            </div>
        </div>
    )
}
