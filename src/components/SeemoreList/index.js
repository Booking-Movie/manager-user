/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { GET_MOVIES_COMMING_SOON } from '../../redux/Action/Action_Type/movie'
import MovieCard from '../Movie_Card'
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
