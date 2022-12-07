import { createAsyncThunk } from "@reduxjs/toolkit"
import { deletePostService, getPostsService } from "../../services/posts.service"
import { deletePostFulfilledAction, deletePostsPendingAction, deletePostRejectedAction, getPostsFulfilledAction, getPostsPendingAction, getPostsRejectedAction } from "./action.posts"

// export const getPostsThunk = (params) => async dispatch => {
//   dispatch(getPostsPendingAction())
//   try {
//     const posts = await getPostsService(params)
//     dispatch(getPostsFulfilledAction(posts))
//   } catch (e) {
//     dispatch(getPostsRejectedAction())
//   }
// }

export const getPostsThunk = createAsyncThunk('posts/getPosts', (params) => {
  return getPostsService(params)
})

export const deletePostThunk = createAsyncThunk('posts/deletePost', async ({postId, page, search}, {dispatch, rejectWithValue}) => {
  try {
    await deletePostService(postId)
    dispatch(getPostsThunk({page, search}))
  } catch (error) {
    return rejectWithValue({payload: error})
  }
})

// export const deletePostThunk = (postId, params) => async dispatch => {
//   dispatch(deletePostsPendingAction())
//   try {
//     await deletePostService(postId)
//     dispatch(deletePostFulfilledAction())
//     dispatch(getPostsThunk(params))
//   } catch (e) {
//     dispatch(deletePostRejectedAction())
//   }
// }