/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerPaymentService extends baseService {
  constructor() {
    super()
  }
  cancelBookingSeat = booking_seat => {
    return this.post(`api/v1/booking/cancel-booking`, booking_seat)
  }
  sendEmail = paymentList => {
    return this.post(`api/v1/send-email`, paymentList)
  }
  createPayment = payment => {
    return this.post(`api/v1/payment/create-payment`, payment)
  }
  getAllBookingByUserId = id => {
    return this.get(`api/v1/booking/get-all-booking-user-id/${id}`)
  }
}

export const managerPaymentService = new ManagerPaymentService()
