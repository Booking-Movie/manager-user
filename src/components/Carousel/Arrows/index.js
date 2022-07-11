/* eslint-disable react/prop-types */
import React from 'react'
import * as Icon from 'react-feather'
export const Arrows = ({ preSlide, nextSlide }) => {
  return (
    <div className="flex items-center justify-center sm:hidden">
      <Icon.ChevronLeft
        size={100}
        className="font-semibold cursor-pointer z-50 absolute top-[50%] left-[32px] w-auto mt-[-48px] text-white  hover:text-white transition-all"
        onClick={preSlide}
      />
      <Icon.ChevronRight
        size={100}
        className="font-semibold cursor-pointer z-50 absolute top-[50%] right-[32px] w-auto mt-[-48px] text-white hover:text-white transition-all"
        onClick={nextSlide}
      />
    </div>
  )
}
