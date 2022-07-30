import moment from 'moment'
import { Fragment, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDirectorByMovieIdAction } from '../../redux/Action/Actor_Action'
import MovieEvaluate from '../MovieDetailCard'

const DetailMovie = props => {
  const dispatch = useDispatch()
  const { movie } = props
  const { directorList } = useSelector(state => state.ManagerActorReducer)

  useEffect(() => {
    dispatch(getAllDirectorByMovieIdAction(movie.movie_id))
  }, [dispatch, movie.movie_id])
  return (
    <>
      <div className="detail">
        <div className="detail-container">
          <img src={movie.image_movie} className="detail-container_image" alt="desktop" />
          <div className="detail-content">
            <h1>{movie.name_movie?.toUpperCase()}</h1>
            <div className="detail-content_info">
              <h3>Release date:</h3>
              <p>{moment(movie?.comming_data).format('MMM Do YY')}</p>
            </div>
            <div className="detail-content_info ">
              <h3>Nation:</h3>
              <p>{movie.nation}</p>
            </div>
            <div className="detail-content_info flex-wrap">
              <h3>Actor:</h3>
              {movie.actor?.map((actor, index) => {
                return (
                  <Fragment key={index}>
                    <p>{(index ? ', ' : '') + actor.name_actor}</p>
                  </Fragment>
                )
              })}
            </div>
            <div className="detail-content_info flex-wrap">
              <h3>Director:</h3>
              {directorList.map((director, index) => {
                return (
                  <Fragment key={index}>
                    <p>{(index ? ', ' : '') + director.name_director}</p>
                  </Fragment>
                )
              })}
            </div>
            <div className="detail-content_info">
              <h3>Time Show:</h3>
              <p>{movie.time_show}</p>
            </div>
            <div className="detail-content_info">
              <h3>Evaluate:</h3>
              <p>
                <MovieEvaluate evaluate={movie} />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <h3>Description</h3>
          <p>{movie.des_movie}</p>
        </div>
      </div>
    </>
  )
}

export default memo(DetailMovie)
