import { combineReducers } from "redux"
import { usersInitialState } from "./initial-state.users"
import { CREATE_USER, DELETE_USER, TOGGLE_NEW_USER_MODAL } from "./types.users"
import { createSlice, createAction } from '@reduxjs/toolkit'

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return {
//         ...state, isModalOpen: !state.isModalOpen
//       }
//     case DELETE_USER:
//       return {
//         ...state, data: state.data.filter(user => user.id !== action.payload)
//       }
//     case CREATE_USER:
//       return {
//         ...state, data: [action.payload, ...state.data]
//       }
//     default:
//       return state
//   }
// }

// const dataReducer = (state = usersInitialState.data, action) => {
//   switch (action.type) {
//     case DELETE_USER:
//       return state.filter(user => user.id !== action.payload)
//     case CREATE_USER:
//       return [action.payload, ...state]
//     default:
//       return state
//   }
// }

// const isModalOpenReducer = (state = usersInitialState.isModalOpen, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return !state
//     default:
//       return state
//   }
// }

// const filtersReducer = (state = usersInitialState.filters, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


// export const usersReducer = combineReducers({
//   data: dataReducer,
//   isModalOpen: isModalOpenReducer,
//   filters: filtersReducer
// })

// export const createUserAction = createAction('users/createUserAction', user => ({ payload: { ...user, id: Date.now() } }))

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload)
    },
    createUserAction: {
      prepare: user => ({ payload: { ...user, id: Date.now() } }),
      reducer: (state, action) => {
        console.log(action.payload);
        state.data.unshift(action.payload)
        state.isModalOpen = !state.isModalOpen
      },
    },
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen
    },
    clearStateAction: () => {
      return usersInitialState
    }
  },
  // extraReducers: {
  //   [createUserAction]: (state, action) => {
  //     console.log(action.payload);
  //     state.data.unshift(action.payload)
  //     state.isModalOpen = !state.isModalOpen
  //   },
  // }
})

export const usersReducer = usersSlice.reducer

export const { deleteUserAction, createUserAction, toggleModalAction } = usersSlice.actions