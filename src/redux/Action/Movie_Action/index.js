import { managerMovieService } from '../../../service/managerMovie'
import { TICKET } from '../../../util/setting/config'
import {
  BOOKING_FINISH,
  DETAIL_MOVIE,
  GET_ALL_BOOKING,
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_COMMING_SOON,
  GET_ALL_SEAT_IN_SHOWTIME,
  GET_ALL_SEEMORE,
  GET_DETAIL_MOVIE,
  INFO_MOVIE,
  SEARCH_RESULT
} from '../Action_Type/movie'
import { createAction } from '../Type'

export const getAllMovieAction = () => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllMovie()
      dispatch({
        type: GET_ALL_MOVIES,
        payload: result.data.payload
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getAllMovieSeemoreAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllSeemore(id)
      dispatch({
        type: GET_ALL_SEEMORE,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getDetailMovieAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getDetailMovie(id)
      dispatch({
        type: GET_DETAIL_MOVIE,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getAllSeatInShowtimeAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllSeatInShowtime(id)
      dispatch(createAction(GET_ALL_SEAT_IN_SHOWTIME, result.data))
    } catch (error) {
      console.log(error)
    }
  }
}
export const getAllMovieCommingSoonAction = () => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllMovieCommingSoon()
      dispatch({
        type: GET_ALL_MOVIES_COMMING_SOON,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllTimeOfMovieAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllTimeOfMovie(id)
      dispatch({
        type: DETAIL_MOVIE,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getInfoMovieAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getInfoMovie(id)
      dispatch({
        type: INFO_MOVIE,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const bookingTicketAction = (form, callBack) => {
  return async dispatch => {
    try {
      const result = await managerMovieService.createBooking(form)
      console.log("🚀 ~ file: index.js ~ line 113 ~ bookingTicketAction ~ result", result)
      await dispatch(getAllSeatInShowtimeAction(form.showtime_id))
      await dispatch({ type: BOOKING_FINISH })
      if (result.status === 200) {
        callBack()
      }
    } catch (error) {
      // dispatch(createAction(SIGNIN_ERROR, error))
      return error
    }
  }
}
export const getAllBookingAction = id => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getAllBooking(id)
      if (result.status === 200) {
        dispatch(createAction(GET_ALL_BOOKING, result.data))
      }
    } catch (error) {
      // dispatch(createAction(SIGNIN_ERROR, error))
      return error
    }
  }
}

export const getAllSearchResult = form => {
  return async dispatch => {
    try {
      const result = await managerMovieService.getSearchMovie(form)
      dispatch(createAction(SEARCH_RESULT, result.data))
    } catch (error) {
      console.log(error)
    }
  }
}
