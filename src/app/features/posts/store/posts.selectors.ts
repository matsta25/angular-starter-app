import { createFeatureSelector, createSelector } from '@ngrx/store'
import { postsAdapter, PostsState } from './posts.state'

const { selectAll } = postsAdapter.getSelectors()
const selectPostsState = createFeatureSelector<PostsState>('posts')

export const selectPosts = createSelector(
  selectPostsState,
  selectAll,
)
export const selectPostById = (postId: string) => createSelector(
  selectPostsState,
  postsState => postsState.entities[postId],
)
