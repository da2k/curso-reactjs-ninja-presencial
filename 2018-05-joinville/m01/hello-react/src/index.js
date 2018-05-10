import React, { Fragment, PureComponent } from 'react'
import ReactDOM from 'react-dom'

import './index.css';

class MeuComponent extends PureComponent {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      number: 1,
      showHeader: true
    }
  }

  componentDidMount () {
    console.log('cDM')
    console.log(this.input.focus())
    console.log(this.state.number)
    this.setState({
      number: this.state.number + 1
    })
  }

  render () {
    console.log('render')
    return (
      <Fragment>
        <input ref={(node) => { this.input = node }} />
        <h1 ref={(node) => { this.titulo = node }}>Título</h1>
        <div onClick={(e) => this.setState({ number: 2, showHeader: !this.state.showHeader })}>
          {this.state.number}
          {this.state.showHeader && (
            <MeuHeader>
              Título {this.state.number}
            </MeuHeader>
          )}
        </div>
      </Fragment>
    )
  }
}

class MeuHeader extends PureComponent {
  constructor () {
    super()
    this.state = {
      number: 1
    }
  }
  componentDidMount () {
    console.log('cDM MeuHeader')
    this.timer = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('cWUM MeuHeader')
    clearInterval(this.timer)
  }

  render () {
    console.log('render MeuHeader')
    const { children } = this.props
    const { number } = this.state
    return (
      <header>
        <h1>{children} {number}</h1>
        <span>Qualquer coisa</span>
      </header>
    )
  }
}


ReactDOM.render(
  <MeuComponent>Children</MeuComponent>
  ,
  document.getElementById('root')
)















// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
