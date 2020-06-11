import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

// reducersは関数として定義する
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      console.log('no implemets action');
      return state
  }
}