import  React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
import App from "./containers/app"
import {combineReducers, createStore} from 'redux'
import {reducer as todos} from './store/todo'
import {reducer as filter} from './store/filter'


const todoApp = combineReducers({
  todos,
  filter
})

ReactDom.render(
  <Provider store={createStore(todoApp)}>
    <App/>
  </Provider>,
  document.getElementById("root")
)