import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PostsState } from './posts.state'

export const selectPostsState = createFeatureSelector<PostsState>('posts')

export const selectPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.posts
)

export const selectPostById = (id: string) => createSelector(
  selectPostsState,
  (state: PostsState) => state.posts.find(item => item.id === id)
)

export const selectPost = createSelector(
  selectPostsState,
  (state: PostsState) => state.post
)
