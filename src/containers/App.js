import { connect } from 'react-redux'
import AppFormContainer from './AppFormContainer'
import AppFilterContainer from './AppFIlterContainer'
import AppListContainer from './AppListContainer'
import '../static/app.css'
import '../static/todo.css'
import '../static/form.css'
import React from 'react'

const App = ({app}) => {
  const form = React.createRef()

  return (
    <div className="app">
      {app.isLock ? <div className="is-editing"/> : null}
      <AppFilterContainer/>
      <AppListContainer formRef={form}/>
      <AppFormContainer formRef={form}/>
    </div>
  )
}

const mapStateToProps = ({app}) => {
  return {app}
}

export default connect(mapStateToProps)(App)