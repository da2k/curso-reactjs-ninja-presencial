import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, withRouter } from 'react-router-dom'
import './index.css'
import App from './app'
// import registerServiceWorker from './registerServiceWorker'

const AppWithRoute = withRouter(App)

ReactDOM.render(
  <BrowserRouter>
    <AppWithRoute />
  </BrowserRouter>,
  document.getElementById('root')
)
// registerServiceWorker()
