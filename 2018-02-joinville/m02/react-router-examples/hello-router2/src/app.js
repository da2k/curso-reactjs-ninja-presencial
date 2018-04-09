import React, { PureComponent } from 'react'
import { Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends PureComponent {
  render() {
    const { isUserLoggedIn } = this.props
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
          <li><NavLink to='/' activeClassName='abc'>Home</NavLink></li>
          <li><NavLink to='/servicos' activeClassName='abc'>Produtos</NavLink></li>
        </ul>

        <Route path='/' exact component={Home} />
        <Route path='/servicos'>
          {(props) => (
            <Services isUserLoggedIn={true} />
          )}
        </Route>
      </div>
    )
  }
}

const Services = ({ match, location, history, isUserLoggedIn }) => {
  return (
    <div>
      <h1>Services</h1>
    </div>
  )
}

const Service = () => (
  <h1>Service</h1>
)

const NoMatch = () => (
  <h1>Opss....</h1>
)

const Home = () => (
  <h1>Home</h1>
)

export default App
