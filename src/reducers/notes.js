import * as actionTypes from '../constants/actionsTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.item.title,
          description: action.item.description,
          date: action.item.date
        }
      ]
    case actionTypes.REMOVE_NOTE:
      console.log(action)
      return state.filter( item => item.id != action.item.id);
    default:
      return state
  }
}