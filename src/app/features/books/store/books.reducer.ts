import { Book } from '../models/book.module'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'
import { readBooks, readBooksSuccess } from './books.actions'

export interface BooksState extends EntityState<Book> {
  selectedBookId: number | null;
}

export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (item: Book) => item.id,
  sortComparer: false
})

export const initialBooksState: BooksState = booksAdapter.getInitialState({
  selectedBookId: null,
})

const reducer = createReducer(
  initialBooksState,
  on(readBooks, (state) => ({...state})),
  on(readBooksSuccess, (state, {books}) => booksAdapter.addAll(books, state)),
)

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action)
}
