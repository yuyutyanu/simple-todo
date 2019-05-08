import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component{
  render(){
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    )
  }

  handleClick(e){
    let value = this.refs.input.value
    const text = value.trim()
    this.props.onAddClick(text)
    value = ""
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}