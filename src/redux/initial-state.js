import { authInitialState } from "./auth/initial-state.auth";
import { counterInitalState } from "./counter/initial-state.counter";
import { postsInitialState } from "./posts/initial-state.posts";
import { profileInitialState } from "./profile/initial-state.profile";
import { usersInitialState } from "./users/initial-state.users";

export const initialState = {
  counter: counterInitalState,
  users: usersInitialState,
  posts: postsInitialState,
  auth: authInitialState,
  profile: profileInitialState
}