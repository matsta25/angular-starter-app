import { createReducer, on } from '@ngrx/store'
import { initialPostsState } from './posts.state'
import { readPost, readPosts, readPostsFail, readPostsSuccess, readPostSuccess } from './posts.actions'

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
  })),
  on(readPost, (state) => ({
    ...state,
    post: null
  })),
  on(readPostSuccess, (state, {post}) => ({
    ...state,
    post
  })),
  on(readPostsFail, (state) => ({
    ...state,
  }))
)
