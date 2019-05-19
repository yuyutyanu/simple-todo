import React, { Component } from 'react'
import AppListItem from './AppListItem'
import List from '@material-ui/core/List';
import PropTypes from 'prop-types'

class AppList extends Component {
  render () {
     const {list, className, listItemDelete, listItemEdit, toggleCompleted} = this.props
    return (
      <List className={className}>
        {list.map((data, index) =>
          <AppListItem
            listItemDelete={() => {listItemDelete(data.id)}}
            listItemEdit={() => {listItemEdit(data.id)}}
            toggleCompleted={() => {toggleCompleted(data.id)}}
            {...data}
            key={index}
          />
        )}
      </List>
    )
  }
}

AppList.propsType = {
  toggleCompleted: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      editing: PropTypes.bool,
      completed: PropTypes.bool
    }).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired,
  listItemDelete:PropTypes.func.isRequired,
  listItemEdit:PropTypes.func.isRequired,
}

export default AppList