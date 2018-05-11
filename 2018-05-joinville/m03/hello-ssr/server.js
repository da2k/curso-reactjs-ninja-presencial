'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const express = require('express')

const app = express()

const App = () => (
  React.createElement('h1', { onClick: () => alert('oi') }, 'SSR!')
)

const html = ReactDOMServer.renderToString(
  React.createElement(App)
)

console.log(html)

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE>
  <html>
    <div id="root">${html}</div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script>
      console.log(React)
      ReactDOM.hydrate(
        React.createElement(${App}),
        document.querySelector('#root')
      )
    </script>
  </html>
  `)
})

app.listen(8080, () => console.log('ouvindo 8080'))
