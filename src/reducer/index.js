import { combineReducers } from 'redux'
import counter from './counterReducer'
import articles from './articles'
import filters from './filters'
import comments from './comments'

export default combineReducers({
  counter,
  articles,
  filters,
  comments
})
