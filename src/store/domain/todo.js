import { ADD_TODO,  REMOVE_TODO, TOGGLE_COMPLETED, EDIT_TODO } from '../actionTypes/todo'

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
      type: TOGGLE_COMPLETED,
      index
    }
  },
  editTodo (index, text) {
    return {
      type: EDIT_TODO,
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
    case EDIT_TODO :
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {text: action.text}),
        ...state.slice(action.index + 1)
      ]
    case TOGGLE_COMPLETED:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {completed: !state[action.index].completed}),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
