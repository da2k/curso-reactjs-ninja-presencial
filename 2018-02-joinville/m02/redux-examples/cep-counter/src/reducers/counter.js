const INCREMENT = 'counter:INCREMENT'
const DECREMENT = 'counter:DECREMENT'

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1
    case DECREMENT: return state - 1
  }
  return state
}

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export default counter
