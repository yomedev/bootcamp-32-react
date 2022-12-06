import { counterInitalState } from "./initial-state.counter";

export const counterReducer = (state = counterInitalState, action) => {
  
  switch (action.type) {
    case 'minus':
      return state - action.payload 
    case 'plus':
      return state + action.payload 
    default:
      return state
  }
}