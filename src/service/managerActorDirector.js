/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerActorDirectorService extends baseService {
  constructor() {
    super()
  }
  findAllDirectorByMovieId = id => {
    return this.get(`api/v1/actor/find-all-director/${id}`)
  }
}

export const managerActorDirectorService = new ManagerActorDirectorService()
