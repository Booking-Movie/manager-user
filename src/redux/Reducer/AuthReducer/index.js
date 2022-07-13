import { TOKEN, USER_LOGIN } from '../../../util/setting/config'
import {
  DETAIL_MOVIE,
  GET_DETAIL_USER,
  REMOVE_USER,
  SIGNIN_ERROR,
  SIGN_IN_ACTION
} from '../../Action/Action_Type/movie'

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
  userLogin: user,
  detailUser: []
}

const ManagerAuthReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case SIGN_IN_ACTION: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload))
      localStorage.setItem(TOKEN, payload.accessToken)
      state.userLogin = payload
      return { ...state }
    }
    case GET_DETAIL_USER: {
      state.detailUser = payload
      return { ...state }
    }
    case SIGNIN_ERROR: {
      return payload
    }
    case REMOVE_USER: {
      localStorage.removeItem(TOKEN)
      localStorage.removeItem(USER_LOGIN)
      return { ...state }
    }
    default:
      return { ...state }
  }
}

export default ManagerAuthReducer
