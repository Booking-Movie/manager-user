import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from '../Modal'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import './card.css'

const MovieCard = props => {
  const { id, name_movie, nation, image_movie, trailer } = props.movie
  const [showEditMovieModal, setShowEditMovieModal] = useState(false)
  const [trailerURL, setTrailerURL] = useState(trailer)
  const handleShowEditMovieModal = useCallback(() => {
    setShowEditMovieModal(!showEditMovieModal)
    if (trailerURL) {
      setTrailerURL(trailer)
    } else {
      movieTrailer(trailer)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerURL(urlParams.get('v'))
        })
        .catch(error => console.log(error))
    }
  }, [showEditMovieModal, trailer, trailerURL])
  const handleCloseEditMovieModal = useCallback(() => {
    setShowEditMovieModal(false)
  }, [])

  return (
    <>
      <div className="card card-tranform__parent">
        <div className="carousel-image"></div>
        <img src={image_movie} className="w-full h-full relative" alt="desktop" />
        <div className="card-content card-trainform">
          <div className="card-info">
            <h2>{name_movie.toUpperCase()}</h2>
            <h3 className="my-2">
              NATION: {nation}
              <i className="fas fa-dharmachakra"></i>
            </h3>
          </div>
          <div className="card-action">
            <NavLink to={`booking-page/${id}`} className="btn m-0">
              <button className="card-action_info">BOOKING TICKETS</button>
            </NavLink>
            <button onClick={handleShowEditMovieModal} className="btn m-0 w-[100%] card-action_info">
              PLAY TRAILER
            </button>
            {showEditMovieModal && (
              <Modal onCancel={handleCloseEditMovieModal} headerText={`Trailer @${name_movie}`}>
                <div className="trailer">
                  <ReactPlayer url={trailerURL} controls={true} />
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
