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

