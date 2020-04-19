import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { readPostsItem, readPostsItemSuccess } from '../store/posts.actions'
import { PostsState } from '../store/posts.state'
import { select, Store } from '@ngrx/store'
import { selectLoading } from '../../../shared/store/shared.selectors'
import { filter, first, last, tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { selectPostById } from '../store/posts.selectors'

@Injectable({
  providedIn: 'root'
})
export class UpdatePostResolver implements Resolve<boolean> {

  constructor(private store: Store<PostsState>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.id

    this.store.dispatch(readPostsItem({id}))

    if (id) {
      return this.store.pipe(
        select(selectPostById(id)),
        // @ts-ignore
        filter(loaded => loaded),
        first()
      )
    }
  }
}
