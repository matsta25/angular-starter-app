import { Post } from '../models/post.model'

export interface PostsState {
  posts: Post[],
  post: Post
}

export const initialPostsState: PostsState = {
  posts: [],
  post: null
}
