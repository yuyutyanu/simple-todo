import { ADD_TODO,  REMOVE_TODO, TOGGLE_COMPLETED, EDIT_TODO } from '../actionTypes/todo'

export const actions = {
  addTodo (text) {
    return {
      type: ADD_TODO,
      text
    }
  },
  removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id
    }
  },
  completeTodo (id) {
    return {
      type: TOGGLE_COMPLETED,
      id
    }
  },
  editTodo (id, text) {
    return {
      type: EDIT_TODO,
      id,
      text
    }
  }
}

let i = 0;
let target;
export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO :
      if (state) {
        return [
          ...state,
          {id: i++, text: action.text, completed: false}
        ]
      }else {
        return [{id: i++, text: action.text, completed: false}]
      }
    case EDIT_TODO :
      target = state.findIndex(todo => todo.id === action.id)
      return [
        ...state.slice(0, target),
        Object.assign({}, state[target], {text: action.text}),
        ...state.slice(target + 1)
      ]
    case REMOVE_TODO:

      return [
        ...state.filter((todo) => {
          return todo.id !== action.id
        })
      ]
    case TOGGLE_COMPLETED:
      target = state.findIndex(todo => todo.id === action.id)
      return [
        ...state.slice(0, target),
        Object.assign({}, state[target], {completed: !state[target].completed}),
        ...state.slice(target + 1)
      ]
    default:
      return state
  }
}
