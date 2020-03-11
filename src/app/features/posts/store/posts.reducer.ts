import {createReducer, on} from '@ngrx/store';
import {initialPostsState} from './posts.state';
import {readPosts, readPostsFail, readPostsSuccess} from './posts.actions';

export const postsReducer = createReducer(
  initialPostsState,
  on(readPosts, (state) => ({
    ...state,
    posts: []
  })),
  on(readPostsSuccess, (state, {posts}) => ({
    ...state,
    posts
  })),
  on(readPostsFail, (state) => ({
    ...state,
  }))
);
