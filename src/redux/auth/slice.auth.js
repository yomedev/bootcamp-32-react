import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../constants/fetch-status";
import { getProfileThunk } from "../profile/thunk.profile";
import { authInitialState } from "./initial-state.auth";
import { loginThunk } from './thunk.auth'

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: (state, action) => authInitialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = Status.Loading
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = Status.Success
        state.access_token = payload.access_token
        state.token_type = payload.token_type
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = Status.Error
      })
      .addCase(getProfileThunk.rejected, (state, action) => authInitialState)
  }
})

export const authReducer = authSlice.reducer

export const { logoutAction } = authSlice.actions