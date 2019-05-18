import {connect} from 'react-redux'
import { Setting } from '../components/Setting'
import React from 'react'


export const Settings = () => (
  <div>
    <Setting/>
  </div>
)

const mapStateToProps = (state) =>{
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings)