import {App} from "../pages/App"
import { filterTypes } from '../store/ui/filter'
import { connect } from 'react-redux'
import { actions as todoActions } from '../store/domain/todo'
import { actions as filterActions } from '../store/ui/filter'

const mapStateToProps = ({todos, filter}) => {
  return {
    filter: filter,
    todos: todos.filter(todo => {
      switch (filter) {
        case filterTypes.SHOW_COMPLETE:
          return todo.completed
        case filterTypes.SHOW_ACTIVE:
          return !todo.completed
        default:
          return true
      }
    })
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addTodo(text){
      return dispatch(todoActions.addTodo(text))
    },
    completeTodo (index) {
      return dispatch(todoActions.completeTodo(index))
    },
    setVisibleFilter (filterName) {
      return dispatch(filterActions.setVisibleFilter(filterName))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)