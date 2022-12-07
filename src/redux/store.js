import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPostsService } from '../services/posts.service';
import { initialState } from './initial-state';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk'

// const middleware = store => next => action => {
//   console.log(action);
//   if (typeof action === 'function') {
//     return next(action(store.dispatch))
//   }
//   return next(action)
// }

export const getPostsThunk = () => async dispatch => {
  dispatch({type: 'GET_POSTS_LOADING'})
  try {
    const posts = await getPostsService()
    dispatch({type: 'GET_POSTS_SUCCESS', payload: posts})
  } catch (e) {
    dispatch({type: 'GET_POSTS_ERROR'})
  }
} 

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

// const sum1 = (a,b) => a + b
// sum1(2,2) // => 4

// const sumTwoToNumber1 = a => 2 + a
// sumTwoToNumber1(4) // 6

// const sum2 = a => {
//   return b => {
//     a + b
//   }
// }

// sum2(3)(6) // 9

// const sumTwoToNumber2 = sum2(2)

// sumTwoToNumber2(5) // 7