import { createAction, props } from '@ngrx/store'
import { Post } from '../models/post.model'
import { Update } from '@ngrx/entity'

// CRUD

// Create Post
export const createPostsItem = createAction('[Posts] Create Post', props<{ post: Partial<Post> }>())
export const createPostsItemSuccess = createAction('[Posts] Create Create Success', props<{ post: Post }>())
export const createPostsItemFail = createAction('[Posts] Create Create Fail')

// Read Posts
export const readPosts = createAction('[Posts] Read Posts')
export const readPostsSuccess = createAction('[Posts] Read Posts Success', props<{ posts: Post[] }>())
export const readPostsFail = createAction('[Posts] Read Posts Fail')

// Read Post
export const readPostsItem = createAction('[Posts] Read Post', props<{ id: string }>())
export const readPostsItemSuccess = createAction('[Posts] Read Post Success', props<{ post: Post }>())
export const readPostsItemFail = createAction('[Posts] Read Post Fail')

// Update Post
export const updatePostsItem = createAction('[Posts] Update Post', props<{ updatePost: Update<Post> }>())
export const updatePostsItemSuccess = createAction('[Posts] Update Post Success')
export const updatePostsItemFail = createAction('[Posts] Update Post Fail')

// Delete Post
export const deletePostsItem = createAction('[Posts] Delete Post', props<{ id: string }>())
export const deletePostsItemSuccess = createAction('[Posts] Delete Post Success')
export const deletePostsItemFail = createAction('[Posts] Delete Post Fail')
