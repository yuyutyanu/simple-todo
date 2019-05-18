import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class AppFilter extends Component{
  constructor(props) {
    super(props);
    this.tabValue = this.tabValue.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }
  tabValue(){
    return this.props.filterTypes.findIndex(type => {
      return type === this.props.currentFilter
    })
  }
  onFilterChange(event, value){
      this.props.onFilterChange(this.props.filterTypes[value])
  }

  render () {
    return (
    <Paper square>
      <Tabs
        variant="fullWidth"
        value={this.tabValue()}
        indicatorColor="primary"
        textColor="primary"
        onChange={this.onFilterChange}
      >
        {this.props.tabText.map((tab,index) =>
          <Tab key={index} label={tab.text}/>
        )}
      </Tabs>
    </Paper>
    );
  }
}

AppFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterTypes: PropTypes.array.isRequired,
  tabText: PropTypes.array.isRequired
}