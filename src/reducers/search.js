import * as actionTypes from '../constants/actionsTypes';

const initState = {
  searching: false,
  text: '',
  results: [],
  error: '',
  noResults: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        searching: true,
        text: action.payload,
        results: []
      }

    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        results: action.payload,
        noResults: action.payload.length === 0 ? true :  false
      }

    case actionTypes.SEARCH_FAILURE:
      return {
        ...initState,
        error: action.payload
      }

    case actionTypes.SEARCH_CLEAR:
      return initState
  
    default:
      return state
  }
}