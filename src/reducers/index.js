import { createStore, compose, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import notes from './notes'

export const getComposeEnhancers = (NODE_ENV) => (NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const composeEnhancers = getComposeEnhancers(process.env.NODE_ENV)

const allReducers = combineReducers({
  notes,
  form: formReducer
})

const configStore = () => createStore(
  allReducers,
  composeEnhancers()
)

export default configStore