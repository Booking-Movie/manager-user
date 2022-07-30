import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <div className="width margin-top">
      <h1 className="mb-6">{id === 'NowShowing' ? 'NOW SHOWING' : 'COMMING SOON'}</h1>
      <SeemoreList movies={seeMore} />
    </div>
  )
}

export default SeeMore
