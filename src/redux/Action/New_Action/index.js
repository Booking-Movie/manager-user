import { managerNewsService } from '../../../service/managerNew'
import { GET_ALL_NEW } from '../Action_Type/movie'
import { createAction } from '../Type'

export const getAllNewAction = () => {
  return async dispatch => {
    try {
      const result = await managerNewsService.getAllNew()
      if (result.status === 200) {
        dispatch(createAction(GET_ALL_NEW, result.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const cancelSeatBookingAction = username => {
  return async dispatch => {
    try {
      await managerNewsService.cancelBooking(username)
    } catch (error) {
      console.log(error)
    }
  }
}
