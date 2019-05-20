import { filterTypes } from '../store/ui/filter'
import { connect } from 'react-redux'
import { actions as todoActions } from '../store/domain/todo'

import { AppList } from '../components/AppList'
import AppForm from '../components/AppForm'
import AppFilterContainer from './AppFIlterContainer'
import '../static/app.css'
import '../static/todo.css'
import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.edit = React.createRef()
    this.state = {
      focusId: null,
      isEdit: false
    }
  }

  render () {
    const {addTodo, editTodo, editingTodo, removeTodo, completeTodo, selectId, filter, todos} = this.props
    return (
      <div className="app">
        {this.state.isEdit ?
          <div className="is-editing"/> : null
        }
        <AppFilterContainer/>
        <div className="container todo-list-wrap">
          <AppList list={todos.data}
                   toggleCompleted={index => completeTodo(index)}
                   listItemDelete={id => {
                     removeTodo(id)
                   }}
                   listItemEdit={id => {
                     selectId(id)
                     this.setState({isEdit: true})
                     process.nextTick(() => {
                       this.edit.current.focus()
                     })
                     editingTodo(id)
                   }}
                   className="todo-list"
          />
        </div>

        {filter !== filterTypes.SHOW_COMPLETE ?
          <div className="container app-form">
            {!this.state.isEdit ?
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
                  this.setState({isEdit: false})
                }}
                icon="edit_icon"
                className="submit-btn"
                labelText="edit todo ..."
                ref={this.edit}
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
}

const mapStateToProps = ({todos, filter}) => {
  return {
    filter: filter,
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
    editingTodo (id) {
      dispatch(todoActions.editingTodo(id))
    },
    removeTodo (id) {
      dispatch(todoActions.removeTodo(id))
    },
    completeTodo (index) {
      dispatch(todoActions.completeTodo(index))
    },
    selectId (id) {
      dispatch(todoActions.selectId(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)