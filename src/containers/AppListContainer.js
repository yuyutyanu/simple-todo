import React from 'react'
import { actions as todoActions } from '../store/domain/todo'
import { actions as appActions } from '../store/app/app'
import connect from 'react-redux/es/connect/connect'
import { filterTypes } from '../store/ui/filter'
import List from '@material-ui/core/List/List'
import Icon from '@material-ui/core/Icon/Icon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import ListItem from '@material-ui/core/es/ListItem/ListItem'

export const AppListContainer = ({formRef, todos, toggleCompleted, removeTodo, selectId, lock, editingTodo}) => {

  function doEditable (id) {
    selectId(id)
    lock()
    process.nextTick(() => {formRef.current.focus()})
    editingTodo(id)
  }

  return (
    <div className="container todo-list-wrap">
      <List className="todo-list">
        {todos.data.map((todo, index) =>
          <ListItem className={todo.editing ? "is-editing-list-item" : ""} key={index}>
            {todo.completed ?
              <Icon color={'secondary'} onClick={() => {removeTodo(todo.id)}}>delete</Icon> :
              <Icon color={'primary'} onClick={() => {doEditable(todo.id)}}>edit</Icon>
            }
            <ListItemText style={{textDecoration: todo.completed ? 'line-through' : 'none'}} primary={todo.text}/>
            <div onClick={() => {toggleCompleted(todo.id)}}>{todo.completed ? <Icon color={'primary'}>done</Icon> :
              <Icon>done</Icon>}</div>
          </ListItem>
        )}
      </List>
    </div>
  )
}
const mapStateToProps = ({todos, filter}) => {
  return {
    todos: {
      selected: todos.selected,
      data: todos.data.filter(todo => {
        switch (filter) {
          case filterTypes.COMPLETE:
            return todo.completed
          case filterTypes.ACTIVE:
            return !todo.completed
          default:
            return true
        }
      })
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editingTodo (id) {
      dispatch(todoActions.editingTodo(id))
    },
    removeTodo (id) {
      dispatch(todoActions.removeTodo(id))
    },
    toggleCompleted (index) {
      dispatch(todoActions.toggleCompleted(index))
    },
    selectId (id) {
      dispatch(todoActions.selectId(id))
    },
    lock () {
      dispatch(appActions.lock())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppListContainer)