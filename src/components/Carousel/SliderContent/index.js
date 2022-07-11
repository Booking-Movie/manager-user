import React from 'react'

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <div>
      {imageSlider.map((slider, index) => (
        <div key={index} className={index === activeIndex ? 'h-[80vh] w-full relative inline-block' : 'hidden'}>
          <img className="w-full  h-full relative object-cover" src={slider.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default SliderContent
