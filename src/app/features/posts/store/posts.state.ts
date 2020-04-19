import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { Post } from '../models/post.model'

export interface PostsState extends EntityState<Post> {
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (item: Post) => item.id,
  sortComparer: false,
})

export const initialPostsState: PostsState = postsAdapter.getInitialState({
})
