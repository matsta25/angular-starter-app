import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'
import { BooksState } from '../../features/books/store/books.reducer'

export interface AppState {
  shared: SharedState
  posts: PostsState
  books: BooksState
}
