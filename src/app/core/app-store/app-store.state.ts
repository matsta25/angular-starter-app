import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'
import { TodosState } from '../../features/todos/store/todos.state'
import { UsersState } from '../../features/users/store/users.state'


export interface AppState {
  shared: SharedState
  posts: PostsState
  todos: TodosState
  users: UsersState
}
