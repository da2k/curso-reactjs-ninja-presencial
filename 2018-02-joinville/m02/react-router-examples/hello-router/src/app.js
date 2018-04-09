import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
        </ul>

        <Route path='/' exact component={Home} />
        <Route path='/sobre' component={About} />
      </div>
    )
  }
}

const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

const About = () => (
  <p className="App-intro">
    Sobre
  </p>
)

export default App
