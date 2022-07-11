import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from '../../components/MovieList'
import SeemoreList from '../../components/SeemoreList'
import { getAllMovieSeemoreAction } from '../../redux/Action/Movie_Action'

const SeeMore = props => {
  const id = props.location.search.slice(1)
  const { seeMore } = useSelector(state => state.ManagerMovieReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMovieSeemoreAction(id))
  }, [])
  return (
    <div className="px-20 md:px-10 sm:px-5 mt-20 flex flex-col gap-6">
      <h1 className="font-semibold text-heading-4">{id === 'NowShowing' ? 'NOW SHOWING' : 'COMMING SOON'}</h1>
      <SeemoreList movies={seeMore} />
    </div>
  )
}

export default SeeMore
