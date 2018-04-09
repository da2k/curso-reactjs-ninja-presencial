'use strict'

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const app = express()

const Title = () => (
  React.createElement('h1', null, 'Título')
)

const title = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log(title)

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
     ${title}
    </html>
  `)
})

app.listen(8080, () => console.log('assistindo 8080'))
