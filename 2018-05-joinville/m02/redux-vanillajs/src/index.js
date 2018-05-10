import { createStore } from 'redux'

const initialState = { counter: 0 }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return {
      counter: state.counter + 1
    }
    case 'DECREMENT': return {
      counter: state.counter - 1
    }
  }
  return state
}

const store = createStore(reducer)

const renderizar = () => {
  document.querySelector('#root').innerHTML = `<h1>${store.getState().counter}</h1>`
}

store.subscribe(renderizar)

console.log(store)
console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })