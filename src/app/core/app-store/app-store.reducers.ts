import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { postsReducer } from '../../features/posts/store/posts.reducer'
import { sharedReducer } from '../../shared/store/shared.reducer'
import { todosReducer } from '../../features/todos/store/todos.reducer'
import { usersReducer } from '../../features/users/store/users.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  posts: postsReducer,
  todos: todosReducer,
  users: usersReducer,
}
