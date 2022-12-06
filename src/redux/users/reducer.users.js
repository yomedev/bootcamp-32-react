import { usersInitialState } from "./initial-state.users"
import { CREATE_USER, DELETE_USER, TOGGLE_NEW_USER_MODAL } from "./types.users"

export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case TOGGLE_NEW_USER_MODAL:
      return {
        ...state, isModalOpen: !state.isModalOpen
      }
    case DELETE_USER:
      return {
        ...state, data: state.data.filter(user => user.id !== action.payload)
      }
    case CREATE_USER:
      return {
        ...state, data: [action.payload, ...state.data]
      }
    default:
      return state
  }
}