/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { GET_MOVIES_COMMING_SOON } from '../../redux/Action/Action_Type/movie'
import MovieCard from '../Movie_Card'
import './card.css'

const MovieList = props => {
  const { movies } = props
  // const renderSeeMore = () => {
  //   return (
  //     <div>
  //       {movies.map(movie => {
  //         <div className="text-center mt-4 font-semibold text-lg hover:">
  //           <NavLink exact to={`seemore/?${movie?.status_movie}`.replace(/ /g, ``)}>
  //             <button className="btn-secondary">
  //               See All {movie?.status_movie === 'NowShowing' ? 'Now Showing' : 'Comming Soon'}
  //             </button>
  //           </NavLink>
  //         </div>
  //       })}
  //     </div>
  //   )
  // }
  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        {movies.slice(0, 4).map(movie => {
          return (
            <>
              <MovieCard key={movie.id} movie={movie} />
            </>
          )
        })}
        {/* <div>{renderSeeMore()}</div> */}
      </div>
    </>
  )
}
export default MovieList
