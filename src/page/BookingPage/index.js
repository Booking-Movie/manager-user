import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailMovie from '../../components/DetailMovie'
import ShowTime from '../../components/ShowTime'
import { SliderNew } from '../../components/SliderNews'
import { getAllTimeOfMovieAction, getDetailMovieAction } from '../../redux/Action/Movie_Action'
import { getAllNewAction } from '../../redux/Action/New_Action'

const BookingPage = props => {
  const dispatch = useDispatch()
  const { detailMovie, listTimeOfMovie } = useSelector(state => state.ManagerMovieReducer)
  const { newList } = useSelector(state => state.ManagerNewsReducer)
  const { id } = props.match.params
  useEffect(() => {
    dispatch(getDetailMovieAction(id))
    dispatch(getAllTimeOfMovieAction(id))
    dispatch(getAllNewAction())
  }, [dispatch, id])
  return (
    <div className="width mt-6">
      {detailMovie[0]?.map(movie => {
        return <DetailMovie movie={movie} />
      })}
      <ShowTime detailMovie={listTimeOfMovie} id={id} />
      <h1 className="px-3 text-3xl font-semibold my-6">PROMOTION</h1>
      <div>
        <SliderNew data={newList} type={'Recruit'} />
      </div>
    </div>
  )
}

export default memo(BookingPage)
