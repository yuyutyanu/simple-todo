import { connect } from 'react-redux'
import AppFormContainer from './AppFormContainer'
import AppFilterContainer from './AppFIlterContainer'
import AppListContainer from './AppListContainer'
import '../static/app.css'
import '../static/todo.css'
import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.editForm = React.createRef()
  }

  render () {
    const {app} = this.props
    return (
      <div className="app">
        {app.isLock ? <div className="is-editing"/> : null}
        <AppFilterContainer/>
        <AppListContainer editForm={this.editForm}/>
        <AppFormContainer editFormRef={this.editForm}/>
      </div>
    )
  }
}

const mapStateToProps = ({app}) => {
  return {app}
}

export default connect(mapStateToProps)(App)