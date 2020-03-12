import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-store.state';
import {postsReducer} from '../../features/posts/store/posts.reducer';
import {sharedReducer} from '../../shared/store/shared.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  posts: postsReducer,
  shared: sharedReducer
};
