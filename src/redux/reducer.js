import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./posts/slice.posts";
import { postsApi } from "./rtk-posts/api.posts";
import { createReducer } from "@reduxjs/toolkit";


const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const usersPersistedReducer = persistReducer(persistConfig, usersReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersistedReducer,
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer
})
