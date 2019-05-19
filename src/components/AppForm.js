import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import '../static/form.css'

export default class AppForm extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.input = React.createRef();
  }
  focus () {
    this.input.current.focus()
    this.setState({value: this.props.value})
  }
  handleKeyDown(e){
    if(e.keyCode === 13){
      this.handleClick()
    }
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleClick (e) {
    const text = this.state.value.trim()
    this.props.onHandleClick(text)
    this.setState({value:""})
  }

  render () {
    const {labelText, className, icon} = this.props
    return (
      <div>
        <TextField label={labelText} variant="outlined" margin="none" color="secondary" value={this.state.value} onKeyDown={e => this.handleKeyDown(e)}  onChange={this.handleChange} inputRef={this.input}/>
        <Fab className={className} color="secondary" aria-label="Add" onClick={e => this.handleClick(e)}>
          <Icon>{icon}</Icon>
        </Fab>
      </div>
    )
  }
}

AppForm.propTypes = {
  value: PropTypes.string,
  onHandleClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}