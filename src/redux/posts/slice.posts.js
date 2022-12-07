import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../constants/fetch-status";
import { getPostsPendingAction, getPostsRejectedAction, getPostsFulfilledAction, deletePostsPendingAction, deletePostFulfilledAction, deletePostRejectedAction } from "./action.posts";
import { postsInitialState } from "./initial-state.posts";
import { deletePostThunk, getPostsThunk } from "./thunk.posts";

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsThunk.pending]: (state, action) => {
      state.status = Status.Loading
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.status = Status.Success
      state.posts = action.payload
    },
    [getPostsThunk.rejected]: (state, action) => {
      state.status = Status.Error
    },

    [deletePostThunk.pending]: (state, action) => {
      state.status = Status.Loading
    },
    [deletePostThunk.fulfilled]: (state, action) => {
      state.status = Status.Success
      // state.posts.data = state.posts.data.filter(post => post.id !== action.payload)
    },
    [deletePostThunk.rejected]: (state, action) => {
      state.status = Status.Error
    },
  }
})

export const postsReducer = postsSlice.reducer