'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const express = require('express')

const app = express()

const h1 = (...props) => (
  React.createElement('h1', ...props)
)

const title = ReactDOMServer.renderToStaticMarkup(
  h1(null, 'home')
)

console.log(title)


app.get('/', (req, res) => {
  res.send(title)
})

app.listen(3000, () => console.log('listening on 3000'))
