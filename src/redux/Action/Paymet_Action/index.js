/* eslint-disable prettier/prettier */
import { managerPaymentService } from '../../../service/managerPayment'
import { GET_ALL_BOOKING_BY_USER_ID } from '../Action_Type/movie'
import { createAction } from '../Type'

export const cancelSeatBookingAction = booking_seat => {
  return async dispatch => {
    try {
      await managerPaymentService.cancelBookingSeat(booking_seat)
    } catch (error) {
      console.log(error)
    }
  }
}
export const sendEmailAction = paymentList => {
  return async dispatch => {
    try {
      await managerPaymentService.sendEmail(paymentList)
    } catch (error) {
      console.log(error)
    }
  }
}

export const createPaymentAction = payment => {
  return async dispatch => {
    try {
      await managerPaymentService.createPayment(payment)
    } catch (error) {
      console.log(error)
    }
  }
}


export const getAllBookingByUserIdAction = (id) => {
  return async dispatch => {
    try {
      const result = await managerPaymentService.getAllBookingByUserId(id)
      if (result.status === 200) {
        dispatch(createAction(GET_ALL_BOOKING_BY_USER_ID, result.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
}