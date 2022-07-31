/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerAuthService extends baseService {
  constructor() {
    super()
  }
  signIn = formData => {
    return this.post(`api/v1/auth/signin`, formData)
  }
  signUp = formData => {
    return this.post(`api/v1/auth/signup`, formData)
  }
  findDetailUser = id => {
    return this.get(`api/v1/users/detail/${id}`)
  }
}

export const managerAuthService = new ManagerAuthService()
