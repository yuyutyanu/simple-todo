import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {filterTypes} from '../store/ui/filter'

export default class Footer extends Component{
  renderFilter(filter, name){
    if(filter === this.props.filter){
      return name
    }

    return (
      <a href="#" onClick={e =>{
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }
  render () {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter(filterTypes.SHOW_ALL, 'ALL')}
        {','}
        {this.renderFilter(filterTypes.SHOW_COMPLETE, 'COMPLETE')}
        {','}
        {this.renderFilter(filterTypes.SHOW_ACTIVE, 'ACTIVE')}
        .
      </p>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    filterTypes.SHOW_ALL,
    filterTypes.SHOW_ACTIVE,
    filterTypes.SHOW_COMPLETE
    ]).isRequired
}