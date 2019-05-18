import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'

class AppListItem extends Component {
  render () {
    const {completed, text, listItemDelete, listItemEdit, toggleCompleted} = this.props
    return (
      <ListItem>
        {completed ? <Icon color={'secondary'} onClick={listItemDelete}>delete</Icon> :
          <Icon color={'primary'} onClick={listItemEdit}>edit</Icon>}
        <ListItemText
          style={{textDecoration: completed ? 'line-through' : 'none'}}
          primary={text}
        />
        <div onClick={toggleCompleted}>
          {completed ?
            <Icon color={'primary'}>done</Icon> :
            <Icon>done</Icon>}
        </div>
      </ListItem>
    )
  }
}

AppListItem.propTypes = {
  toggleCompleted: PropTypes.func,
  listItemEdit: PropTypes.func.isRequired,
  listItemDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default AppListItem