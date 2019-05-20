import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'

export const AppListItem = ({completed, editing, text, listItemDelete, listItemEdit, toggleCompleted}) => (
  <ListItem className={editing ? "is-editing-list-item" : ""}>
    {completed ?
      <Icon color={'secondary'} onClick={listItemDelete}>delete</Icon> :
      <Icon color={'primary'} onClick={listItemEdit}>edit</Icon>
    }
    <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}} primary={text}/>
    <div onClick={toggleCompleted}>
      {completed ?
        <Icon color={'primary'}>done</Icon> :
        <Icon>done</Icon>}
    </div>
  </ListItem>
)

AppListItem.propTypes = {
  editing: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  listItemEdit: PropTypes.func.isRequired,
  listItemDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default AppListItem