/* eslint-disable react/prop-types */
import React from 'react'

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="w-[100%] absolute flex top-[90%] justify-center z-10">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index
              ? 'hover:bg-[rgba(255,255,255,0.5)]'
              : 'cursor-pointer h-5 w-5 mx-[3px] my-0 bg-slate-700 rounded-full hover:bg-[rgba(255,255,255,0.5)]'
          }`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots
