import { managerPaymentService } from '../../../service/managerPayment'

export const cancelSeatBookingAction = booking_seat => {
  return async dispatch => {
    try {
      await managerPaymentService.cancelBookingSeat(booking_seat)
    } catch (error) {
      console.log(error)
    }
  }
}
