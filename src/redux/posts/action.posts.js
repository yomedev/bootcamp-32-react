import { createAction } from "@reduxjs/toolkit";

export const getPostsPendingAction = createAction('posts/getPostsPending')
export const getPostsFulfilledAction = createAction('posts/getPostsFulfilled')
export const getPostsRejectedAction = createAction('posts/getPostsRejected')

export const deletePostsPendingAction = createAction('posts/deletePostsPending')
export const deletePostFulfilledAction = createAction('posts/deletePostFulfilled')
export const deletePostRejectedAction = createAction('posts/deletePostRejectedAction')