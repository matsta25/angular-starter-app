import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-store.state';
import {postsReducer} from '../../features/posts/store/posts.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  posts: postsReducer
};
