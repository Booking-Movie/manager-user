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
export const updateStatusSeatAction = paymentList => {
  return async dispatch => {
    try {
      const result = await managerNewsService.updateStatusSeat(paymentList)
      console.log("🚀 ~ file: index.js ~ line 21 ~ result", result.data.id)
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateStatusBookingAction = paymentList => {
  return async dispatch => {
    try {
      const result = await managerNewsService.updateStatusBooking(paymentList)
    } catch (error) {
      console.log(error)
    }
  }
}

