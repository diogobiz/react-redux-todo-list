import * as actionsTypes from '../constants/actionsTypes'

let nextItemId = 0;
export const addNote = item => {
  console.log('ACTION:', actionsTypes.ADD_NOTE, item);
  return {
    type: actionsTypes.ADD_NOTE,
    id: nextItemId++,
    item
  }
}

export const removeNote = item => {
  console.log('ACTION:', actionsTypes.REMOVE_NOTE, item);
  return {
    type: actionsTypes.REMOVE_NOTE,
    item
  }
}
