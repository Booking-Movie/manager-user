import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from '../Modal'
import Trailer from '../Trailer'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import './card.css'

const SeemoreCard = props => {
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
  }, [showEditMovieModal, trailerURL, trailer])
  const handleCloseEditMovieModal = useCallback(() => {
    setShowEditMovieModal(false)
  }, [])

  return (
    <>
      <div className="gap-y-5 h-[240px] sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden relative justify-end cursor-pointer capitalize rounded-md bg-red-500 object-cover text-white  mb-5 card-tranform__parent">
        <div className="carousel-image"></div>
        <img src={image_movie} className="w-full h-full relative" alt="desktop" />
        <div className="absolute p-2 gap-y-5 flex h-[80%] sm:h-[85%] card-trainform w-full top-[200px]">
          <div className="absolute w-[85%] left-0 bottom-[60px] p-2">
            <h1 className="text-xl font-semibold">{name_movie.toUpperCase()}</h1>
            <h3 className="text-sm font-medium my-2">
              NATION: {nation}
              <i className="fas fa-dharmachakra"></i>
            </h3>
          </div>
          <div className="absolute bottom-0 w-full flex p-[10px] gap-x-3 left-0">
            <NavLink to={`/booking-page/${id}`} className="btn m-0">
              <button className="w-[100%]  px-2 py-3 text-xs text-black font-semibold bg-[#FFFFFF] rounded-xl ">
                BOOKING TICKETS
              </button>
            </NavLink>
            <button
              onClick={handleShowEditMovieModal}
              className="btn m-0 w-[100%]  px-2 py-3  text-xs text-black font-semibold bg-[#FFFFFF] rounded-xl"
            >
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

export default SeemoreCard
