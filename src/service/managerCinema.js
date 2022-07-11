/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerCinemaService extends baseService {
  constructor() {
    super()
  }
  findAllCinema = () => {
    return this.get(`api/v1/cinema/find-all-cinema`)
  }
  filterDate = id => {
    return this.get(`api/v1/search/filter/${id}`)
  }
}

export const managerAuthService = new ManagerCinemaService()
