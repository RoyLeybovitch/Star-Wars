import React from 'react'

export default class MoviePreview extends React.Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        const url = 'https://swapi.dev/api/films'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    render() {
        return <div></div>
    }
}
