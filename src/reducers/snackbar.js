import * as actionTypes from '../constants/actionsTypes';

const initState = {
  open: false,
  message: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SNACKBAR:
      return {
        open: true,
        message: action.message
      }

    case actionTypes.HIDE_SNACKBAR:
      return initState
      
    default:
      return state
  }
}