/* eslint-disable react/prop-types */
import React from 'react'
import SeemoreCard from '../SeemoreCard'
import './card.css'

const SeemoreList = props => {
  const { movies } = props

  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        {movies.map(movie => (
          <SeemoreCard key={movie} movie={movie} />
        ))}
      </div>
    </>
  )
}
export default SeemoreList
