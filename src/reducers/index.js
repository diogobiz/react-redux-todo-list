import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import notes from './notes';
import snackbar from './snackbar';

export const getComposeEnhancers = (NODE_ENV) => (NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const composeEnhancers = getComposeEnhancers(process.env.NODE_ENV)

const allReducers = combineReducers({
  notes,
  snackbar,
  form: formReducer
})

const configStore = () => createStore(
  allReducers,
  composeEnhancers(),
  applyMiddleware(thunk)
)

export default configStore