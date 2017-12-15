import * as actionsTypes from '../constants/actionsTypes';
import axios from 'axios';

let nextItemId = 1;
export const addNote = item => {
  if (!item.id) {
    item.id = nextItemId++;
  }
    
  return {
    type: actionsTypes.ADD_NOTE,
    item : item
  }
}

export const editNote = item => {
  return {
    type: actionsTypes.EDIT_NOTE,
    item: item
  }
}

export const removeNote = item => {
  return (dispatch) => {
    dispatch(showSnackBar(`DELETED ITEM ${item.title}!`))

    dispatch({
      type: actionsTypes.REMOVE_NOTE,
      item: item
    })
  }
}

export const fetchUsers = (text) => {
  return (dispatch) => {
    dispatch(search(text))

    axios.get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        dispatch(searchSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(searchFailure(error));
      })
  }
}

export const search = (text) => {
  return {
    type: actionsTypes.SEARCH,
    payload: text
  }
}

export const searchSuccess = (data) => {
  return {
    type: actionsTypes.SEARCH_SUCCESS,
    payload: data
  }
}

export const searchFailure = (text) => {
  return {
    type: actionsTypes.SEARCH_FAILURE,
    payload: text
  }
}

export const searchClear = () => {
  return {
    type: actionsTypes.SEARCH_CLEAR
  }
}

export const showSnackBar = message => {
  return {
    type: actionsTypes.SHOW_SNACKBAR,
    message: message
  }
}

export const hideSnackBar = () => {
  return {
    type: actionsTypes.HIDE_SNACKBAR,
  }
}
