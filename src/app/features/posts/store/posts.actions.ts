import { createAction, props } from '@ngrx/store'
import { Post } from '../models/post.model'

// CRUD

// Create Post
export const createPost = createAction('[Posts] Create Post', props<{ post: Post }>())
export const createPostSuccess = createAction('[Posts] Create Create Success')
export const createPostFail = createAction('[Posts] Create Create Fail')

// Read Posts
export const readPosts = createAction('[Posts] Read Posts')
export const readPostsSuccess = createAction('[Posts] Read Posts Success', props<{ posts: Post[] }>())
export const readPostsFail = createAction('[Posts] Read Posts Fail')

// Read Post
export const readPost = createAction('[Posts] Read Post', props<{ id: string }>())
export const readPostSuccess = createAction('[Posts] Read Post Success', props<{ post: Post }>())
export const readPostFail = createAction('[Posts] Read Post Fail')

// Update Post
export const updatePost = createAction('[Posts] Update Post', props<{ post: Post }>())
export const updatePostSuccess = createAction('[Posts] Update Post Success')
export const updatePostFail = createAction('[Posts] Update Post Fail')

// Delete Post
export const deletePost = createAction('[Posts] Delete Post', props<{ id: string }>())
export const deletePostSuccess = createAction('[Posts] Delete Post Success')
export const deletePostFail = createAction('[Posts] Delete Post Fail')

