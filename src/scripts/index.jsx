import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import comments from './reducers'
import CommentBox from './components/CommentBox'

const middlewares = [thunk]

const store = createStore(
  comments,
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <CommentBox pollInterval={2000} />
  </Provider>
  , document.getElementById('content')
)
