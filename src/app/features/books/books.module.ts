import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksComponent } from './components/books/books.component'
import { BooksRoutingModule } from './books-routing.module'


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule {
}
