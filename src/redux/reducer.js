import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/slice.users";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
}

const usersPersistedReducer = persistReducer(persistConfig, usersReducer)


export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersistedReducer
})
