import { usersInitialState } from "./initial-state.users"
import { createSlice } from '@reduxjs/toolkit'


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
    changeSearchAction: (state, action) => {
      state.search = action.payload
    },
    clearStateAction: () => {
      return usersInitialState
    }
  },
})

export const usersReducer = usersSlice.reducer

export const { deleteUserAction, createUserAction, toggleModalAction, changeSearchAction } = usersSlice.actions