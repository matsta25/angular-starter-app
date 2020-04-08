import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'
import { TodosState } from '../../features/todos/store/todos.state'

export interface AppState {
  shared: SharedState
  posts: PostsState
  todos: TodosState
}
