import { createAction, props } from '@ngrx/store'
import { Book } from '../models/book.module'

export const readBooks = createAction('[Book/API] Read Books')
export const readBooksSuccess = createAction('[Book/API] Read Books Success', props<{ books: Book[] }>())
export const readBooksFail = createAction('[Book/API] Read Books Fail')
