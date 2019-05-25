import React from 'react'
import { actions, filterTypes } from '../store/ui/filter'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper/Paper'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Tab from '@material-ui/core/Tab/Tab'

const AppFilterContainer = ({filter, setVisibleFilter}) => {
  const tabs = [filterTypes.ALL, filterTypes.ACTIVE, filterTypes.COMPLETE]

  function tabValue () {
    const currentFilter = filter
    return tabs.findIndex(value => currentFilter === value)
  }

  return (
    <Paper square>
      <Tabs
        variant="fullWidth"
        value={tabValue()}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, value) => setVisibleFilter(tabs[value])}
      >
        {tabs.map((label, index) =>
          <Tab key={index} label={label}/>
        )}
      </Tabs>
    </Paper>
  )
}

const mapStateToProps = ({filter}) => {
  return {
    filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibleFilter (filterName) {
      dispatch(actions.setVisibleFilter(filterName))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppFilterContainer)