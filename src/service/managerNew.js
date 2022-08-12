/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerNewsService extends baseService {
  constructor() {
    super()
  }
  getAllNew = () => {
    return this.get(`api/v1/news`)
  }
  updateStatusSeat = paymentList => {
    return this.put(`api/v1/booking/update-status-seat`, paymentList)
  }
  updateStatusBooking = paymentList => {
    return this.put(`api/v1/payment`, paymentList)
  }
}

export const managerNewsService = new ManagerNewsService()
