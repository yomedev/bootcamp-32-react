import { createReducer } from "@reduxjs/toolkit";
import { counterInitalState } from "./initial-state.counter";
import { MINUS, PLUS } from "./types.counter";
import { minusAction, plusAction } from "./action.counter"

// export const counterReducer = (state = counterInitalState, action) => {
//   switch (action.type) {
//     case 'minus':
//       return state - action.payload 
//     case 'plus':
//       return state + action.payload 
//     default:
//       return state
//   }
// }

export const counterReducer = createReducer(counterInitalState, {
  [minusAction]: (state, action) => state - action.payload,
  [plusAction]: (state, action) => state + action.payload,
})



