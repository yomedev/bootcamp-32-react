import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../constants/fetch-status";
import { profileInitialState } from "./initial-state.profile";
import { getProfileThunk } from "./thunk.profile";

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: builder => {
    builder
    .addCase(getProfileThunk.pending, (state, action) => {
      state.status = Status.Loading
    })
    .addCase(getProfileThunk.fulfilled, (state, {payload}) => {
      state.status = Status.Success
      state.data = payload
    })
    .addCase(getProfileThunk.rejected, (state, action) => {
      state.status = Status.Error
    })
  }
})

export const profileReducer = profileSlice.reducer