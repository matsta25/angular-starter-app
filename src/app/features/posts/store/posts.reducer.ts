import { Action, createReducer, on } from '@ngrx/store'
import { initialPostsState, postsAdapter, PostsState } from './posts.state'
import { createPostSuccess, deletePost, readPostsSuccess, readPostSuccess, updatePost } from './posts.actions'


const reducer = createReducer(
  initialPostsState,
  on(createPostSuccess, (state, { post }) => postsAdapter.addOne(post, state)),
  on(readPostsSuccess, (state, { posts }) => postsAdapter.setAll(posts, state)),
  on(readPostSuccess, (state, { post }) => postsAdapter.upsertOne(post, state)),
  on(updatePost, (state, { updatePost}) => postsAdapter.updateOne(updatePost, state)),
  on(deletePost, (state, { id }) => postsAdapter.removeOne(id, state)),
)

export function postsReducer(state: PostsState, action: Action) {
  return reducer(state, action)
}
