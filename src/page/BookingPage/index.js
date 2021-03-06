import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieSlider, SimpleSlider } from '../../components/CarouselSlick'
import DetailMovie from '../../components/DetailMovie'
import ShowTime from '../../components/ShowTime'
import {
  getAllMovieAction,
  getAllMovieCommingSoonAction,
  getDetailMovieAction,
  getMovieDetailAction
} from '../../redux/Action/Movie_Action'
import { getAllNewAction } from '../../redux/Action/New_Action'
import ManagerMovieReducer from '../../redux/Reducer/Movie_Reducer/index'

const BookingPage = props => {
  const dispatch = useDispatch()
  const { moviesList, detailMovie, movieDetail } = useSelector(state => state.ManagerMovieReducer)
  const { newList } = useSelector(state => state.ManagerNewsReducer)

  const { id } = props.match.params
  useEffect(() => {}, [dispatch, id])
  useEffect(() => {
    dispatch(getDetailMovieAction(id))
    dispatch(getMovieDetailAction(id))
    dispatch(getAllNewAction())
  }, [dispatch, id])
  return (
    <div className="width mt-14">
      <div className="mx-5 ">
        {movieDetail[0]?.map(movie => {
          return <DetailMovie movie={movie} />
        })}
        <ShowTime detailMovie={detailMovie} id={id} />
        <div className="width">
          <h1 className="px-3 text-3xl font-semibold my-6">PROMOTION</h1>
          <div>
            <SimpleSlider newList={newList} />
          </div>
        </div>
        {/* <div>
          <h1 className='px-3 sm:text-left text-3xl font-semibold sm:my-6 md:my-6 my-4'>NOW SHOWING</h1>
          <MovieSlider movies={moviesList} />
        </div> */}
      </div>
    </div>
  )
}

export default memo(BookingPage)
