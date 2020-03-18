import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Book } from '../../models/book.module'
import { selectAllBooks } from '../../store/books.selectors'
import { readBooks } from '../../store/books.actions'
import { BooksState } from '../../store/books.reducer'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  public books$: Observable<Book[]>

  constructor(private store: Store<BooksState>) {
    this.books$ = this.store.select(selectAllBooks)
    this.store.dispatch(readBooks())
  }
}
