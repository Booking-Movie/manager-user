import React, { useEffect, useState } from 'react'
import { Arrows } from '../Arrows'
import Dots from '../Dots'
import SliderContent from '../SliderContent'
const CarouselData = [
  {
    image:
      'https://images.unsplash.com/photo-1647301123214-acda7e99b9e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1646911292667-6ba3a722deac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1646911339408-2af2aaf6eb20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1646911324317-04e8425da6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]
const length = CarouselData.length - 1

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setActiveIndex(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
    }, 900000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="w-full mx-auto slider-container h-[80vh] relative m-auto overflow-hidden mb-20 sm:mb-10">
      <SliderContent activeIndex={activeIndex} imageSlider={CarouselData} />
      <Arrows
        preSlide={() => setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)}
      />
      <Dots activeIndex={activeIndex} imageSlider={CarouselData} onClick={activeIndex => setActiveIndex(activeIndex)} />
    </div>
  )
}
export default Carousel
