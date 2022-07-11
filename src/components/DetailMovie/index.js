import moment from 'moment'
import { memo } from 'react'
import * as Icon from 'react-feather'
import MovieEvaluate from '../MovieDetailCard'

const DetailMovie = props => {
  const { movie } = props
  console.log('🚀 ~ file: index.js ~ line 7 ~ movie', movie)
  return (
    <>
      <div className="flex flex-col gap-4 item">
        <div className="flex flex-row sm:flex-col gap-x-8 ">
          <img src={movie.image_movie} className="h-96 w-80 sm:w-full sm:mb-3 text-center rounded-lg" alt="desktop" />
          <div className="flex flex-col gap-4 items-start text-lg">
            <h1 className="font-semibold text-4xl">{movie.name_movie}</h1>
            <div className="flex flex-row gap-x-2 ">
              <h2 className="font-semibold ">Release date:</h2>
              <p>{moment(movie.comming_data).format('MMM Do YY')}</p>
            </div>
            <div className="flex flex-row gap-x-2 ">
              <h2 className="font-semibold ">Nation:</h2>
              <p>{movie.nation}</p>
            </div>
            <div className="flex flex-row gap-x-2 flex-wrap">
              <h2 className="font-semibold ">Actor:</h2>
              {movie.actor?.map(actor => {
                return <p>{actor.name_actor},</p>
              })}
            </div>
            <div className="flex flex-row gap-x-2 flex-wrap">
              <h2 className="font-semibold ">Director:</h2>
              {movie.director?.map(director => {
                return <p>{director.name_director},</p>
              })}
            </div>
            <div className="flex flex-row gap-x-2 ">
              <h2 className="font-semibold ">Time Show:</h2>
              <p>{movie.time_show}</p>
            </div>
            <div className="flex flex-row gap-x-2 items-center justify-center ">
              <h2 className="font-semibold ">Evaluate:</h2>
              <p>
                <MovieEvaluate evaluate={movie} />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-semibold">Description</h2>
          <p>{movie.des_movie}</p>
        </div>
      </div>
    </>
  )
}

export default memo(DetailMovie)
