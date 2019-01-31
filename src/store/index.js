import reducer from '../reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import randomId from '../middlewares/randomId'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(randomId))

const store = createStore(reducer, enhancer)

window.store = store

export default store
