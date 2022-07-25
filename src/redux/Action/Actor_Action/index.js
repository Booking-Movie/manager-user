import { managerActorDirectorService } from '../../../service/managerActorDirector'
import { GET_ALL_DIRECTOR } from '../Action_Type/movie'
import { createAction } from '../Type'

export const getAllDirectorByMovieIdAction = id => {
  return async dispatch => {
    try {
      const result = await managerActorDirectorService.findAllDirectorByMovieId(id)
      if (result.status === 200) {
        dispatch(createAction(GET_ALL_DIRECTOR, result.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
