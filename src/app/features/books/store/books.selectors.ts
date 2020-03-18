import { booksAdapter, BooksState } from './books.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const {
  selectAll
} = booksAdapter.getSelectors()

export const selectBooksState = createFeatureSelector<BooksState>('books')

export const selectAllBooks = createSelector(
  selectBooksState,
  selectAll
)
