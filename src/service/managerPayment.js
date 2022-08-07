/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerPaymentService extends baseService {
  constructor() {
    super()
  }
  cancelBookingSeat = booking_seat => {
    return this.put(`api/v1/payment/cancel-booking`, booking_seat)
  }
}

export const managerPaymentService = new ManagerPaymentService()
