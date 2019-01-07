import { combineReducers } from 'redux'
import counter from './counterReducer'
import articles from './articles'

export default combineReducers({
    counter, articles
})