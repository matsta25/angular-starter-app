import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostsState} from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.posts
);
