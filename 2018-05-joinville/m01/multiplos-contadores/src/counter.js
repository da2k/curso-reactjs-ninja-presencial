import React from 'react'

const Counter = ({ value, increment, decrement, remove }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={remove}>x</button>
  </div>
)

export default Counter