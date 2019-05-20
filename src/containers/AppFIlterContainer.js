import React from 'react'
import { AppFilter } from '../components/AppFilter'
import { actions, filterTypes } from '../store/ui/filter'
import { connect } from 'react-redux'

const AppFilterContainer = ({filter, setVisibleFilter}) => (
  <AppFilter
    currentFilter={filter}
    onFilterChange={filter => {setVisibleFilter(filter)}}
    tabText={[{text: "ALL"}, {text: "COMPLETE"}, {text: "ACTIVE"}]}
    filterTypes={[filterTypes.SHOW_ALL, filterTypes.SHOW_COMPLETE, filterTypes.SHOW_ACTIVE]}
  />
)

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
export default connect(mapStateToProps,mapDispatchToProps)(AppFilterContainer)