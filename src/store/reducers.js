import { reducer as todos } from './domain/todo'
import { reducer as filter } from './ui/filter'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  todos,
  filter
})