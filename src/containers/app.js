import { filterTypes } from '../store/ui/filter'
import { connect } from 'react-redux'
import { actions as todoActions } from '../store/domain/todo'
import { actions as filterActions } from '../store/ui/filter'
import AppFilter from '../components/AppFilter'
import AppList from '../components/AppList'
import AppForm from '../components/AppForm'
import '../static/app.css'
import '../static/todo.css'
import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.edit = React.createRef()
    this.state = {
      focusIndex: null,
      isEdit: false
    }
  }

  render () {
    const {addTodo, editTodo, completeTodo, setVisibleFilter, filter, todos} = this.props
    return (
      <div>
        <div>
          <AppFilter
            currentFilter={filter}
            onFilterChange={filter => {setVisibleFilter(filter)}}
            tabText={[{text: "ALL"}, {text: "COMPLETE"}, {text: "ACTIVE"}]}
            filterTypes={[filterTypes.SHOW_ALL, filterTypes.SHOW_COMPLETE, filterTypes.SHOW_ACTIVE]}
          />
          <div className="container">
            <AppList list={todos}
                     toggleCompleted={index => completeTodo(index)}
                     listItemDelete={index => console.log(index)}
                     listItemEdit={index => {
                       this.setState({focusIndex: index})
                       this.setState({isEdit: true})
                       process.nextTick(() => {
                         this.edit.current.focus()
                       })
                     }}
                     className="todo-list"
            />
          </div>
          <div className="container app-form">
            {!this.state.isEdit ?
              < AppForm
                onHandleClick={text => addTodo(text)}
                icon="add_icon"
                className="submit-btn"
                labelText="add todo ..."
              /> :
              <AppForm
                onHandleClick={text => editTodo(this.state.focusIndex, text)}
                icon="edit_icon"
                className="submit-btn"
                labelText="edit todo ..."
                ref={this.edit}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

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
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo (text) {
      return dispatch(todoActions.addTodo(text))
    },
    editTodo (index, text) {
      dispatch(todoActions.editTodo(index, text))
    },
    completeTodo (index) {
      return dispatch(todoActions.completeTodo(index))
    },
    setVisibleFilter (filterName) {
      return dispatch(filterActions.setVisibleFilter(filterName))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)