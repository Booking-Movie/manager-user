/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerNewsService extends baseService {
  constructor() {
    super()
  }
  getAllNew = () => {
    return this.get(`api/v1/news`)
  }
}

export const managerNewsService = new ManagerNewsService()
