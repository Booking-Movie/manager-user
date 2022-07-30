import Slider from 'react-slick'
import { SimpleSlider } from '../CarouselSlick'

export const SliderNew = ({ data, type }) => {
  var sliderPromotion = {
    dots: true,
    speed: 500,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnFocus: true,
    initialSlide: 0,
    adaptiveHeight: true,
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Slider {...sliderPromotion}>
      {data
        .filter(item => {
          return item.type_name === `${type}`
        })
        .map(list => {
          return <SimpleSlider newList={list} />
        })}
    </Slider>
  )
}
