import { filterTypes } from '../store/ui/filter'
import React, { Component } from 'react'
import { actions as todoActions } from '../store/domain/todo'
import { actions as appActions } from '../store/app/app'
import connect from 'react-redux/es/connect/connect'
import TextField from '@material-ui/core/TextField/TextField'
import Fab from '@material-ui/core/Fab/Fab'
import Icon from '@material-ui/core/Icon/Icon'

class AppFormContainer extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.state = {value: ""};
    this.input = React.createRef();
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  addTodo () {
    const {addTodo} = this.props
    const text = this.state.value.trim()
    addTodo(text)
    this.setState({value: ""})
  }

  editTodo () {
    const {editTodo, todos, appUnlock} = this.props
    const text = this.state.value.trim()
    editTodo(todos.selected, text)
    this.setState({value: ""})
    appUnlock()
  }

  render () {
    const {app, filter, todos, formRef} = this.props
    return (
      <div>
        {filter !== filterTypes.COMPLETE ?
          <div className="container app-form">
            {!app.isLock ?
              <div>
                <TextField
                  label="add todo ..."
                  variant="outlined"
                  value={this.state.value}
                  multiline
                  onChange={this.handleChange}
                  inputRef={formRef}/>
                <Fab className="submit-btn" color="secondary" aria-label="Add" onClick={this.addTodo}>
                  <Icon>add_icon</Icon>
                </Fab>
              </div>
              :
              <div>
                <TextField
                  label="edit todo ..."
                  variant="outlined"
                  value={this.state.value}
                  multiline
                  onChange={this.handleChange}
                  onFocus={() => this.setState({value: todos.data[todos.data.findIndex(todo => todo.id === todos.selected)].text})}
                  inputRef={formRef}/>
                <Fab className="submit-btn" color="secondary" aria-label="Add" onClick={this.editTodo}>
                  <Icon>edit_icon</Icon>
                </Fab>
              </div>
            }
          </div> : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({app, todos, filter}) => {
  return {
    app,
    filter,
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
    addTodo (text) {
      dispatch(todoActions.addTodo(text))
    },
    editTodo (index, text) {
      dispatch(todoActions.editTodo(index, text))
    },
    appUnlock () {
      dispatch(appActions.unlock())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppFormContainer)