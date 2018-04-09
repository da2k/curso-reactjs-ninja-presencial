import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ counter }) => (
  <h1>Contador: {counter}</h1>
)

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)
