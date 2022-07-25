/* eslint-disable no-useless-constructor */
import { baseService } from './baseService'

export class ManagerMovieService extends baseService {
  constructor() {
    super()
  }
  getAllMovie = () => {
    return this.get(`api/v1/movie/find-all-movie`)
  }
  getAllTimeOfMovie = id => {
    return this.get(`api/v1/showtime/time-of-movie/${id}`)
  }
  getAllSeatInShowtime = id => {
    return this.get(`api/v1/showtime/${id}`)
  }
  getDetailMovie = id => {
    return this.get(`api/v1/movie/movie-detail/${id}`)
  }
  getInfoMovie = id => {
    return this.get(`api/v1/movie/info-movie/${id}`)
  }
  createBooking = form => {
    return this.post(`api/v1/booking`, form)
  }
  getAllBooking = id => {
    return this.get(`api/v1/booking/${id}`)
  }
  getAllSeemore = id => {
    return this.get(`api/v1/movie/${id}`)
  }
  getSearchMovie = term => {
    return this.get(`api/v1/search/${term}`)
  }
}

export const managerMovieService = new ManagerMovieService()
