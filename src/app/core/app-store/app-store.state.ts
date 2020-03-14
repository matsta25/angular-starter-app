import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'

export interface AppState {
  posts: PostsState
  shared: SharedState
}
