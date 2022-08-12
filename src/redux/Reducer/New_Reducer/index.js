import { GET_ALL_BOOKING_BY_USER_ID, GET_ALL_NEW } from '../../Action/Action_Type/movie'

const stateDefault = {
  newList: [],
  bookingByUserId: []
}

const ManagerNewsReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case GET_ALL_NEW: {
      state.newList = payload
      return { ...state }
    }
    case GET_ALL_BOOKING_BY_USER_ID: {
      state.bookingByUserId = payload
      return { ...state }
    }
    default:
      return { ...state }
  }
}
export default ManagerNewsReducer
