import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }
  return state
}

const store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="app"]')
)
registerServiceWorker()
