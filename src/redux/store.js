import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { rootReducer } from './reducer';
import {
  persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { postsApi } from './rtk-posts/api.posts';

export const store = configureStore({
  reducer: rootReducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware), 

  devTools: process.env.NODE_ENV === 'development',
})

export const persistedStore = persistStore(store)

