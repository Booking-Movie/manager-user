import React, { useCallback, useState } from 'react'
import Slider from 'react-slick'
import { Button } from '../Button'
import InfoNew from '../InfoNew'
import Modal from '../Modal'
import MovieCard from '../Movie_Card'
import './index.css'

export const SimpleSlider = props => {
  const { newList } = props
  const [showEditPromotionModal, setShowEditPromotionModal] = useState(false)
  const handleShowEditPromotionModal = useCallback(() => {
    setShowEditPromotionModal(!showEditPromotionModal)
  }, [showEditPromotionModal])
  const handleCloseEditPromotionModal = useCallback(() => {
    setShowEditPromotionModal(false)
  }, [])
  return (
    <div key={newList.new_id} className="slider-movie">
      <div id="carousel" className="p-4 border-2 bg-gray-100 rounded-tl-3xl rounded-br-3xl">
        <Button
          onClick={handleShowEditPromotionModal}
          className="bg-transparent absolute w-full h-full left-0 top-0 cursor-pointer rounded-xl"
        />
        {showEditPromotionModal && (
          <Modal onCancel={handleCloseEditPromotionModal} headerText={`${newList.new_title}`}>
            <InfoNew newInfo={newList} />
          </Modal>
        )}
        <img className="w-[100%] h-48 max-h-auto" src={newList.new_image} alt="ImageNew Info" />
      </div>
    </div>
  )
}

export const MovieSlider = props => {
  const { movies } = props
  var sliderMovie = {
    className: 'slider variable-width',
    dots: true,
    speed: 500,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    pauseOnFocus: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    pauseOnDotsHover: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false
        }
      }
    ]
  }
  return (
    <Slider {...sliderMovie}>
      {movies.map((movies, index) => {
        return (
          <div className="slider-movie">
            <MovieCard key={index} movie={movies} />
          </div>
        )
      })}
    </Slider>
  )
}
