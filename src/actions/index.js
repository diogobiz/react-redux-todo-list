import * as actionsTypes from '../constants/actionsTypes'

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
  return {
    type: actionsTypes.REMOVE_NOTE,
    item: item
  }
}
