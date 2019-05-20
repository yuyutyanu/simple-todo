import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED, EDIT_TODO, EDITING_TODO } from '../actionTypes/todo'

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
  },
  editingTodo (id) {
    return {
      type: EDITING_TODO,
      id
    }
  }
}

let i = 0;
let target;

const initState = {
  data:[]
}
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO :
      if (state.data) {
        return {
          data: [
            ...state.data,
            {id: i++, text: action.text, editing: false, completed: false}
          ]
        }
      } else {
        return [{id: i++, text: action.text, editing: false, completed: false}]
      }

    case EDIT_TODO :
      target = state.data.findIndex(todo => todo.id === action.id)
      return {
        data: [
          ...state.data.slice(0, target),
          Object.assign({}, state.data[target], {editing: false, text: action.text}),
          ...state.data.slice(target + 1)
        ]
      }
    case EDITING_TODO:
      target = state.data.findIndex(todo => todo.id === action.id)
      return {
        data: [
          ...state.data.slice(0, target),
          Object.assign({}, state.data[target], {editing: true}),
          ...state.data.slice(target + 1)
        ]
      }
    case REMOVE_TODO:
      return {
        data: [
          ...state.data.filter((todo) => {
            return todo.id !== action.id
          })
        ]
      }
    case TOGGLE_COMPLETED:
      target = state.data.findIndex(todo => todo.id === action.id)
      return {
        data: [
          ...state.data.slice(0, target),
          Object.assign({}, state.data[target], {completed: !state.data[target].completed}),
          ...state.data.slice(target + 1)
        ]
      }
    default:
      return state
  }
}
