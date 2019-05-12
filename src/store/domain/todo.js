import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO } from '../actionTypes/todo'

export const actions = {
  addTodo (text) {
    return {
      type: ADD_TODO,
      text
    }
  },
  removeTodo (index) {
    return {
      type: REMOVE_TODO,
      index
    }
  },
  completeTodo (index) {
    return {
      type: COMPLETE_TODO,
      index
    }
  },
  updateTodo (index, text) {
    return {
      type: UPDATE_TODO,
      index,
      text
    }
  }
}

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO :
      if (state) {
        return [
          ...state,
          {text: action.text, completed: false}
        ]
      }else {
        return [{text: action.text, completed: false}]
      }
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {completed: true}),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
