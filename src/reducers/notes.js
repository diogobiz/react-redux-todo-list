import * as actionTypes from '../constants/actionsTypes';

const defaultItem ={
  id: null,
  title: null,
  description: null,
  date: null
}

const initState = {
  editing: false,
  item: defaultItem,
  items: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      let newItem = state.items.find(item => action.item.id === item.id)
      if (!!newItem) {        
        let newItems = state.items.map(item => {
          if (newItem.id === item.id) {
            item = action.item;
          }
          return item;
        });

        return {
          ...state,
          item: defaultItem,
          editing: false,
          items: newItems
        }
      }

      return {
        ...state,
        item: defaultItem,
        editing: false,
        items: [
          ...state.items,
          action.item
        ]
      }    

    case actionTypes.EDIT_NOTE:
      return {
        ...state,
        editing: true,
        item: action.item
      }

    case actionTypes.REMOVE_NOTE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id)
      }

    default:
      return state
  }
}