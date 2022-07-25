import { GET_ALL_DIRECTOR } from '../../Action/Action_Type/movie'

const stateDefault = {
  directorList: []
}

const ManagerActorReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case GET_ALL_DIRECTOR: {
      state.directorList = payload
      return { ...state }
    }
    default:
      return { ...state }
  }
}
export default ManagerActorReducer
