/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerNewsService extends baseService {
  constructor() {
    super()
  }
  getAllNew = () => {
    return this.get(`api/v1/news`)
  }
  cancelBooking = username => {
    return this.put(`api/v1/booking/${username}`)
  }
}

export const managerNewsService = new ManagerNewsService()
