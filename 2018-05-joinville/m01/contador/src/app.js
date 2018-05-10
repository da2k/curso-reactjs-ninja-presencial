import React, { PureComponent } from 'react'

class App extends PureComponent {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  decrement = (index) => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default App