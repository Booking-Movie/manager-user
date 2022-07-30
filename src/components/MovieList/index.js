/* eslint-disable react/prop-types */
import React from 'react'
import MovieCard from '../Movie_Card'
import './card.css'

const MovieList = props => {
  const { movies } = props
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-6">
        {movies.slice(0, 4).map(movie => {
          return (
            <>
              <MovieCard key={movie.id} movie={movie} />
            </>
          )
        })}
      </div>
    </>
  )
}
export default MovieList
