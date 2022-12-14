import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./posts/slice.posts";
import { postsApi } from "./rtk-posts/api.posts";
import { createReducer } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.auth";
import { profileReducer } from "./profile/slice.profile";

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const authPersistConfig = {
  key: 'auth',
  storage,
}

const usersPersistedReducer = persistReducer(usersPersistConfig, usersReducer)

const authPersistedReducer = persistReducer(authPersistConfig, authReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersistedReducer,
  posts: postsReducer,
  auth: authPersistedReducer,
  profile: profileReducer
})
