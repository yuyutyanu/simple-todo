import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const AppFilter = ({filterTypes, currentFilter, onFilterChange, tabText}) => {
  function tabValue () {
    return filterTypes.findIndex(type => {
      return type === currentFilter
    })
  }

  function filterChange (event, value) {
    onFilterChange(filterTypes[value])
  }

  return (
    <Paper square>
      <Tabs
        variant="fullWidth"
        value={tabValue()}
        indicatorColor="primary"
        textColor="primary"
        onChange={filterChange}
      >
        {tabText.map((tab, index) =>
          <Tab key={index} label={tab.text}/>
        )}
      </Tabs>
    </Paper>
  )
}
AppFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterTypes: PropTypes.array.isRequired,
  tabText: PropTypes.array.isRequired
}