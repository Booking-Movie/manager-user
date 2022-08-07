import { managerAuthService } from '../../../service/managerAuth'
import { GET_DETAIL_USER, REMOVE_USER, SIGNIN_ERROR, SIGN_IN_ACTION } from '../Action_Type/movie'
import { createAction } from '../Type'

export const signIn = (formData, callBack) => {
  return async dispatch => {
    try {
      const result = await managerAuthService.signIn(formData)
      if (result.status === 200) {
        dispatch(createAction(SIGN_IN_ACTION, result.data))
        callBack()
      }
    } catch (error) {
      dispatch(createAction(SIGNIN_ERROR, error))
      return error
    }
  }
}
export const signOut = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_USER
    })
    return (window.location.href = '/')
  }
}

export const getDetailUser = id => {
  return async dispatch => {
    try {
      const result = await managerAuthService.findDetailUser(id)
      dispatch({
        type: GET_DETAIL_USER,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const signUp = (formData, callBack) => {
  return async dispatch => {
    try {
      const result = await managerAuthService.signUp(formData)
      if (result.status === 201) {
        callBack()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
