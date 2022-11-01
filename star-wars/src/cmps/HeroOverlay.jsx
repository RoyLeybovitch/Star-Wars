import React from 'react'

export const HeroOverlay = ({ currMovie }) => {
    return (
        <div
            className='hero-overlay'
            style={{
                backgroundImage: `url('/images/${currMovie.episode_id}.jpg')`,
            }}
        >
            HeroOverlay
        </div>
    )
}
