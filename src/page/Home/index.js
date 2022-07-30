import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import Carousel from '../../components/Carousel/CarouselMain'
import { SimpleSlider } from '../../components/CarouselSlick'
import MovieList from '../../components/MovieList'
import NewInfoList from '../../components/NewInfoList'
import { SliderNew } from '../../components/SliderNews'
import { getAllMovieAction, getAllMovieCommingSoonAction } from '../../redux/Action/Movie_Action'
import { getAllNewAction } from '../../redux/Action/New_Action'

const Home = () => {
  const dispatch = useDispatch()
  const { movieCommingList, movieShowingList } = useSelector(state => state.ManagerMovieReducer)
  const { newList } = useSelector(state => state.ManagerNewsReducer)

  useEffect(() => {
    dispatch(getAllNewAction())
    dispatch(getAllMovieAction())
    dispatch(getAllMovieCommingSoonAction())
  }, [])
  return (
    <>
      <div className="w-[100%]">
        <Carousel />
      </div>
      <div className="width">
        <h1 className="mb-6">NOW SHOWING</h1>
        <MovieList movies={movieShowingList} />
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to={`seemore/?NowShowing`.replace(/ /g, ``)}>
            <button className="btn-secondary">See All Now Showing</button>
          </NavLink>
        </div>
      </div>
      <div className="width">
        <h1 className="mb-6">COMMING SOON</h1>
        <MovieList movies={movieCommingList} />
        <div className="text-center  font-semibold text-lg hover:">
          <NavLink exact to={`seemore/?CommingSoon`.replace(/ /g, ``)}>
            <button className="btn-secondary">See All Now Showing</button>
          </NavLink>
        </div>
      </div>
      <div className="width">
        <h1 className="text-left mb-6">BLOG FILM</h1>
        <div className="grid grid-cols-12 gap-4 ">
          {newList
            .filter(item => {
              return item.type_name === 'Movie'
            })
            .map(listNews => {
              return <NewInfoList newItem={listNews} />
            })}
        </div>
        <div className="text-center mt-4 font-semibold text-lg">
          <NavLink exact to="news">
            <button className="btn-secondary">See All News</button>
          </NavLink>
        </div>
      </div>
      <div className="width">
        <h1 className="text-left mb-6">PROMOTION</h1>
        <SliderNew data={newList} type={'Recruit'} />
      </div>
    </>
  )
}

export default memo(Home)
