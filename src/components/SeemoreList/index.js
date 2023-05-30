/* eslint-disable react/prop-types */
import React from 'react'
import SeemoreCard from '../SeemoreCard'

const SeemoreList = props => {
  const { movies } = props

  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        {movies.map((movie, index) => (
          <SeemoreCard key={index} movie={movie} />
        ))}
      </div>
    </>
  )
}
export default SeemoreList
