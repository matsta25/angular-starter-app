import { Actions, createEffect, ofType } from '@ngrx/effects'
import { BooksService } from '../services/books.service'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { of } from 'rxjs'
import { Injectable } from '@angular/core'
import { readBooks, readBooksFail, readBooksSuccess } from './books.actions'
import { Book } from '../models/book.module'

@Injectable()
export class BooksEffects {
  constructor(private readonly actions$: Actions, private booksService: BooksService) {
  }

  readBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readBooks.type),
      mergeMap(() => this.booksService.readBooks().pipe(
        map((response: HttpResponseModel<Book[]>) => (
          {
            books: response,
            type: readBooksSuccess.type,
          })),
        catchError(() => of({
          type: readBooksFail.type
        }))
      ))
    )
  )
}
