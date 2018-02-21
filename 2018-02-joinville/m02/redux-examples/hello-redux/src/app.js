import React from 'react'
import { connect } from 'react-redux'

export const App = ({ counter, increment, decrement }) => (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>Incrementar</button>
    <button onClick={decrement}>Decrementar</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },

    decrement: () => {
      dispatch({ type: 'DECREMENT' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)






