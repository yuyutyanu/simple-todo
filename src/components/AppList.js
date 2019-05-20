import React from 'react'
import AppListItem from './AppListItem'
import List from '@material-ui/core/List';
import PropTypes from 'prop-types'

export const AppList = ({list, className, listItemDelete, listItemEdit, toggleCompleted}) => (
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
  listItemDelete: PropTypes.func.isRequired,
  listItemEdit: PropTypes.func.isRequired,
}