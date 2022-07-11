import { TICKET } from '../../../util/setting/config'
import {
  BOOKING_FINISH,
  DAT_VE,
  DETAIL_MOVIE,
  GET_ALL_BOOKING,
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_COMMING_SOON,
  GET_ALL_SEAT_IN_SHOWTIME,
  GET_ALL_SEEMORE,
  GET_ALL_TIME_OF_MOVIE,
  GET_DETAIL_MOVIE,
  GET_MOVIES_COMMING_SOON,
  GET_MOVIES_NOW_COMMING,
  INFO_MOVIE,
  LIST_BOOKING,
  SEARCH_RESULT
} from '../../Action/Action_Type/movie'
import { createAction } from '../../Action/Type'

const stateDefault = {
  moviesList: [],
  sapChieu: 'Comming Soon',
  dangChieu: 'Now Showing',
  moviesDefault: [],
  detailMovie: {},
  seatList: [],
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  commingSoonList: [],
  movieDetail: {},
  infoMovie: [],
  listBooking: [],
  listAllBooking: [],
  seeMore: [],
  searchResult: []
}
const ManagerMovieReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES: {
      state.moviesList = payload
      return { ...state }
    }
    case GET_MOVIES_NOW_COMMING: {
      state.dangChieu = !state.dangChieu
      state.moviesList = state.moviesDefault.filter(film => film.dangChieu === state.dangChieu)
      return { ...state }
    }
    case GET_DETAIL_MOVIE: {
      state.detailMovie = payload
      return { ...state }
    }
    case GET_ALL_SEAT_IN_SHOWTIME: {
      state.seatList = payload
      return { ...state }
    }
    case GET_ALL_MOVIES_COMMING_SOON: {
      state.commingSoonList = payload
      return { ...state }
    }
    case INFO_MOVIE: {
      state.infoMovie = payload
      return { ...state }
    }
    case DETAIL_MOVIE: {
      state.movieDetail = payload
      return { ...state }
    }
    case DAT_VE: {
      let danhSachGheCapNhap = [...state.danhSachGheDangDat]
      let index = danhSachGheCapNhap.findIndex(gheDD => gheDD.id === payload.id)
      if (index !== -1) {
        danhSachGheCapNhap.splice(index, 1)
      } else {
        danhSachGheCapNhap.push(payload)
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhap }
    }
    case LIST_BOOKING: {
      state.listBooking = payload
      return { ...state }
    }
    case BOOKING_FINISH: {
      state.danhSachGheDangDat = []
      return { ...state }
    }
    case GET_ALL_BOOKING: {
      state.listAllBooking = payload
      return { ...state }
    }
    case GET_ALL_SEEMORE: {
      state.seeMore = payload
      return { ...state }
    }
    case SEARCH_RESULT: {
      state.searchResult = payload
      return { ...state }
    }
    default:
      return { ...state }
  }
}

export default ManagerMovieReducer
