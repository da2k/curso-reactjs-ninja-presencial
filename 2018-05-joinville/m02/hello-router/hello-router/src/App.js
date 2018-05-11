import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/sobre/empresa/nada'>Nada</Link></li>
        </ul>
        <Route path='/sobre' component={About} />
        <Route path='/sobre/empresa/nada' component={About2} />
      </div>
    );
  }
}

const About = () => (
  <h1>About</h1>
)

const About2 = () => (
  <h1>About 2</h1>
)

export default App;
