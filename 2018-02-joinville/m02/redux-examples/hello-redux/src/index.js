import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import counter from './reducers/counter'
import registerServiceWorker from './registerServiceWorker'

const initialState = 10
const store = createStore(counter, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="app"]')
)
registerServiceWorker()
