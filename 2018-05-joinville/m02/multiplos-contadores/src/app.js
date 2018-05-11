import React, { Fragment, PureComponent } from 'react'
import Counter from './counter'

class App extends PureComponent {
  state = {
    counters: [0]
  }

  increment = (index) => () => {
    this.setState((prevState) => ({
      counters: prevState.counters.map((counter, i) => {
        return i === index ? counter + 1 : counter
      })
    }))
  }

  decrement = (index) => () => {
    this.setState((prevState) => ({
      counters: prevState.counters.map((counter, i) => {
        return i === index ? counter - 1 : counter
      })
    }))
  }

  add = () => {
    this.setState((prevState) => ({
      counters: prevState.counters.concat(0)
    }))
  }

  remove = (index) => () => {
    this.setState((prevState) => ({
      counters: prevState.counters.filter((counter, i) => {
        return i !== index
      })
    }))
  }

  render() {
    return (
      <Fragment>
        {this.state.counters.map((counter, index) => (
          <Counter 
            key={index}
            value={counter}
            increment={this.increment(index)}
            decrement={this.decrement(index)}
            remove={this.remove(index)}
          />
        ))}

        <button onClick={this.add}>Adicionar</button>
      </Fragment>
    )
  }
}

export default App