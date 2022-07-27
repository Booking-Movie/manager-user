import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import ManagerMovieReducer from './Reducer/Movie_Reducer/index'
import ManagerAuthReducer from './Reducer/AuthReducer/index'
import ManagerNewsReducer from './Reducer/New_Reducer/index'
import ManagerActorReducer from './Reducer/ActorReducer/index'
import ManagerFaqReducer from './Reducer/FaqReducer'

const rootReducer = combineReducers({
  ManagerMovieReducer,
  ManagerAuthReducer,
  ManagerNewsReducer,
  ManagerActorReducer,
  ManagerFaqReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
