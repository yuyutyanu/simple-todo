import { filterTypes } from '../store/ui/filter'
import AppForm from '../components/AppForm'
import React from 'react'
import { actions as todoActions } from '../store/domain/todo'
import { actions as appActions } from '../store/app/app'
import connect from 'react-redux/es/connect/connect'

const AppFormContainer = ({editFormRef, addTodo, editTodo, appUnlock, app, filter, todos}) => {
  return (
    <div>
      {filter !== filterTypes.SHOW_COMPLETE ?
        <div className="container app-form">
          {!app.isLock ?
            < AppForm
              onHandleClick={text => text ? addTodo(text) : null}
              icon="add_icon"
              className="submit-btn"
              labelText="add todo ..."
              value=""
            /> :
            <AppForm
              onHandleClick={text => {
                editTodo(todos.selected, text)
                appUnlock()
              }}
              icon="edit_icon"
              className="submit-btn"
              labelText="edit todo ..."
              ref={editFormRef}
              value={(
                todos.data.some(todo => todo.id === todos.selected)
                && todos.data[todos.data.findIndex(todo => todo.id === todos.selected)].text
              ) || ""}
            />
          }
        </div> : null
      }
    </div>
  )
}


const mapStateToProps = ({app, todos, filter}) => {
  return {
    app,
    filter,
    todos: {
      selected: todos.selected,
      data: todos.data.filter(todo => {
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
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo (text) {
      dispatch(todoActions.addTodo(text))
    },
    editTodo (index, text) {
      dispatch(todoActions.editTodo(index, text))
    },
    appUnlock(){
      dispatch(appActions.unlock())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppFormContainer)