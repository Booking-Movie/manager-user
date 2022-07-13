import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Carousel from '../../components/Carousel/CarouselMain'
import { SimpleSlider } from '../../components/CarouselSlick'
import MovieList from '../../components/MovieList'
import NewInfoList from '../../components/NewInfoList'
import { getAllMovieAction, getAllMovieCommingSoonAction } from '../../redux/Action/Movie_Action'
import { getAllNewAction } from '../../redux/Action/New_Action'

const Home = () => {
  const dispatch = useDispatch()
  const { moviesList, commingSoonList } = useSelector(state => state.ManagerMovieReducer)
  const { newList } = useSelector(state => state.ManagerNewsReducer)

  console.log('🚀 ~ file: index.js ~ line 15 ~ Home ~ newList', newList)
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
      <div className="px-20 md:px-10 sm:px-5">
        <h1 className="font-semibold text-heading-4">NOW SHOWING</h1>
        <MovieList movies={moviesList} />
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to={`seemore/?NowShowing`.replace(/ /g, ``)}>
            <button className="btn-secondary">See All Now Showing</button>
          </NavLink>
        </div>
      </div>
      <div className="px-20 md:px-10 sm:px-5 mt-20">
        <h1 className="font-semibold text-heading-4">COMMING SOON</h1>
        <MovieList movies={commingSoonList} />
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to={`seemore/?CommingSoon`.replace(/ /g, ``)}>
            <button className="btn-secondary">See All Now Showing</button>
          </NavLink>
        </div>
      </div>
      <div className=" px-10 sm:px-5 mt-20">
        <div className="flex flex-row sm:flex-col md:flex-col items-center sm:items-start md:items-start">
          <h1 className="rotate-90 sm:rotate-0 md:rotate-0 sm:text-left text-3xl font-semibold">BLOG FILM</h1>
          <div className="grid grid-cols-12 gap-4 width">
            {newList
              .filter(item => {
                return item.type_name === 'Movie'
              })
              .map(listNews => {
                return <NewInfoList newItem={listNews} />
              })}
          </div>
        </div>
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to="news">
            <button className="btn-secondary">See All News</button>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row sm:flex-col md:flex-col px-10 md:px-10 sm:px-5 mt-20">
        <h1 className="relative bottom-0 rotate-90 sm:rotate-0 md:rotate-0 sm:text-left text-3xl font-semibold sm:my-6 md:my-6">
          PROMOTION
        </h1>
        <div className="width ">
          <SimpleSlider newList={newList} />
        </div>
      </div>
    </>
  )
}

export default Home
