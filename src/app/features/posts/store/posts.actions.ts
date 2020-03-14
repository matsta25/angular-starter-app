import { createAction, props } from '@ngrx/store'
import { Post } from '../models/post.model'

// Read Posts
export const readPosts = createAction('[Posts] Read Posts')
export const readPostsSuccess = createAction('[Posts] Read Posts Success', props<{ posts: Post[] }>())
export const readPostsFail = createAction('[Posts] Read Posts Fail')
