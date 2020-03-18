import { Type } from '@angular/core'
import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'
import { BooksEffects } from '../../features/books/store/books.effects'

export const appEffects: Type<any>[] = [
  SharedEffects,
  PostsEffects,
  BooksEffects
]
