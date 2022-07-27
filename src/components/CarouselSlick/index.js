import React, { useCallback, useState } from 'react'
import Slider from 'react-slick'
import InfoNew from '../InfoNew'
import Modal from '../Modal'
import MovieCard from '../Movie_Card'

export const SimpleSlider = props => {
  const { newList } = props
  var settings = {
    dots: true,
    speed: 500,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnFocus: true,
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
  const [showEditNewModal, setShowEditNewModal] = useState(false)
  const handleShowEditNewModal = useCallback(() => {
    setShowEditNewModal(!showEditNewModal)
  }, [showEditNewModal])
  const handleCloseEditNewModal = useCallback(() => {
    setShowEditNewModal(false)
  }, [])
  return (
    <Slider {...settings}>
      {newList
        .filter(item => {
          return item.type_name === 'Recruit'
        })
        .map(listNews => {
          return (
            <div className="px-3">
              <div id="carousel" className="p-4 border-2 bg-gray-100 rounded-tl-3xl rounded-br-3xl">
                <button
                  onClick={handleShowEditNewModal}
                  className=" bg-transparent absolute w-full h-full left-0 top-0 cursor-pointer rounded-xl"
                />
                {showEditNewModal && (
                  <Modal onCancel={handleCloseEditNewModal} headerText={`${listNews.new_title}`}>
                    <InfoNew newInfo={listNews} />
                  </Modal>
                )}
                <img className="w-[100%] h-48 max-h-auto" src={listNews.new_image} alt="ImageNew Info" />
              </div>
            </div>
          )
        })}
    </Slider>
  )
}

export const MovieSlider = props => {
  console.log('🚀 ~ file: index.js ~ line 88 ~ props', props)
  const { movies } = props
  var settings = {
    dots: true,
    speed: 500,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnFocus: true,
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
    <Slider {...settings}>
      {movies.map(movies => {
        return (
          <div className="slider-movie">
            <MovieCard movie={movies} />
          </div>
        )
      })}
    </Slider>
  )
}
